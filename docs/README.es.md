# PrismTab

**PrismTab** es una extensión de Google Chrome para la **Nueva pestaña**, muy personalizable y orientada a una experiencia de escritorio pura. Ofrece estética liquid glass, widgets arrastrables, búsqueda inteligente, dock de favoritos, notas Markdown, tarjetas HTML/CSS/JS ilimitadas, atajos de teclado y Chrome Sync.

> **Estado:** Beta  
> **Manifest:** V3 · **Tema predeterminado:** fondo `#FFFFFF` · texto `#000000`


| Language | File |
|----------|------|
| English | [README.md](../README.md) |
| 繁體中文 | [README.zh-TW.md](./README.zh-TW.md) |
| 简体中文 | [README.zh-CN.md](./README.zh-CN.md) |
| 日本語 | [README.ja.md](./README.ja.md) |
| 한국어 | [README.ko.md](./README.ko.md) |
| Deutsch | [README.de.md](./README.de.md) |
| Français | [README.fr.md](./README.fr.md) |
| Español | [README.es.md](./README.es.md) |


---

## Índice

1. [Funciones](#funciones)
2. [Instalación](#instalación)
3. [Estructura](#estructura)
4. [Ajustes](#ajustes)
5. [Adaptación y desarrollo](#adaptación-y-desarrollo)
6. [Notas](#notas)
7. [Permisos](#permisos)
8. [Licencia](#licencia)

---

## Funciones

### Apariencia
- **8 idiomas + detección automática**
- Color de fondo y de texto, fuente / grosor / tamaño
- Imagen de fondo (IndexedDB), degradados, desenfoque

### Herramientas
- Reloj, barra de búsqueda (varios motores, historial, abrir en nueva pestaña)
- Navegador (enlaces), memorandos
- **Tarjetas personalizadas** (HTML/CSS/JS; marco glass del sistema; JS en sandbox)

### Avanzado
- Atajos, Chrome Sync enviar/restaurar, importar/exportar JSON
- Óptica liquid glass, restablecimiento global
- Guías de alineación y de espacio equidistante; centro de control fijo

---

## Instalación

1. Comprobar que `manifest.json` está en la **raíz**  
2. Abrir `chrome://extensions`  
3. Activar el **modo de desarrollador**  
4. **Cargar descomprimida**  
5. Elegir la carpeta **raíz** de PrismTab  
6. Abrir una nueva pestaña  

Tras cambiar el código, recarga la extensión.

---

## Estructura


```
PrismTab/
├── manifest.json                 # Chrome Extension Manifest V3 (must stay at root)
├── README.md                     # English (GitHub landing page)
├── docs/
│   ├── README.zh-TW.md           # Traditional Chinese
│   ├── README.zh-CN.md           # Simplified Chinese
│   ├── README.ja.md              # Japanese
│   ├── README.ko.md              # Korean
│   ├── README.de.md              # German
│   ├── README.fr.md              # French
│   └── README.es.md              # Spanish
├── assets/
│   └── icons/
│       ├── icon-16.png
│       ├── icon-48.png
│       ├── icon-128.png
│       └── favicon.ico
└── src/
    ├── newtab/
    │   ├── newtab.html           # New Tab UI
    │   └── newtab.js             # Core logic, i18n, layout, widgets
    ├── options/
    │   ├── options.html          # Options page
    │   └── options.js
    ├── studio/
    │   └── studio.html           # Color / advanced palette companion
    └── shared/
        ├── styles.css            # Liquid glass design system
        ├── initial-config.json   # Default configuration seed
        ├── storage/
        │   └── indexeddb.js      # Background image Blob storage
        └── sandbox/
            └── sandbox.html      # CSP-safe sandbox for custom card JS
```


---

## Ajustes

```
Apariencia → Idioma / Tema / Texto / Fondo
Herramientas → Reloj / Búsqueda / Navegador (notas) / Más configuración
Avanzado → Atajos / Sincronización / Óptica glass / Restablecer
```

**No** incluye inyección en sitios web arbitrarios (solo Nueva pestaña).

---

## Adaptación y desarrollo

- Idioma en «Apariencia → Idioma»
- Actualizar las 8 locales de `TRANSLATIONS`
- Sin `eval` en páginas de extensión; JS de tarjetas vía sandbox
- Escrituras de almacenamiento con debounce

---

## Notas

- Beta: exporta JSON antes de actualizaciones importantes
- Predeterminado: fondo blanco, texto negro
- Color del icono `rgb(214,214,214)`

---

## Permisos

| Permiso | Uso |
|---------|-----|
| `storage` | Ajustes y diseño |
| `unlimitedStorage` | Fondos grandes |

---

## Licencia

Copyright © colaboradores de PrismTab. Se recomienda **MIT License** para distribución pública. El software se ofrece «tal cual».

**PrismTab** — *Cada nueva pestaña, tu escritorio de cristal.*
