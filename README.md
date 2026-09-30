# Perfil3_MarioArteaga

Aplicación individual de React Native con Expo SDK 57 y React Navigation.

## Datos del estudiante
- Nombre: Mario Arteaga
- Carnet: 20240053
- Sección: A
- Grupo: 2
- Video demostrativo público: PENDIENTE
- Enlace de descarga del APK: PENDIENTE (se obtiene al terminar el build)

Edita los datos en `src/config/student.js` y en este README antes de entregar.

## Ejecutar
Requiere Node.js 22.13 o superior y una versión de Expo Go compatible con SDK 57.

```bash
npm install
npx expo install --fix
npx expo-doctor
npx expo start
```

`expo install --fix` alinea las versiones de los módulos nativos con SDK 57. Se incluye package-lock.json con las versiones comprobadas. Puedes usar `npm ci` para instalar esas mismas versiones.

## Generar el APK instalable
Crea una cuenta de Expo y ejecuta dentro de esta carpeta:

```bash
npx eas-cli@latest login
npx eas-cli@latest build:configure
npx eas-cli@latest build --platform android --profile preview
```

Acepta la creación del proyecto EAS y la generación del keystore cuando se solicite. El perfil `preview` de `eas.json` genera **APK**, no AAB. Al finalizar EAS mostrará el enlace real de descarga. Descarga e instala ese APK y copia su enlace al README. No se ha generado un APK dentro de este ZIP.

El icono y el splash están configurados con la foto de Rick proporcionada. Comprueba el splash en el APK de release: Expo Go no representa fielmente el splash nativo.

## Arquitectura
- `src/screens/StudentScreen.js`: pantalla inicial con datos y botón de navegación.
- `src/screens/CharactersScreen.js`: lista de personajes y navegación por páginas.
- `src/hooks/useCharacters.js`: fetch con async/await, paginación, cancelación, timeout, estados de carga y reintento.
- `src/components/CharacterCard.js`: tarjeta reutilizable con imagen, nombre y párrafo descriptivo derivado de los campos de la API (la API no proporciona una biografía).
- `src/components/Button.js` y `Feedback.js`: controles reutilizables.
- `assets/`: imagen de Rick en PNG y versiones del icono y splash.

API: https://rickandmortyapi.com/api/character
No necesita claves ni variables de entorno. Requiere conexión a internet para consultar personajes e imágenes.

## Verificación en Android
1. Instala el APK; comprueba el icono de Rick en el launcher.
2. Abre la app en frío y muestra el splash y la pantalla de estudiante.
3. Comprueba nombre, carnet, sección y grupo.
4. Pulsa Explorar personajes; comprueba nombre, imagen y descripción.
5. Cambia de página, regresa y usa la flecha del encabezado para volver al perfil.
6. Abre la lista sin conexión y comprueba el mensaje y Reintentar; recupera la conexión y reintenta.
7. Graba estos pasos en un emulador o dispositivo y publica un enlace visible sin iniciar sesión.

Crea un repositorio público llamado exactamente `Perfil3_MarioArteaga`, sube el proyecto y completa los enlaces. No publiques credenciales ni el keystore.

## Estado de validación
Dependencias instaladas y alineadas con Expo SDK 57. Comprobación de sintaxis y exportación del bundle Android con Metro completadas correctamente. La ejecución en Android, el build APK y el video siguen pendientes; la exportación de Metro no es un APK ni una prueba de instalación.

## Diseño actualizado
Fondo azul #ABD5EC, botones verdes y nueva imagen de Rick pepinillo en el espacio. Se incluye una bienvenida de 1.6 segundos dentro de la app para mostrar la imagen también en Expo Go. Los cambios en el icono y el splash nativos requieren generar e instalar un APK nuevo; reiniciar Metro no actualiza recursos de un APK ya instalado.
