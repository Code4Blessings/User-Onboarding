import React from 'react';
import { withFormik, Form, Field } from 'formik';
import './Forms.css';

const Forms = () => {
    return (
        <div className="form-container">
        <Form>
            <h1>User Onboarding</h1>
            <Field  type="text" name="name" placeholder="John Doe" />
            <Field  type="text" name="email" placeholder="name@email.com" />
            <Field  type="text" name="password" placeholder="password" />
        </Form>
        </div>
    )
}
const FormikForms = withFormik({
  mapPropsToValues({name, email, password }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
    }
  }
})(Forms);

export default FormikForms;