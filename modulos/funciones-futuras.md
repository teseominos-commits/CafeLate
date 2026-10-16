# Módulo: funciones futuras

> Parte de la plantilla v2.7. Se usa solo en el arranque de un proyecto (paso 3 del arranque, sección 2) y después se borra del proyecto. **A validar con el proyecto real:** el catálogo sale del conocimiento general de Claude, no de datos de proyectos propios. Las referencias a secciones son las del `CLAUDE.md` principal.

## Cómo se usa
1. Pregunto qué tipo de app es y elijo la tabla que mejor encaje.
2. Enseño las funciones de esa tabla (máximo 8) con la decisión que protege cada una, explicada en lenguaje normal.
3. El autor marca cada una como **ahora**, **más adelante**, **nunca** o **no lo sé**. "No lo sé" no obliga a nada.
4. Con las de "más adelante" diseño la estructura y la base de datos sin cerrar puertas, y las anoto en `ESTADO.md` con su decisión protegida.
5. Si ningún tipo encaja, no fuerzo una lista: pregunto "¿qué funciones difíciles imaginas para más adelante?".
6. Al terminar el arranque anoto en `APRENDIZAJES-PLANTILLA.md` qué tabla usé y qué marcó el autor, para medir después si las funciones de "más adelante" se añadieron sin rehacer nada.

## Seguimiento personal (hábitos, tareas, diarios)
| Función | Decisión temprana que protege |
|---|---|
| Varios dispositivos con la misma cuenta | Cuentas de usuario desde el primer día, no datos solo en el navegador |
| Exportar e importar datos | Formato de datos estable y fechas guardadas con zona horaria |
| Recordatorios y avisos | Dónde se guarda la hora y la zona del usuario |
| Compartir con otra persona | Cada registro pertenece a un usuario y puede compartirse con permisos |
| Estadísticas y gráficos | Guardar cada evento y no solo el total |
| Copiar o borrar mis datos | Saber qué datos personales hay y dónde están |
| Varios idiomas | Todos los textos en un solo sitio, no repartidos por la pantalla |
| Uso sin conexión | Qué datos se guardan en el móvil y cómo se sincronizan |

## Gestión para un negocio (reservas, pedidos, clientes)
| Función | Decisión temprana que protege |
|---|---|
| Varios usuarios con roles | Tabla de roles y permisos desde el principio, con RLS por rol |
| Pagos | Qué se cobra y a quién, y que los datos de tarjeta nunca pasen por la app |
| Facturas y documentos | Numeración y datos fiscales fijados en el momento de emitir |
| Avisos por correo o mensaje | Qué eventos generan un aviso y dónde se guarda el contacto |
| Informes y estadísticas | Guardar eventos con fecha y no solo el estado actual |
| Historial de cambios | Registro de quién cambió qué y cuándo |
| Importar clientes o productos | Identificadores únicos y campos obligatorios definidos |
| Varias sedes o equipos | Un campo de "a quién pertenece" en cada registro |

## Comunidad o catálogo (contenido que ven otros)
| Función | Decisión temprana que protege |
|---|---|
| Registro público | Qué ve cada persona y qué datos personales se piden |
| Moderación y denuncias | Estado de cada contenido (publicado, oculto, borrado) |
| Buscador | Cómo se guardan los textos y las etiquetas |
| Imágenes y ficheros | Dónde se guardan, tamaño máximo y quién puede verlos |
| Comentarios y valoraciones | Relación entre contenido, autor y respuestas |
| Perfiles públicos | Qué datos son públicos y cuáles privados, por campo |
| Avisos y seguidores | Qué eventos generan aviso y a quién |
| Varios idiomas | Todos los textos en un solo sitio |

## Nota
Estas listas son un punto de partida. Un tipo nuevo o una función que se repita en dos proyectos entra en el catálogo con la regla de las dos veces.
