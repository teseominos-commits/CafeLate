# plantilla-proyecto

Plantilla maestra del copiloto Senior Full Stack + Project Manager para trabajar con Claude.

**Versión actual: v2.7** (2026-10-06). Ver `CHANGELOG-PLANTILLA.md` para el historial.

## Qué contiene
- `CLAUDE.md`: las reglas de trabajo (fases, ritmo, permisos, memoria, seguridad, Lovable, fallo de conectores y skills). Incluye la ficha del proyecto.
- `ESTADO.md`: plantilla vacía de la memoria del proyecto, con siete secciones y el estado del proyecto.
- `CHANGELOG-PLANTILLA.md`: qué cambió en cada versión de la plantilla.
- `modulos/`: reglas opcionales que se copian a un proyecto solo si las usa (`lovable.md`, `cierre-de-proyecto.md` y `funciones-futuras.md`).
- `APRENDIZAJES-PLANTILLA.md`: plantilla del registro que cada proyecto lleva para devolver datos al laboratorio de la plantilla.
- `ci/ci.yml`: comprobación automática genérica de GitHub para proyectos Node, que se copia a `.github/workflows/ci.yml`.

## Cómo se usa
1. Lo normal: crear el repo del proyecto con el botón **Use this template** de GitHub (este repo está marcado como plantilla). Si no, se clona este repo y se copian `CLAUDE.md` y `ESTADO.md` al repo del proyecto, sin reescribirlos, más los módulos que vaya a usar.
2. Claude propone una respuesta para cada campo de la ficha y el autor las aprueba o cambia. El campo `Plantilla usada` indica la versión copiada.
3. Cuando salga una versión nueva, los proyectos con una versión anterior se pueden actualizar.

## Versiones
- Sube el primer número si cambia cómo se comporta Claude (v2.7 a v3.0) y el segundo si es una aclaración o una regla añadida (v2.7 a v2.8).
- Cada versión tiene su etiqueta en GitHub. La plantilla original (v1.0) está archivada en la rama `plantilla-v1.0`.
