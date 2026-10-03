import Badge from './Badge'
import './CourseCard.css'

function CourseCard({ icon, title, description, level }) {
  return (
    <article className="course-card">
      <span className="course-card__icon">{icon}</span>
      <h3 className="course-card__title">{title}</h3>
      <p className="course-card__description">{description}</p>
      <Badge text={level} />
    </article>
  )
}

export default CourseCard
