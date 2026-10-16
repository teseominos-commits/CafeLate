# ESTADO.md

Memoria del proyecto. Claude la lee al abrir cada sesión y la actualiza solo, sin pedir permiso, al cerrar cada tarea y cada vez que se toma una decisión. Debe mantenerse corta: lo antiguo se resume o pasa a `CHANGELOG.md`.

Última actualización: 2026-10-16

## Estado actual
- Versión: 0.1.0 (en desarrollo, sin publicar)
- Estado del proyecto: activo
- Fase: desarrollo (copia informativa; manda `CLAUDE.md`)
- Ritmo: autónomo (copia informativa; manda `CLAUDE.md`)
- Dónde estamos: landing construida y probada en local (móvil OK, tipos, tests y build en verde). Falta crear Supabase y Vercel (con confirmación) y publicar.

## Hecho
- Ficha del proyecto rellenada en `CLAUDE.md`.
- Repo limpiado: borrados los módulos y el changelog de la plantilla, README propio.
- Plan aprobado por el autor (2026-10-16).
- Landing React + Vite + TS: portada, quiénes somos, carta, horario, formulario con validación y anti-spam. 5 pruebas automáticas.
- Migración `contact_messages` con RLS solo-insertar (en el repo, aún sin aplicar).
- CI de GitHub en `.github/workflows/ci.yml`.

## Decisiones
- 2026-10-16 Proyecto: landing de una cafetería de barrio (encargo de práctica, nada cuenta para nivel ni cobros).
- 2026-10-16 Sin Lovable: el código lo escribe Claude y Vercel publica la URL de previsualización.
- 2026-10-16 Ritmo autónomo: el autor aprueba el plan una vez y Claude trabaja hasta terminar.
- 2026-10-16 Quién paga: nadie (opción A por defecto, el autor no la confirmó).
- 2026-10-16 Mensajes del formulario: tabla en Supabase con RLS que solo permite insertar (pendiente de confirmar la creación del proyecto).

## En curso
- Crear proyecto de Supabase y de Vercel (pendiente de confirmación del autor).

## Pendiente
- Aplicar migración y comprobar RLS; variables públicas en Vercel; primer despliegue; probar el formulario real; merge a `main`.

## Dudas abiertas
- Nombre, textos, carta y fotos reales de la cafetería: ¿los aporta el autor o invento unos de ejemplo?

## Próxima acción
- Pedir confirmación para crear los proyectos de Supabase y Vercel y seguir.
