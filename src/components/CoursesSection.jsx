import CourseCard from './CourseCard'
import courses from '../data/courses'
import './CoursesSection.css'

function CoursesSection() {
  return (
    <section className="courses">
      <h2 className="courses__title">Nuestros Cursos</h2>
      <p className="courses__subtitle">Elige el camino que mejor se adapte a ti</p>
      <div className="courses__grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            icon={course.icon}
            title={course.title}
            description={course.description}
            level={course.level}
          />
        ))}
      </div>
    </section>
  )
}

export default CoursesSection
