import { useState } from 'react'
import './LoginForm.css'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const hasEmptyFields = email.trim() === '' || password.trim() === ''

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="login">
      <form className="login__card" onSubmit={handleSubmit}>
        <h1 className="login__title">Ingresar</h1>
        <p className="login__subtitle">Accede a tus cursos de ReactAcademy</p>

        <label className="login__field">
          <span className="login__label">Correo</span>
          <input
            type="email"
            className="login__input"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={submitted}
            autoComplete="email"
          />
        </label>

        <label className="login__field">
          <span className="login__label">Contraseña</span>
          <input
            type="password"
            className="login__input"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={submitted}
            autoComplete="current-password"
          />
        </label>

        <button
          type="submit"
          className="login__button"
          disabled={hasEmptyFields || submitted}
        >
          {submitted ? 'Enviado' : 'Ingresar'}
        </button>

        {submitted && (
          <p className="login__status" role="status">
            ¡Listo! Recibimos tus datos (de mentira).
          </p>
        )}

        <p className="login__microcopy">
          Esta pantalla es solo interfaz: no valida ni guarda nada, y no hay
          usuarios reales.
        </p>
      </form>
    </section>
  )
}

export default LoginForm
