# CHANGELOG-PLANTILLA.md

Historial de versiones de la plantilla `CLAUDE.md`. Una entrada por versión, en lenguaje normal. Lo más reciente, arriba.

## v2.7 (2026-10-06)
Decisiones de arranque y funciones futuras: pensar la complejidad al empezar, no al final. **A validar con el proyecto real:** el catálogo sale del conocimiento general, no de datos propios.
- La ficha gana el campo "Decisiones de arranque": datos personales, idioma de la pantalla, uso en móvil, accesibilidad básica, cómo se identifica el usuario y funciones para más adelante.
- Nuevo paso 3 del arranque: según el tipo de app, Claude enseña una lista de funciones habituales y el autor marca cada una como ahora, más adelante o nunca. Con las de "más adelante" se diseña sin cerrar puertas. Los pasos siguientes pasan a 4, 5, 6 y 7.
- Nuevo módulo `modulos/funciones-futuras.md` con tres tipos de app (seguimiento personal, gestión para un negocio, comunidad o catálogo) y la decisión temprana que protege cada función. Solo se usa en el arranque y después se borra del proyecto.
- Sección 5: cada función nueva con lógica propia lleva su prueba automática desde que se escribe.
- El archivo principal pasa a unos 21 KB, por encima del umbral de 20 KB: el recorte de contenido queda en la agenda de la próxima revisión.

## v2.6 (2026-10-06)
Cómo llega la plantilla a un proyecto nuevo, también en la nube.
- Nueva regla en el arranque de proyecto: lo normal es crear el repo desde la plantilla de GitHub ("Use this template"); entonces Claude no copia nada y limpia lo que sobra (borra los módulos que no se usan, sustituye el `README.md`, borra `CHANGELOG-PLANTILLA.md` y mueve `ci/ci.yml` a `.github/workflows/`).
- Alternativa: si el autor empieza desde el laboratorio, Claude crea el repo y le copia la plantilla.
- Aviso: una sesión que se abre sobre un repo vacío no trae la plantilla (una sesión en la nube solo carga el `CLAUDE.md` del repo donde se abre).
- La ficha en blanco de la plantilla hace que la primera sesión arranque sola con las preguntas de la ficha.
- Sin comprobar todavía: un repo creado desde la plantilla y abierto en la nube. Se verá con el primer proyecto real.

## v2.5 (2026-10-06)
Compatibilidad de entornos: la plantilla funciona también en la nube. Basada en dos pruebas de humo reales en una sesión en la nube.
- Nueva sección 14, "Entornos": tabla de qué se hace en un equipo local con `gh` y en la nube (crear y fusionar PR, leer la CI, etiquetas, borrar ramas, clonar otros repos y Node), y reglas de alternativa.
- En la nube `gh` no sirve (token inválido): PR y fusión con el conector, que funcionó sin confirmación del autor; leer la CI con `get_check_runs` (no `get_status`); etiquetas y borrado de ramas no se pueden y quedan pendientes para un equipo local.
- La CI se lee con `pull_request_read` en cualquier entorno. `run` sabe ya que en la nube hay Node 22.
- Regla suavizada: en la nube no se usa `gh`, salvo que el autor configure un token válido; no se pide un token por defecto.
- Guía de arranque de un equipo local nuevo (`gh` y Node con `winget`).
- Sin comprobar todavía en la nube: fusionar sobre `main`, crear proyectos de Supabase o Vercel y subir archivos de workflow.

## v2.4 (2026-10-06)
Comprobación automática y Node en local.
- Nuevo archivo `ci/ci.yml`: comprobación automática genérica para proyectos Node. En cada cambio instala, comprueba tipos, ejecuta los tests si existen y compila. Probada el 2026-10-06 en un repo real: pasa en unos 23 segundos.
- Claude copia ese archivo a `.github/workflows/ci.yml` si el proyecto tiene `package.json` y lee el resultado con `gh run`. Necesita que `gh` tenga el permiso `workflow`.
- La tarea terminada incluye que la comprobación de GitHub pase. `run` pasa a compilar y probar en local si hay Node, y a usar Vercel y la comprobación de GitHub si no lo hay.
- Nota: GitHub cambiará el sistema `ubuntu-latest` a Ubuntu 26 a partir del 19 de octubre de 2026; si la comprobación fallara después, fijar `ubuntu-24.04`.

## v2.3 (2026-10-06)
Plantilla viva: cada proyecto real devuelve datos al laboratorio de la plantilla.
- Nuevo archivo `APRENDIZAJES-PLANTILLA.md`, que se copia a cada proyecto. Claude anota sin pedir permiso métricas por versión o hito (mensajes del autor aproximados, paradas de aprobación, errores o retrabajos y ritmo) y lo que la plantilla estorbó, evitó o no cubrió.
- El laboratorio lee ese archivo directamente desde GitHub para revisar la plantilla con datos reales.
- Regla de las dos veces: una regla nueva solo entra si el mismo problema ocurre en dos proyectos distintos.
- El arranque de proyecto y la revisión de entrada de Lovable crean el archivo.

