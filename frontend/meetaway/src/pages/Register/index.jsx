import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import FailureNotification from '../../components/Notification/FailureNotification'
import SuccessNotification from '../../components/Notification/FailureNotification'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import './style.css'

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('O nome é obrigatório.')
      .min(3, 'O nome deve ter no mínimo 3 caracteres.'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('O e-mail é obrigatório.'),
    password: Yup.string()
      .required('A senha é obrigatória.')
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        'A senha deve ter no mínimo 6 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial.'
      )
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        'http://localhost:3003/auth/register',
        values
      )

      SuccessNotification({
        message: 'Registrado com sucesso',
        description: 'Você será redirecionado para a página de login.'
      })
      setTimeout(() => {
        if (response.status === 201) {
          window.location.href = '/login'
        }
      }, 3000)
      setSubmitting(false)
    } catch (error) {
      FailureNotification({
        message: 'Erro ao registrar',
        description: error.response.data.error
      })
      setSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="login-box">
          <h2>Registrar</h2>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="user-box">
                  <label htmlFor="name">Nome</label>
                  <Field type="text"
              name="name"
              id="name"
              aria-describedby="name-error"
              aria-invalid={isSubmitting}
              aria-required="true" />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="error"
                    id="name-error"
                  />
                </div>
                <div className="user-box">
                  <label htmlFor="email">Email</label>
                  <Field type="email"
              name="email"
              id="email"
              aria-describedby="email-error"
              aria-invalid={isSubmitting}
              aria-required="true" />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                    id="email-error"
                  />
                </div>
                <div className="user-box">
                  <label htmlFor="password">Senha</label>
                  <Field type="password"
              name="password"
              id="password"
              aria-describedby="password-error"
              aria-invalid={isSubmitting}
              aria-required="true" />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="errorPass"
                    id="password-error"
                  />
                </div>
                <button type="submit" disabled={isSubmitting} 
                aria-busy={isSubmitting}
            aria-label={isSubmitting ? 'Enviando...' : 'Enviar'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register
