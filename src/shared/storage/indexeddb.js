/**
 * IndexedDB module — stores large assets (background images as Blob / string data).
 * Fixed: Robust handling of Blob, File, and Base64 Data URLs to prevent
 * "TypeError: Failed to execute 'createObjectURL' on 'URL': Overload resolution failed".
 */
const LiquidGlassDB = (() => {
  const DB_NAME = 'LiquidGlassDB';
  const DB_VERSION = 1;
  const STORE_NAME = 'assets';
  let cachedBgObjectUrl = null;

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      req.onsuccess = (e) => resolve(e.target.result);
      req.onerror = (e) => reject(e.target.error);
    });
  }

  async function put(key, value) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.objectStore(STORE_NAME).put(value, key);
    });
  }

  async function get(key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(key);
      req.onsuccess = () => resolve(req.result ?? null);
      req.onerror = () => reject(req.error);
    });
  }

  async function remove(key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.objectStore(STORE_NAME).delete(key);
    });
  }

  function revokeCachedUrl() {
    if (cachedBgObjectUrl && cachedBgObjectUrl.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(cachedBgObjectUrl);
      } catch (err) {
        console.warn('Failed to revoke object URL:', err);
      }
      cachedBgObjectUrl = null;
    }
  }

  /**
   * Safe save for background image. Accepts File, Blob, or base64 data URL string.
   */
  async function saveBgImage(fileOrBlobOrString) {
    revokeCachedUrl();
    if (!fileOrBlobOrString) {
      await clearBgImage();
      return null;
    }

    // If it's already a Blob or File
    if (fileOrBlobOrString instanceof Blob) {
      await put('bgImage', fileOrBlobOrString);
      cachedBgObjectUrl = URL.createObjectURL(fileOrBlobOrString);
      return cachedBgObjectUrl;
    }

    // If it's a string (e.g. data:image/... or https://...)
    if (typeof fileOrBlobOrString === 'string') {
      await put('bgImage', fileOrBlobOrString);
      cachedBgObjectUrl = fileOrBlobOrString;
      return cachedBgObjectUrl;
    }

    // Fallback: try converting to Blob or store as-is
    try {
      const blob = new Blob([fileOrBlobOrString]);
      await put('bgImage', blob);
      cachedBgObjectUrl = URL.createObjectURL(blob);
      return cachedBgObjectUrl;
    } catch (e) {
      console.error('LiquidGlassDB: Unsupported format for background image', e);
      return null;
    }
  }

  /**
   * Safe load for background image.
   * Handles both stored Blob and legacy/base64 string formats without throwing TypeError.
   */
  async function loadBgImage() {
    revokeCachedUrl();
    const stored = await get('bgImage');
    if (!stored) return null;

    // Case 1: stored is a Blob or File instance
    if (stored instanceof Blob) {
      try {
        cachedBgObjectUrl = URL.createObjectURL(stored);
        return cachedBgObjectUrl;
      } catch (err) {
        console.error('LiquidGlassDB: Failed to createObjectURL from Blob', err);
        return null;
      }
    }

    // Case 2: stored is already a URL string (data:image/... or https://...)
    if (typeof stored === 'string') {
      cachedBgObjectUrl = stored;
      return cachedBgObjectUrl;
    }

    // Case 3: stored is ArrayBuffer or Uint8Array
    if (stored instanceof ArrayBuffer || ArrayBuffer.isView(stored)) {
      try {
        const blob = new Blob([stored], { type: 'image/jpeg' });
        cachedBgObjectUrl = URL.createObjectURL(blob);
        return cachedBgObjectUrl;
      } catch (err) {
        console.error('LiquidGlassDB: Failed to create Blob from buffer', err);
        return null;
      }
    }

    return null;
  }

  async function clearBgImage() {
    revokeCachedUrl();
    await remove('bgImage');
  }

  return { saveBgImage, loadBgImage, clearBgImage, put, get, remove };
})();
