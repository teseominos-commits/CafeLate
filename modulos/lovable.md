# Módulo: Lovable

> Parte de la plantilla v2.3. Se activa cuando la ficha dice "Módulos activos: lovable". Las referencias a secciones (7, 10 y demás) son las del `CLAUDE.md` principal.

- Lovable sirve para prototipar. Yo continúo los proyectos que necesitan más complejidad o van a producción. Los dos trabajamos sobre el mismo repo de GitHub, que crea Lovable al conectarlo. Lovable no puede adoptar un repo que ya existe.
- Lovable genera hoy proyectos con TanStack Start (con parte de servidor). Acepto el stack que genere, sin pedirle otro. En Vercel se usa el preset `tanstack-start-lovable`.
- El modelo con el que Lovable escribe el código no se puede cambiar a Claude. El traspaso a Claude es el camino para que Claude escriba el código.
- **Supabase propio por defecto.** Los proyectos que empiezan en Lovable usan un proyecto de Supabase de la cuenta del autor, no el backend integrado de Lovable (Lovable Cloud), porque no se puede migrar fácilmente de uno a otro. Antes de crearlo aviso al autor de que ocupa uno de los 2 huecos del plan gratuito.
- No uso el conector de Lovable para construir ni para gastar créditos: el autor pega en Lovable los prompts que yo escribo. Solo lo uso en lectura, para comprobar el estado del proyecto cuando el autor lo pide.
- **Antes de abrir Lovable (paso a paso):**
  1. Pregunto el plan y los créditos disponibles y diseño los prompts a ese presupuesto. Confirmo en qué espacio de Lovable se crea el proyecto y no toco los demás.
  2. Creo el proyecto de Supabase y dejo las tablas preparadas, con RLS.
  3. Escribo para el autor el primer mensaje para Lovable, con estas reglas incluidas:
     - cada tabla nueva lleva políticas RLS desde que se crea;
     - los cambios de la base de datos se guardan como archivos de migración en el repo;
     - nunca hay claves ni contraseñas en el código, se usan variables de entorno;
     - la clave de servicio de Supabase nunca va en el código del navegador;
     - cada cambio se explica en lenguaje simple.
  4. Le explico paso a paso cómo conectar **su** Supabase al crear el proyecto (no el integrado) y GitHub.
- **Quién edita ahora** manda. Lovable y yo nunca editamos a la vez. El autor lo cambia por chat ("te paso el proyecto", "sigo yo en Lovable") y yo actualizo la ficha y se lo confirmo.
- **Prototipado guiado.** Mientras `Quién edita ahora` sea Lovable, yo no edito: preparo los prompts. Propongo al autor una lista ordenada de funciones y, tras su visto bueno, le escribo un prompt por función, claro y listo para pegar en Lovable.
  - Cada prompt incluye: qué debe hacer, cómo comprobamos que funciona y, si toca la base de datos, las reglas de RLS y migraciones. Termina con la petición "Resume en lenguaje simple qué has cambiado".
  - Un prompt por función, para no gastar créditos de Lovable en cambios grandes que salgan mal.
  - Tras el primer prompt compruebo a qué backend está conectado el proyecto, leyendo `supabase/config.toml`, `.env` y `src/integrations/supabase/types.ts`, antes de seguir. Si aparece Lovable Cloud en vez del Supabase propio, aviso al autor y propongo dos opciones: crear un proyecto nuevo eligiendo el Supabase al crearlo (gasta créditos) o traspasar a Claude (no gasta).
  - Tras cada prompt, el autor me envía una captura de pantalla del resultado. Solo añade texto si ve algo que no le cuadra, para que yo le indique una solución. Sin texto, doy la función por probada, la verifico igualmente leyendo el repo y, si en la captura veo algún problema que él no ha notado, se lo señalo.
  - Una vez conectado GitHub, leo el repo para verificar lo que hizo Lovable (migraciones, RLS, claves expuestas) sin editar nada.
  - Registro en `ESTADO.md` cada iteración: función, estado (pendiente, probada, corregida o aprobada) y notas.
  - Si los créditos se agotan, traspaso el proyecto a Claude antes de lo previsto, sin reintentar la conexión.
  - El prototipo termina cuando el autor dice **"prototipo aprobado"**. Entonces empieza el traspaso y la revisión de entrada.
- **Revisión de entrada** al recibir el proyecto de Lovable. Es completa porque va a producción, aunque será más corta si llega con las reglas aplicadas. La hago en paso a paso y con el visto bueno del autor en cada punto:
  1. **Inventario:** le cuento en lenguaje normal qué hay, qué funciona y qué no.
  2. **Base de datos:** compruebo que usa el Supabase propio, que las migraciones están en el repo y que cada tabla tiene RLS. Reviso y endurezco las políticas que haya generado Lovable: las tablas relacionadas deben comprobar que el dato pertenece al usuario.
  3. **Seguridad:** busco claves expuestas y reviso los avisos de Supabase.
  4. **Documentación:** creo `ESTADO.md`, `CHANGELOG.md`, `APRENDIZAJES-PLANTILLA.md` y `.env.example`, quito `.env` del repo aunque solo tenga valores públicos y reviso el `.gitignore`.
  5. **Despliegue:** creo el proyecto de Vercel con el preset `tanstack-start-lovable` (sección 7).
  6. **Rama:** Lovable solo sincroniza `main`: trabajo en `desarrollo` y fusiono con `main`.
  7. **Acuerdo:** fijo con el autor la versión de partida, la fase (normalmente desarrollo) y el ritmo (paso a paso).
- **El traspaso es en un solo sentido por defecto.** Si el autor quiere devolver el proyecto a Lovable, le advierto antes de los riesgos (Lovable puede no reconocer el código que he añadido) y decide él. Si lo devuelve, dejo todo publicado en `main`, actualizo `ESTADO.md` y le aviso de que ya puede editar allí.
