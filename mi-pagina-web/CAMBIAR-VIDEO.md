# Cómo Cambiar el Video de Fondo

El problema con YouTube es que muchos videos tienen **restricciones de embedding** por parte del propietario. Por eso ahora usamos un video directo desde un CDN.

## Video Actual

Actualmente está usando un video gratuito de Pixabay. Si quieres cambiarlo, tienes 3 opciones:

---

## OPCIÓN 1: Video Gratuito desde Pixabay/Pexels (RECOMENDADO)

### Paso 1: Encuentra un video
Visita estos sitios de videos gratuitos:
- **Pixabay Videos**: https://pixabay.com/videos/
- **Pexels Videos**: https://www.pexels.com/videos/
- **Coverr**: https://coverr.co/

### Paso 2: Descarga la URL directa
1. Encuentra un video que te guste
2. Click derecho en el video → "Copiar dirección del video"
3. O descarga el video y hospédalo en tu servidor

### Paso 3: Reemplaza la URL
Edita `index.html` línea 43:
```html
<source src="AQUI_TU_URL_DEL_VIDEO" type="video/mp4">
```

**Ejemplos de videos gratuitos con URL directa:**

**Tecnología/Digital:**
```html
<source src="https://cdn.pixabay.com/video/2023/12/31/195051-901018531_large.mp4" type="video/mp4">
```

**Abstracto/Moderno:**
```html
<source src="https://cdn.pixabay.com/video/2024/01/24/197764-906264858_large.mp4" type="video/mp4">
```

**Espacio/Futurista:**
```html
<source src="https://cdn.pixabay.com/video/2022/03/24/112428-690754462_large.mp4" type="video/mp4">
```

---

## OPCIÓN 2: Video Local (Desde tu Computadora)

### Paso 1: Descarga el video de YouTube
Usa uno de estos servicios:
- https://www.y2mate.com/
- https://yt1s.com/
- https://savefrom.net/

Pega la URL del video de YouTube y descarga en formato **MP4**.

### Paso 2: Optimiza el video (opcional pero recomendado)
- **Comprimir**: https://www.freeconvert.com/video-compressor
- **Convertir a MP4**: https://cloudconvert.com/
- **Tamaño recomendado**: Máximo 10-20 MB
- **Resolución**: 1280x720 (HD) es suficiente

### Paso 3: Coloca el video
Guarda el video como `video.mp4` en la carpeta del proyecto:
```
mi-pagina-web/
├── index.html
├── styles.css
├── script.js
└── video.mp4     ← Tu video aquí
```

### Paso 4: Actualiza el HTML
Edita `index.html` línea 43:
```html
<source src="video.mp4" type="video/mp4">
```

---

## OPCIÓN 3: Buscar Video de YouTube que SÍ Permita Embedding

No todos los videos de YouTube tienen restricciones. Aquí te explico cómo encontrar uno que funcione:

### Cómo verificar si un video permite embedding:

1. Ve al video en YouTube
2. Click en **"Compartir"** → **"Insertar"**
3. **Si aparece el código iframe**: ✅ El video permite embedding
4. **Si dice "El vídeo no permite la inserción"**: ❌ No funcionará

### Canales que suelen permitir embedding:
- Videos de música oficial (algunos)
- Canales de noticias
- Canales educativos
- Tu propia cuenta de YouTube

### Cómo usar un video de YouTube que SÍ funciona:

1. Encuentra un video que permita embedding
2. Copia el ID del video (ej: `dQw4w9WgXcQ`)
3. Edita `index.html` y reemplaza todo el elemento `<video>` por:

```html
<iframe
    src="https://www.youtube.com/embed/ID_DEL_VIDEO?autoplay=1&mute=1&loop=1&playlist=ID_DEL_VIDEO&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

4. También actualiza `styles.css` líneas 140-151 cambiando `video` por `iframe`:

```css
.video-background iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 56.25vw;
    min-height: 100vh;
    min-width: 177.77vh;
    transform: translate(-50%, -50%);
    pointer-events: none;
}
```

---

## OPCIÓN 4: Sin Video (Solo Gradiente Hermoso)

Si prefieres no usar video, simplemente elimina el bloque de video del HTML:

Edita `index.html` y elimina las líneas 35-46:
```html
<!-- Elimina esto -->
<div class="video-background">
    <video ... >
    </video>
</div>
```

La página mostrará automáticamente el gradiente de fondo (morado/azul) que ya está configurado en el CSS.

---

## Recomendación Final

**La mejor opción es OPCIÓN 1** (video gratuito de Pixabay/Pexels) porque:
- ✅ No tiene restricciones
- ✅ Funciona desde CDN (rápido)
- ✅ No ocupa espacio en tu servidor
- ✅ Miles de videos profesionales gratis
- ✅ Licencia libre para uso comercial

---

## ¿Necesitas Ayuda?

Si tienes problemas para cambiar el video, revisa:
1. Que la URL sea directa al archivo MP4
2. Que el video no sea muy pesado (máx 20 MB)
3. Que el formato sea MP4 (no AVI, MOV, etc.)
4. Que la URL sea HTTPS (no HTTP)

¡Disfruta tu página web con video de fondo!
