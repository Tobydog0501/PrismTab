# PrismTab - Chrome New Tab Extension (Beta)

PrismTab is a highly customizable Chrome New Tab extension featuring liquid glass aesthetics, custom wallpaper support, smart search prediction, dynamic UI controls, and shortcut management.

This project is currently in **Beta**. Features and design elements are actively being refined.

---

## Key Features

- **Liquid Glass Aesthetics**: Semi-transparent glassmorphic interface with optical refraction styling.
- **IndexedDB Wallpaper Storage**: Supports high-resolution custom background images and media assets.
- **Customizable Interface**: Adjustable theme colors, font typography, and draggable layout elements.
- **Smart Search Input**: Multiple search engines support with built-in search history suggestions.
- **Customizable Dock**: Easy creation, editing, and organization of favorite website shortcuts.
- **Cross-Page Style Syncing**: Option to extend accent colors and custom scrollbar aesthetics across web pages.

---

## Installation Guide

Follow these steps to install PrismTab manually in Google Chrome:

### Step 1: Download the Project
1. Go to the project repository page.
2. Click the `<> Code` button near the top right and select `Download ZIP`.
3. Extract the downloaded ZIP file to a folder on your computer.

### Step 2: Open Chrome Extension Settings
1. Open Google Chrome.
2. Type `chrome://extensions/` into the address bar and press **Enter**.
3. Alternatively, click the three-dots menu in the top-right corner -> **Extensions** -> **Manage Extensions**.

### Step 3: Enable Developer Mode
1. In the top-right corner of the Extensions page, toggle **Developer mode** to **ON**.

### Step 4: Load the Unpacked Extension
1. Click the **Load unpacked** button in the top-left corner.
2. Browse to and select the extracted folder (ensure you select the folder containing `manifest.json`).
3. Click **Select Folder**.

### Step 5: Test the New Tab
1. Open a new tab in Chrome.
2. The PrismTab interface should now be loaded.

---

## Project Structure

- `manifest.json`: Extension configuration file (Manifest V3).
- `newtab.html`: Main structural layout for the new tab.
- `styles.css`: Visual styling, optical glass filters, and UI rules.
- `newtab.js`: Core interaction, drag-and-drop, and configuration logic.
- `indexeddb.js`: Asset storage layer for high-resolution wallpapers.
- `content.js` / `content.css`: Global style injection for web page synchronization.

---

## Notes

- This is a **Beta release**. Some UI behaviors or features may undergo changes in future updates.
- User settings and wallpapers are stored locally on your device via LocalStorage and IndexedDB.

---

## License

This project is licensed under the MIT License.