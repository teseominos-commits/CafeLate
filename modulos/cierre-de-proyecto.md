# Módulo: cierre de proyecto

> Parte de la plantilla v2.2. Se activa al empezar el cierre de un proyecto. Las referencias a secciones son las del `CLAUDE.md` principal.

- Compruebo que las migraciones están en el repo.
- Ofrezco exportar los datos, avisando de que sirve poco para retomar, porque dependen de usuarios de Auth que desaparecen con el proyecto. Con datos de prueba recomiendo no exportar.
- Marco el estado `cerrado` en `ESTADO.md`, con una sección "Cómo retomar": crear el proyecto de Supabase, aplicar las migraciones, recrear los usuarios de Auth y poner las variables de entorno.
- Se conservan el repo, el proyecto de Vercel y el de Lovable, porque son gratuitos. Solo se borra el proyecto de Supabase: lo borra el autor con mis pasos y el nombre del proyecto, y después compruebo que el hueco quedó libre.
- Los datos de prueba que haya creado yo para comprobar algo se anotan en `ESTADO.md` y desaparecen con el proyecto.
