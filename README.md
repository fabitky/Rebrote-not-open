
# 🏓 Torneos Rebrote - Guía de Despliegue

## ⚠️ ¿Por qué ves la pantalla en negro?
GitHub Pages es un servidor de archivos "estáticos". No sabe qué hacer con los archivos `.tsx` (React/TypeScript). Para que funcione, necesitas una plataforma que "construya" el proyecto.

## 🚀 La solución: Desplegar en Vercel (Recomendado)
Vercel es gratuito y está diseñado para aplicaciones de React como esta.

1. Ve a [Vercel.com](https://vercel.com) e inicia sesión con tu GitHub.
2. Haz clic en **"Add New Project"**.
3. Selecciona tu repositorio de Torneos Rebrote.
4. Haz clic en **"Deploy"**.
5. ¡Listo! Vercel te dará un enlace (ej: `mis-torneos.vercel.app`) que funcionará perfectamente en tu móvil.

## 📱 Cómo instalarla como App
Una vez tengas tu link de Vercel:
1. Ábrelo en Safari (iPhone) o Chrome (Android).
2. Selecciona **"Añadir a pantalla de inicio"**.
3. Ahora tendrás el icono de Rebrote en tu móvil y funcionará incluso sin internet.

---
*Nota: He incluido un archivo `package.json` para que Vercel sepa automáticamente cómo preparar tu aplicación.*
