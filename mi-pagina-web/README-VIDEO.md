# Cómo Agregar Video de Fondo al Home

El video de fondo está configurado pero necesitas agregar tu propio archivo de video.

## Problema con YouTube
Los videos de YouTube que tienen deshabilitado el "embedding" no pueden ser insertados en sitios web. Por eso ahora usamos video local en formato MP4.

## Pasos para Agregar tu Video

### Opción 1: Descargar Video de YouTube

1. **Descargar el video de YouTube:**
   - Visita: https://www.y2mate.com/ o https://yt1s.com/
   - Pega la URL: `https://www.youtube.com/watch?v=wXb-9zplTv0`
   - Selecciona calidad: **1080p o 720p** (recomendado para web)
   - Descarga el archivo en formato **MP4**

2. **Renombrar el archivo:**
   - Renombra el archivo descargado a: `video.mp4`

3. **Colocar el archivo:**
   - Copia `video.mp4` en la carpeta principal del proyecto (junto a index.html)

4. **¡Listo!**
   - Abre `index.html` en tu navegador
   - El video debería reproducirse automáticamente

### Opción 2: Usar tu Propio Video

1. **Requisitos del video:**
   - Formato: MP4 (recomendado)
   - Resolución: 1920x1080 (Full HD) o 1280x720 (HD)
   - Peso: Máximo 10-20 MB para buena carga
   - Duración: Entre 10-30 segundos es ideal

2. **Convertir video (si es necesario):**
   - Usa https://cloudconvert.com/
   - Convierte a MP4 con codec H.264

3. **Optimizar video:**
   - Usa https://www.freeconvert.com/video-compressor
   - Reduce el tamaño sin perder mucha calidad

4. **Coloca el archivo:**
   - Guarda tu video como `video.mp4` en la carpeta del proyecto

## Estructura del Proyecto

```
mi-pagina-web/
├── index.html
├── styles.css
├── script.js
├── video.mp4          ← Tu video aquí
└── README-VIDEO.md
```

## Si No Quieres Video

Si prefieres no usar video, simplemente elimina o renombra el archivo `video.mp4`.
La página mostrará automáticamente un hermoso gradiente de fondo como fallback.

## Características del Video

- ✅ **Autoplay**: Se reproduce automáticamente
- ✅ **Muted**: Sin sonido (requerido para autoplay)
- ✅ **Loop**: Se repite infinitamente
- ✅ **Responsive**: Se adapta a todos los dispositivos
- ✅ **Mobile**: Funciona en móviles con `playsinline`
- ✅ **Overlay**: Capa oscura semitransparente para mejor legibilidad

## Solución de Problemas

**El video no se reproduce:**
- Verifica que el archivo se llame exactamente `video.mp4`
- Asegúrate de que está en la carpeta correcta
- Comprueba que el formato sea MP4
- Intenta con un video más pequeño (máx 20 MB)

**El video se ve cortado:**
- Esto es normal, el video se ajusta automáticamente para llenar toda la pantalla
- Usa `object-fit: cover` en CSS (ya está configurado)

**El video carga lento:**
- Reduce el tamaño del video (usa un compresor)
- Baja la resolución a 720p
- Reduce la duración del video

## Alternativa: Video Hospedado Online

Si prefieres hospedar el video online, puedes usar:

1. **Vimeo** (mejor opción)
2. **Tu propio servidor**
3. **CDN como Cloudinary**

Edita `index.html` línea 43 y cambia:
```html
<source src="video.mp4" type="video/mp4">
```
Por:
```html
<source src="https://tu-servidor.com/video.mp4" type="video/mp4">
```

---

¿Necesitas ayuda? Revisa la documentación o contacta al desarrollador.
