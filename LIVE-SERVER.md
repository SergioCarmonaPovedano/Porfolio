## 🚀 Cómo usar el Portfolio con Live Server

### Pasos para ejecutar:

1. **Abre la carpeta en VS Code**
   - Archivo → Abrir carpeta
   - Selecciona: `C:\Users\Sergio\Documents\Portfolio`

2. **Activa Live Server**
   - Haz clic en el archivo `index.html` en el explorador
   - Click derecho → "Open with Live Server"
   - O usa el atajo: `Alt + L, Alt + O`

3. **Tu navegador se abrirá automáticamente** con la landing page

### Estructura del Proyecto:

```
📁 Portfolio/
├── index.html              ← Landing page (página principal)
├── portfolio.html          ← Tu portfolio completo
├── style-landing.css       ← Estilos modernos para ambas páginas
├── style.css               ← Estilos antiguos (podés borrar si no los usas)
├── script.js               ← Scripts compartidos
└── README.md               ← Guía de personalización
```

### Navegación:

- **Desde index.html** → Botón "Explorar Mi Portfolio" → Abre portfolio.html
- **Desde portfolio.html** → Botón "← Volver al inicio" → Regresa a index.html

### Diseño Uniforme:

✅ Landing page: Minimalista y moderna
✅ Portfolio: Mismo diseño, mismo CSS, mismo flujo
✅ Responsive: Se adapta a cualquier pantalla
✅ Dark mode: Compatible con preferencias del sistema

### Personalización Rápida:

Abre `index.html` y busca:
- **Tu nombre**: Línea ~36
- **Tu subtítulo**: Línea ~37  
- **Tu foto**: Línea ~28 (reemplaza `avatar-placeholder.png`)
- **Tus links**: Busca en la sección de contacto

### Atajos útiles en VS Code:

- `Ctrl + S` → Guardar archivo
- `Ctrl + Shift + P` → Paleta de comandos (escribe "Live Server")
- `F5` o `Ctrl + Shift + R` → Recargar en el navegador
- `Ctrl + Shift + Delete` → Limpiar caché del navegador

---

**¡Listo!** Tu portfolio está 100% funcional y listo para personalizar. 🎉
