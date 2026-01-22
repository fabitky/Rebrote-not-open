
# 🏓 Torneos Rebrote - Guía de Despliegue

¡Tu aplicación está lista para el mundo real! Aquí tienes cómo ponerla online de forma permanente y gratuita para usarla en tu club.

## Opción 1: Vercel (Recomendado - La más rápida)
Vercel es ideal para este tipo de aplicaciones modernas.

1. Ve a [Vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New"** > **"Project"**.
3. Importa tu repositorio de GitHub donde subiste estos archivos.
4. Haz clic en **"Deploy"**.
5. ¡Listo! Te dará una URL privada (ej: `mi-torneo.vercel.app`) que puedes compartir por WhatsApp con los otros jugadores.

## Opción 2: GitHub Pages
Si prefieres usar solo GitHub:

1. Sube todos los archivos a un repositorio en GitHub.
2. Ve a la pestaña **Settings** (Configuración) de tu repositorio.
3. En el menú de la izquierda, entra en **Pages**.
4. En "Build and deployment", selecciona la rama `main` (o la que uses) y la carpeta `/(root)`.
5. Haz clic en **Save**.
6. Espera 1 minuto y aparecerá tu enlace oficial.

## Cómo instalarla en tu móvil:
Una vez que entres a TU PROPIA URL desde el móvil:
- **iPhone (Safari)**: Pulsa el icono de "Compartir" (cuadrado con flecha arriba) y elige **"Añadir a la pantalla de inicio"**.
- **Android (Chrome)**: Pulsa los tres puntos de arriba a la derecha y elige **"Instalar aplicación"**.

---
*💡 Nota técnica: Los datos se guardan en el almacenamiento local de tu teléfono (LocalStorage). No necesitas base de datos.*
