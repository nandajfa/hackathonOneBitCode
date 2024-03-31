import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './style.css'
import HeaderPrivate from '../HeaderPrivate'
import Footer from '../Footer'
import FailureNotification from '../../components/Notification/FailureNotification'
import SuccessNotification from '../../components/Notification/FailureNotification'
import axios from 'axios'

const ServiceForm = () => {
        const validationSchema = Yup.object().shape({
          name: Yup.string()
            .required('O nome é obrigatório.')
            .min(3, 'O nome deve ter no mínimo 3 caracteres.'),
          duration: Yup.string()
            .required('A duração é obrigatória.')
        })

        const handleSubmit = async (values, {setSubmitting}) => {
          try {
            const response = await axios.post(
              'http://localhost:3003/services/',
              values
            )
            if (response.status === 201) {
                SuccessNotification({
                  message: 'Adicionado com sucesso',
                  description: 'Seu serviço foi adicionado.'
                })
              }
            setSubmitting(false)
          } catch (error) {
            FailureNotification({
              message: 'Erro ao adicionar serviço',
              description: 'Tente novamente mais tarde.'
            })
            setSubmitting(false)
          }
         }
    
    return (
        <>
        <HeaderPrivate />
        <div className="container">
        <div className="form-box">
          <Formik
            initialValues={{ name: '', description: '', duration: 0, price: 0 }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="box">
                  <label htmlFor="name">Nome do Serviço</label>
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
                <div className="box">
                  <label htmlFor="descricao">Descrição</label>
                  <Field type="textarea"
              name="description"
              id="description"
              aria-describedby="description-error"
              aria-invalid={isSubmitting}
              aria-required="true"
              className="custom-textarea" />
                  <ErrorMessage
                    name="description"
                    component="span"
                    className="error"
                    id="description-error"
                  />
                </div>
                <div className="box">
                  <label htmlFor="duracao">Duração</label>
                  <Field type="number"
              name="duration"
              id="duration"
              aria-describedby="duration-error"
              aria-invalid={isSubmitting}
              aria-required="true"/>
                  <ErrorMessage
                    name="duration"
                    component="span"
                    className="error"
                    id="duration-error"
                  />
                </div>
                <div className="box">
                  <label htmlFor="preco">Preço</label>
                  <Field
  type="number"
  name="price"
  id="price"
  aria-describedby="price-error"
  aria-invalid={isSubmitting}
  aria-required="true"
  min={0}
  step={0.01}
/>
                  <ErrorMessage
                    name="price"
                    component="span"
                    className="error"
                    id="price-error"
                  />
                </div>
                <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}
       >Adicionar
</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
 <Footer />
        </>
    );
};

export default ServiceForm;
