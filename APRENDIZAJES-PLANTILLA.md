# APRENDIZAJES-PLANTILLA.md

Registro de lo que la plantilla ha aportado o estorbado en este proyecto. Lo rellena Claude sin pedir permiso, a medida que ocurre, y lo lee el laboratorio de la plantilla desde GitHub para mejorarla. Plantilla usada: v2.7.

## Métricas por versión o hito
Los mensajes del autor son aproximados.

| Versión o hito | Fecha | Mensajes del autor | Paradas de aprobación | Errores o retrabajos | Ritmo |
|---|---|---|---|---|---|
| 0.1.0 | 2026-10-16 | ~9 | 3 (ficha, plan, recursos) | 1 (`pkill` cortó mi propia orden) | autónomo desde el mensaje 5 |

## Una regla estorbó
Qué regla, qué pasó y cuánto retrasó.
-

## Faltó una regla
Qué ocurrió y qué regla lo habría evitado.
- El arranque asume ritmo paso a paso; el autor cambió a autónomo a mitad de la ficha y no estaba claro si saltar los pasos 4 y 5. Una línea que lo aclarara habría ayudado.
- La cuenta de Supabase ya tenía otro proyecto de otro trabajo: faltaba una regla de "no tocar proyectos ajenos".

## Una regla evitó un problema
Qué regla y qué habría pasado sin ella.
- Confirmar antes de crear recursos y recortar permisos de la tabla: `anon` traía permisos amplios por defecto que la RLS tapaba.

## Reglas que no se aplicaron o se aplicaron mal
-

## Dudas para el laboratorio
-
