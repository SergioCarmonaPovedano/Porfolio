# Portfolio - Guía de Uso

## 📋 Estructura del Proyecto

Tu portfolio ahora tiene una estructura moderna y minimalista con dos páginas principales:

### 1. **Landing Page** (`index.html`)
La página principal que ven los visitantes. Presenta:
- ✨ Una imagen tuya con marco decorativo
- 📝 Texto descriptivo sobre quién eres
- 🔘 Botón principal "Explorar Mi Portfolio" que lleva al portfolio completo
- 🎯 Tres tarjetas con tus fortalezas principales
- 📧 Sección de contacto con links a Email, LinkedIn y GitHub

### 2. **Portfolio Completo** (`portfolio.html`)
La página del mapa del tesoro con todas tus secciones, proyectos y habilidades.

---

## 🎨 Personalización

### Cambiar tu Imagen de Perfil

1. **Reemplazar la imagen placeholder:**
   - Coloca una imagen tuya en la carpeta del proyecto
   - Llámala `profile-image.jpg` (o usa el nombre que prefieras)
   
2. **Actualizar en `index.html`:**
   ```html
   <!-- Línea aprox. 33 en index.html -->
   <img src="TU_IMAGEN.jpg" alt="Sergio Carmona" class="profile-image" />
   ```

3. **Recomendaciones:**
   - Formato: JPG o PNG
   - Tamaño: 300x300 px (cuadrada, se verá en un círculo)
   - Tamaño de archivo: < 500 KB
   - Fondo limpio y profesional

### Cambiar Información Personal

#### En la Landing Page (`index.html`):
- Línea ~36: Nombre en el hero title
- Línea ~37: Subtítulo ("Desarrollador & Estudiante Apasionado")
- Línea ~39: Descripción principal

#### En el Portfolio (`portfolio.html`):
- Actualiza los datos en las secciones correspondientes
- Cambia los emails y links en las secciones de contacto

### Cambiar Colores (Tema)

Edita el archivo `style-landing.css` en la sección `:root`:

```css
:root {
    /* Colores modernos y limpios */
    --primary: #1a1a1a;           /* Color principal (negro actual) */
    --secondary: #ffffff;          /* Color secundario (blanco actual) */
    --accent: #0066ff;             /* Color de acento (azul actual) */
    --accent-light: #e6f2ff;       /* Versión clara del acento */
    --text-dark: #1a1a1a;
    --text-light: #666666;
    /* ... más variables */
}
```

**Ejemplos de combinaciones modernas:**
- Profesional: Azul (#0066ff) + Gris oscuro (#1a1a1a)
- Minimalista: Negro (#000000) + Blanco (#ffffff)
- Elegante: Verde (#00a86b) + Gris claro (#f5f5f5)

### Cambiar Links de Contacto

En `index.html`, busca la sección de contact-links y actualiza:
```html
<a href="mailto:tu@email.com" class="contact-link">
<a href="https://linkedin.com/in/tuusuario" target="_blank" class="contact-link">
<a href="https://github.com/tuusuario" target="_blank" class="contact-link">
```

---

## 🚀 Despliegue

### Subir a GitHub Pages (Gratis)

1. Crea un repositorio llamado `username.github.io`
2. Sube todos los archivos
3. Tu portfolio estará en: `https://username.github.io`

### Otras opciones:
- **Netlify**: Conecta tu repo de GitHub (free tier generoso)
- **Vercel**: Similiar a Netlify, muy rápido
- **Tu propio servidor**: Si tienes hosting

---

## 📱 Características Técnicas

### Landing Page:
✅ Diseño minimalista y moderno
✅ Completamente responsive (móvil, tablet, desktop)
✅ Animaciones suaves y fluidas
✅ Dark mode automático (si el usuario lo prefiere)
✅ Optimizado para SEO
✅ Carga rápida

### Portfolio:
✅ Mapa interactivo del tesoro
✅ Modal con todas tus secciones
✅ Animaciones de los caminos
✅ Carga de foto de perfil personalizada
✅ Barras de habilidades animadas

---

## 🎯 Próximos Pasos Recomendados

1. **Cambiar tu foto** - Es lo más importante
2. **Actualizar links de contacto** - Email, LinkedIn, GitHub
3. **Completar información personal** - Nombre, descripción, ubicación
4. **Revisar los proyectos** - Asegúrate de que estén actualizados
5. **Añadir más proyectos** - Muestra tus mejores trabajos

---

## 💡 Consejos de Diseño

- **Minimalismo**: Menos es más. No sobrecargues la página
- **Coherencia**: Mantén los mismos colores y fuentes
- **Legibilidad**: Asegúrate de que el texto se lea bien
- **Velocidad**: Optimiza las imágenes para carga rápida
- **Función**: Todo debe tener un propósito

---

## 🐛 Troubleshooting

### La imagen no aparece:
- Verifica que el nombre del archivo sea exacto (mayúsculas/minúsculas)
- Asegúrate de que el archivo esté en la carpeta del proyecto
- Intenta con `./nombre-imagen.jpg`

### Los estilos no se aplican:
- Limpia el caché del navegador (Ctrl+Shift+Delete)
- Verifica que los archivos CSS estén en la carpeta correcta
- Abre la consola (F12) para ver errores

### Los links no funcionan:
- Verifica que la URL sea completa (con http:// o https://)
- Para links internos, usa rutas relativas (./pagina.html)

---

**¿Necesitas ayuda?** Consulta la documentación de HTML/CSS o pregunta a tu asistente de IA. 🤖

¡Tu portfolio está listo para brillar! ✨
