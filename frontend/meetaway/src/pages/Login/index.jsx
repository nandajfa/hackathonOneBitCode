import React, { useState } from 'react'
import { login, isAuthenticated } from '../../services/auth'
import { Navigate } from 'react-router-dom'
import FailureNotification from '../../components/Notification/FailureNotification'
import SuccessNotification from '../../components/Notification/FailureNotification'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const Login = () => {
  const [redirectHome, setRedirectHome] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório')
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        'http://localhost:3003/auth/login',
        values
      )
      if (response.data.token) {
        login(response.data.token)
      }
      if (isAuthenticated()) {
        SuccessNotification({
          message: 'Logado com sucesso',
          description: ''
        })
        setRedirectHome(true)
      } else {
        FailureNotification({
          message: 'Usuário não está autenticado',
          description: 'Tente novamente mais tarde.'
        })
      }
      setSubmitting(false)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        FailureNotification({
          message: 'Erro ao fazer login',
          description: 'Credenciais inválidas.'
        })
      } else {
        FailureNotification({
          message: 'Erro ao fazer login',
          description: 'Usuário não encontrado.'
        })
      }
    }
  }

  return redirectHome ? (
    <Navigate to="/menu" replace />
  ) : (
    <>
      <div className="container">
        <div className="text-container">
          <h1 className="text-login">
            Welcome back <br /> to <strong>Meetaway</strong>
          </h1>
          <a href="/" className="icon-container">
            <FontAwesomeIcon icon={faHouse} className="social-icon" />
          </a>
        </div>
        <div className="login-box">
          <div className="form">
            <h2 className="login-title">Login</h2>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="user-box">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      aria-describedby="email-error"
                      aria-invalid={isSubmitting}
                      aria-required="true"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                      id="email-error"
                    />
                  </div>
                  <div className="user-box">
                    <label htmlFor="password">Senha</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      aria-describedby="password-error"
                      aria-invalid={isSubmitting}
                      aria-required="true"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                      id="password-error"
                    />
                  </div>
                  <button
                    className="btn-sign"
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    aria-label={isSubmitting ? 'Logging In...' : 'Login'}
                  >
                    {isSubmitting ? 'Logging In...' : 'Login'}
                  </button>
                </Form>
              )}
            </Formik>
            <p className="p-login">
              Don't have an account?{' '}
              <a className="link-signup" href="/sign-up">
                Sign Up
              </a>
            </p>
            <a href="/" className="icon-container">
              <FontAwesomeIcon icon={faHouse} className="social-icon-form" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