## v2.2 (2026-10-06)
Reorganización en módulos. No cambia ninguna regla: solo se mueve texto, para que el archivo principal siga siendo corto y un proyecto cargue solo lo que usa.
- Nueva carpeta `modulos/` con dos módulos: `lovable.md` (la antigua sección 11, unos 5 KB) y `cierre-de-proyecto.md` (el procedimiento de cierre de la sección 9).
- La sección 11 pasa a ser "Módulos" y explica cómo se usan. La ficha gana el campo "Módulos activos".
- Al abrir una sesión, Claude lee `ESTADO.md` y los módulos activos de la ficha. Si falta un módulo que la ficha activa, se para y lo dice al autor.
- A un proyecto solo se le copian los módulos que va a usar. El archivo principal baja de unos 21 KB a unos 16 KB.
- Idea futura anotada: un módulo equivalente para otra herramienta de prototipado (por ejemplo Bolt), a investigar y probar antes de escribirlo.

## v2.1 (2026-10-06)
Ajustes tras dos proyectos de prueba reales (una lista de tareas sin Lovable y una app de hábitos con Lovable). Cada cambio fue aprobado por el autor, uno a uno.

**Lovable (sección 11)**
- Se comprueba el backend del proyecto tras el primer prompt (`config.toml`, `.env`, `types.ts`) y, si aparece Lovable Cloud, se ofrecen dos opciones.
- Antes de planificar se pregunta el plan y los créditos, y los prompts se diseñan a ese presupuesto. Si los créditos se agotan, traspaso anticipado a Claude.
- Se acepta el stack que genere Lovable (hoy TanStack Start) y se usa el preset `tanstack-start-lovable` en Vercel.
- Lovable solo sincroniza `main`: Claude trabaja en `desarrollo` y fusiona. Se confirma siempre el espacio de Lovable. El modelo de Lovable no se puede cambiar a Claude.
- Revisión de entrada: se quita `.env` del repo y se endurecen las políticas RLS generadas.

**Vercel y despliegue (secciones 5 y 7)**
- Claude crea y enlaza el proyecto de Vercel con permiso del autor (antes solo leía), fija el framework correcto, lo crea sin desplegar si no hay aplicación y desactiva la protección de las URLs de prueba en desarrollo y beta.
- Se avisa de que el primer despliegue figura como producción y se comprueba tras el primero desde `main`.
- Sin Node en local, `run` se sustituye por el build de Vercel y la prueba del autor en el móvil.

**Publicar y versiones (secciones 7, 8 y 9)**
- Las PR son solo el mecanismo de fusión. En desarrollo, Claude las crea y fusiona con `gh`, sin Submit del autor.
- Etiquetas creadas con `gh` apuntando al commit de la publicación. Commits de documentación directos a `main` en desarrollo.
- Migraciones compatibles hacia atrás y comprobación de RLS antes de publicar.
- Crear recursos gratuitos (Supabase, Vercel) se avisa, se comprueba coste 0 y se confirma.

**Comunicación (secciones 2, 3 y 4)**
- La ficha se propone con respuestas por defecto. Preguntas críticas de una en una y decisiones múltiples en tabla numerada. Se nombra el proyecto exacto al pedir un ajuste en un panel. Los riesgos se presentan como "a vigilar". El primer registro de prueba comprueba "Confirm email".

**Seguridad (sección 10)**
- Las claves públicas las pone Claude con permiso, las privadas siempre el autor. `.env` nunca se sube. El aviso de contraseñas filtradas se explica una sola vez.

**Mantenimiento (secciones 1, 6 y 9)**
- Archivos grandes se editan con `git` en una carpeta temporal en vez de reescribirlos. El estado del proyecto vive solo en `ESTADO.md`. `seed.sql` se crea siempre.
- Cierre de proyecto: exportar datos es una oferta con aviso, `ESTADO.md` lleva "Cómo retomar", se conservan repo, Vercel y Lovable, y solo se borra Supabase, lo borra el autor.

Aclaración de redacción no votada: el conector de Lovable solo se usa en lectura, para comprobar el estado cuando el autor lo pide.

## v2.0 (2026-10-05)
Rediseño completo del flujo para reducir paradas sin perder control.
- Tres fases (desarrollo, beta, producción) y dos ritmos (paso a paso, autónomo), que se cambian por chat.
- Permisos por nivel de riesgo: el plan se aprueba una vez al inicio de cada tarea. Merge a `main` según fase.
- `ESTADO.md` se actualiza solo y tiene siete secciones, con próxima acción y dudas abiertas.
- Migraciones y `seed.sql` siempre en el repo. Ciclo de vida del proyecto (activo, pausado, cerrado).
- Versiones de proyecto con la fase incluida (`0.N.0`, `1.0.0-beta.N`, `1.0.0`) y `CHANGELOG.md` por proyecto.
- Sección de seguridad y secretos. Revisión de seguridad antes de publicar en beta y producción.
- Comunicación sin jerga, con explicación breve de cada término técnico.
- Flujo con Lovable: Supabase propio, prompts escritos por Claude y revisión de entrada al traspasar.
- Qué hacer si falla un conector (GitHub, Supabase o Vercel).
- Cabecera de versión y campo "Plantilla usada" en la ficha del proyecto.

## v1.0 (anterior a 2026-10-05)
Plantilla original. Archivada en la rama `plantilla-v1.0`.
- Trabajo en microetapas con aprobación por cada acción.
- Sin fases, sin ritmo y sin sección de seguridad.
- `ESTADO.md` solo se actualizaba con aprobación del autor.
