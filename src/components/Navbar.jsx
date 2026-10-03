import { Link, NavLink } from 'react-router'
import './Navbar.css'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/cursos', label: 'Cursos' },
  { to: '/nosotros', label: 'Nosotros' },
]

const linkClass = ({ isActive }) =>
  isActive ? 'navbar__link navbar__link--active' : 'navbar__link'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        ReactAcademy
      </Link>
      <nav className="navbar__nav">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end className={linkClass}>
            {link.label}
          </NavLink>
        ))}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? 'navbar__login navbar__login--active' : 'navbar__login'
          }
        >
          Ingresar
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
