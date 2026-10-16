# ESTADO.md

Memoria del proyecto. Claude la lee al abrir cada sesión y la actualiza solo, sin pedir permiso, al cerrar cada tarea y cada vez que se toma una decisión. Debe mantenerse corta: lo antiguo se resume o pasa a `CHANGELOG.md`.

Última actualización: 2026-10-16

## Estado actual
- Versión: 0.1.0 (en desarrollo, sin publicar)
- Estado del proyecto: activo
- Fase: desarrollo (copia informativa; manda `CLAUDE.md`)
- Ritmo: autónomo (copia informativa; manda `CLAUDE.md`)
- Dónde estamos: landing construida y probada en local (móvil OK, tipos, tests y build en verde). Supabase y Vercel creados y configurados; falta comprobar el primer despliegue y probar el formulario.

## Hecho
- Ficha del proyecto rellenada en `CLAUDE.md`.
- Repo limpiado: borrados los módulos y el changelog de la plantilla, README propio.
- Plan aprobado por el autor (2026-10-16).
- Fusión a `main` hecha el 2026-10-16; CI verde; despliegue de producción sale de `main`.
- Landing React + Vite + TS: portada, quiénes somos, carta, horario, formulario con validación y anti-spam. 5 pruebas automáticas.
- Migraciones `contact_messages` (RLS solo-insertar) y permisos recortados a insertar, aplicadas en Supabase y guardadas en el repo. Avisos de seguridad de Supabase: ninguno.
- Proyecto de Supabase `cafelate` (eu-west-3, coste 0) y de Vercel `cafelate` (framework vite, enlazado al repo, protección de URLs de prueba desactivada, variables públicas puestas).
- CI de GitHub en `.github/workflows/ci.yml`.

## Decisiones
- 2026-10-16 Proyecto: landing de una cafetería de barrio (encargo de práctica, nada cuenta para nivel ni cobros).
- 2026-10-16 Sin Lovable: el código lo escribe Claude y Vercel publica la URL de previsualización.
- 2026-10-16 Ritmo autónomo: el autor aprueba el plan una vez y Claude trabaja hasta terminar.
- 2026-10-16 Quién paga: nadie (opción A por defecto, el autor no la confirmó).
- 2026-10-16 Mensajes del formulario: tabla en Supabase con RLS que solo permite insertar. El autor confirmó crear los proyectos de Supabase y Vercel.
- 2026-10-16 La simulación de RLS con tres usuarios se canceló en el entorno; se verificó leyendo el catálogo (RLS activa, solo política INSERT, permisos recortados).
- 2026-10-16 Se usa la clave pública legacy `anon` (JWT) porque el código la envía también como Bearer.

## En curso
- Prueba del autor en el móvil (formulario real).

## Pendiente
- Etiqueta `v0.1.0` pendiente (crear desde un equipo local con `gh`).
- Sustituir textos, carta, dirección y fotos de ejemplo por los reales.

## Dudas abiertas
- Nombre, textos, carta y fotos reales de la cafetería: ¿los aporta el autor o invento unos de ejemplo?

## Próxima acción
- Recoger el resultado de la prueba del autor y ajustar lo que pida.
