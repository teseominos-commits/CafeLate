# Café Late

Landing de una página para una cafetería de barrio: presentación, carta, horario y formulario de contacto. Encargo de práctica.

- **Web publicada:** https://cafelate-teseominos.vercel.app
- **Repositorio:** https://github.com/teseominos-commits/CafeLate
- **Stack:** React 18 + TypeScript + Vite · Supabase (base de datos) · Vercel (hosting)

## 1. Cómo arrancar

Requisitos: **Node 22** o superior y npm.

```bash
npm install          # instalar dependencias
cp .env.example .env.local   # y rellenar las dos variables (ver abajo)
npm run dev          # servidor local en http://localhost:5173
npm test             # pruebas automáticas (Vitest)
npm run typecheck    # comprobar tipos
npm run build        # compilar a dist/
```

Variables de entorno (ambas **públicas**, nunca poner claves de servicio):

| Variable | Qué es |
|---|---|
| `VITE_SUPABASE_URL` | Dirección del proyecto de Supabase `cafelate` |
| `VITE_SUPABASE_ANON_KEY` | Clave pública (`anon`) de ese proyecto |

Sin ellas la web se ve igual, pero el formulario muestra "El formulario aún no está configurado".

### Dónde está cada cosa

| Ruta | Contenido |
|---|---|
| `src/App.tsx` | La página completa: cabecera, quiénes somos, carta, horario y contacto |
| `src/data.ts` | **Carta y horario** (datos de ejemplo, se editan aquí) |
| `src/components/ContactForm.tsx` | Formulario: estados, errores y anti-spam |
| `src/lib/validation.ts` (+ `.test.ts`) | Reglas de validación del formulario y sus pruebas |
| `src/lib/sendContact.ts` | **Único punto de conexión con el servidor**: inserta el mensaje en Supabase |
| `src/styles.css` | Todos los estilos (móvil primero) |
| `supabase/migrations/` | Estructura de la base de datos y permisos (RLS) |
| `vercel.json` | Cabeceras de seguridad, incluida la política de contenido (CSP) |
| `.github/workflows/ci.yml` | Comprobación automática: instala, tipos, tests y build |
| `ESTADO.md`, `CHANGELOG.md` | Estado del proyecto y cambios por versión |

## 2. Qué es real y qué está simulado

**El formulario es real**, no simulado: guarda cada mensaje en la tabla `contact_messages` de Supabase.

- La web **solo puede insertar**: no puede leer, editar ni borrar mensajes (RLS activa y permisos recortados a `INSERT`). Los mensajes se leen en el panel de Supabase → proyecto `cafelate` → Table Editor.
- **No se envía ningún correo** ni de aviso al dueño ni de confirmación al visitante. Si se quiere, habría que conectarlo a partir de `src/lib/sendContact.ts` (o con un trigger/función en Supabase).
- **Anti-spam:** hay un campo oculto (`website`). Si se rellena, se asume que es un bot: la pantalla muestra "¡Gracias!" pero **no se guarda nada**.
- **Simulados / de ejemplo:** el nombre, la carta, los precios, la dirección ("Calle del Barrio, 12") y el horario. No hay fotos. No hay pagos ni cuentas de usuario.

## 3. Datos de ejemplo y cómo reiniciarlos

- La base de datos arranca **vacía** (`supabase/seed.sql` está vacío a propósito).
- La carta y el horario no están en la base de datos: viven en `src/data.ts`.
- No se usa `localStorage` ni cookies.
- Para reiniciar: borrar las filas de `contact_messages` desde el panel de Supabase. Para recrear la tabla desde cero, aplicar en orden los archivos de `supabase/migrations/`.

## 4. Decisiones que no estaban en el encargo

- **Sin Lovable**: el código está escrito a mano en React + Vite, y el repositorio es el entregable.
- **Los mensajes se guardan en Supabase** (en lugar de enviarse por correo), para que el formulario "envíe de verdad" sin servidor propio ni claves privadas.
- **Mensaje mínimo de 10 caracteres** y máximos de 80 (nombre), 120 (email) y 1000 (mensaje), validados en la web y en la base de datos.
- **Cabeceras de seguridad estrictas** tras pasar un SecurityCheck. Si se añaden fuentes, scripts o imágenes de otro dominio, **hay que ampliar la CSP en `vercel.json`** o el navegador los bloqueará.
- **SPF/DMARC** (correo del dominio): no aplica, porque la web está en un subdominio de `vercel.app` y no envía correo. Si se compra un dominio propio, configurarlos entonces.
- Idioma de la pantalla en español; código en inglés y comentarios en español.

## Despliegue

Vercel despliega solo desde GitHub: cada commit a `main` publica la web de producción y cada rama genera una URL de previsualización. Las reglas de trabajo del proyecto están en `CLAUDE.md`.
