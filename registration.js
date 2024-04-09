// registration.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import './main.css'; // Импорт CSS файла

const validate = values => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Обязательное поле';
  }
  if (!values.password) {
    errors.password = 'Обязательное поле';
  }
  return errors;
};

const Registration = () => { // Объявление компонента Registration
  const handleSubmit = React.useCallback((values, actions) => {
    if (values.login === 'admin' && values.password === 'admin') {
      alert('Регистрация прошла успешно');
    } else {
      alert('Неверный логин или пароль');
    }
    actions.setSubmitting(false);
  }, []);

  return (
    <div className="container">
      <h2>Регистрация</h2>
      <Formik
        initialValues={{ login: '', password: '' }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="registration-form">
            <div className="form-group">
              <label htmlFor="login">Логин:</label>
              <Field type="text" id="login" name="login" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль:</label>
              <Field type="password" id="password" name="password" required />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Зарегистрироваться'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration; // Экспорт компонента Registration
