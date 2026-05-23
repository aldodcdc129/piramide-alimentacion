# 🥗 Pirámide de Alimentación Saludable

Proyecto educativo interactivo — HTML · CSS · JavaScript puro (sin dependencias)

---

## 📁 Estructura del proyecto

```
piramide-alimentacion/
├── index.html      ← página principal
├── style.css       ← estilos y animaciones
├── script.js       ← lógica interactiva y datos
└── README.md       ← este archivo
```

---

## 🚀 Cómo ejecutarlo en VS Code con Live Server

### Paso 1 — Instalar la extensión Live Server
1. Abre **Visual Studio Code**.
2. Ve a la pestaña de **Extensiones** (ícono de cuadraditos en la barra lateral, o `Ctrl+Shift+X`).
3. Busca **"Live Server"** (autor: Ritwick Dey).
4. Haz clic en **Install**.

### Paso 2 — Abrir la carpeta del proyecto
1. En VS Code: `Archivo → Abrir carpeta…`
2. Selecciona la carpeta **`piramide-alimentacion`**.

### Paso 3 — Lanzar con Live Server
- Opción A: Haz clic derecho sobre `index.html` en el explorador de archivos → **"Open with Live Server"**.
- Opción B: Haz clic en el botón **"Go Live"** en la barra de estado inferior derecha de VS Code.

El navegador abrirá automáticamente `http://127.0.0.1:5500/index.html` ✅

---

## 🖥️ Sin VS Code — doble clic directo

También puedes abrir `index.html` directamente en tu navegador (Chrome, Edge o Firefox) con doble clic. El proyecto no requiere servidor para funcionar, salvo la carga de fuentes de Google Fonts (requiere internet la primera vez; luego queda en caché).

---

## ✨ Funcionalidades

| Característica | Descripción |
|---|---|
| 🔺 Pirámide interactiva | 4 niveles con clip-path CSS, colores y emojis |
| 👆 Clic / teclado | Cada nivel abre un modal con info completa |
| 📋 Modal educativo | Descripción, beneficios, ejemplos, frecuencia |
| 🌙 Modo oscuro | Toggle con persistencia en `localStorage` |
| 🔊 Sonidos suaves | Generados con Web Audio API (sin archivos externos) |
| ♿ Accesibilidad | Navegación por teclado + roles ARIA + foco trampa |
| 📱 Responsive | Adaptado para laptop y móvil |
| 🎞️ Animaciones | Entrada escalonada + zoom al seleccionar nivel |

---

## 🎨 Paleta de colores

| Nivel | Color | Significado |
|---|---|---|
| Base (1) | Verde bosque `#5a9e6f` | Naturaleza, frescura, abundancia |
| Proteínas (2) | Ámbar dorado `#e8a838` | Energía, nutrición, calidez |
| Grasas (3) | Terracota `#e07c3a` | Moderación, equilibrio |
| Ocasional (4) | Rojo alerta `#c04040` | Precaución, consumo limitado |

---

© 2025 · Proyecto educativo · Diseñado para exposiciones y aulas
