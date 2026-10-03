import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [students, setStudents] = useState(0)

  const decrement = () => setStudents((current) => Math.max(0, current - 1))
  const increment = () => setStudents((current) => current + 1)

  return (
    <section className="counter">
      <h2 className="counter__title">Cuántos estudiantes van a inscribirse?</h2>
      <p className="counter__subtitle">Usa los botones para ajustar el número</p>
      <div className="counter__box">
        <button type="button" className="counter__button" onClick={decrement} aria-label="Restar">
          −
        </button>
        <span className="counter__value">{students}</span>
        <button type="button" className="counter__button" onClick={increment} aria-label="Sumar">
          +
        </button>
      </div>
      <p className="counter__caption">estudiantes inscritos</p>
    </section>
  )
}

export default Counter
