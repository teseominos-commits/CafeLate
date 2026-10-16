import { ContactForm } from './components/ContactForm'
import { HOURS, MENU } from './data'

export function App() {
  return (
    <>
      <a className="skip" href="#contacto">Ir al contacto</a>
      <header className="hero">
        <nav aria-label="Principal">
          <span className="logo">Café Late</span>
          <a href="#carta">Carta</a>
          <a href="#visitanos">Visítanos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="hero-text">
          <h1>Tu cafetería de barrio</h1>
          <p>Café de especialidad, desayunos y tartas caseras. Sin prisas.</p>
          <a className="button" href="#carta">Ver la carta</a>
        </div>
      </header>

      <main>
        <section aria-labelledby="nosotros" className="section">
          <h2 id="nosotros">Quiénes somos</h2>
          <p>
            Café Late nació para que el barrio tuviera un sitio donde parar un rato. Tostamos nuestro café,
            horneamos cada mañana y atendemos como en casa.
          </p>
        </section>

        <section id="carta" aria-labelledby="carta-h" className="section alt">
          <h2 id="carta-h">Nuestra carta</h2>
          <div className="menu">
            {MENU.map((cat) => (
              <div key={cat.title} className="menu-cat">
                <h3>{cat.title}</h3>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <div>
                        <strong>{item.name}</strong>
                        <span className="desc">{item.description}</span>
                      </div>
                      <span className="price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="visitanos" aria-labelledby="visita-h" className="section">
          <h2 id="visita-h">Visítanos</h2>
          <p>Calle del Barrio, 12 · Dirección de ejemplo</p>
          <dl className="hours">
            {HOURS.map((h) => (
              <div key={h.days}>
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contacto" aria-labelledby="contacto-h" className="section alt">
          <h2 id="contacto-h">Escríbenos</h2>
          <p>¿Una reserva, una duda o un encargo? Cuéntanoslo.</p>
          <ContactForm />
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Café Late · Hecho con cariño en el barrio</footer>
    </>
  )
}
