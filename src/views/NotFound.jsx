import { Link, useLocation } from 'react-router'
import './NotFound.css'

function NotFound() {
  const { pathname } = useLocation()

  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Esta página no existe</h1>
      <p className="not-found__text">
        No encontramos nada en <code>{pathname}</code>. Puede que el enlace esté
        mal escrito o que la página se haya movido.
      </p>
      <Link to="/" className="not-found__button">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound
