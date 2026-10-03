import { Link } from 'react-router'
import './AboutSection.css'

const values = [
  {
    id: 1,
    icon: '🛠️',
    title: 'Aprender haciendo',
    text: 'Cada tema termina en un proyecto que puedes mostrar en tu portafolio.',
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Comunidad',
    text: 'Estudias junto a otros desarrolladores y resuelves dudas en grupo.',
  },
  {
    id: 3,
    icon: '🎯',
    title: 'Sin relleno',
    text: 'Vamos directo a lo que se usa en el trabajo real con React.',
  },
]

function AboutSection() {
  return (
    <section className="about">
      <h1 className="about__title">Sobre nosotros</h1>
      <p className="about__subtitle">
        ReactAcademy nació para que aprender React sea claro, práctico y sin
        vueltas. Somos un equipo de desarrolladores frontend que enseña lo que
        usa todos los días.
      </p>
      <div className="about__grid">
        {values.map((value) => (
          <article key={value.id} className="about__card">
            <span className="about__icon">{value.icon}</span>
            <h3 className="about__card-title">{value.title}</h3>
            <p className="about__card-text">{value.text}</p>
          </article>
        ))}
      </div>
      <Link to="/cursos" className="about__cta">
        Conoce los cursos
      </Link>
    </section>
  )
}

export default AboutSection
