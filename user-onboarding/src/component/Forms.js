import React from 'react';
import { withFormik, Form, Field } from 'formik';
import './Forms.css';

const Forms = () => {
    return (
        <div className="form-container">
        <Form>
            <h1>User Onboarding</h1>
            <label htmlFor="name">Name:
             <Field  type="text" name="name" placeholder="John Doe" />
            </label>

            <label htmlFor="email">Email:
            <Field  type="text" name="email" placeholder="name@email.com" />
            </label>
            
            <label htmlFor="password">Password:
            <Field  type="text" name="password" placeholder="password" />
            </label>

            <label className="checkbox-container" htmlFor="checkbox">Terms of Service?
            <Field type="checkbox" name="terms"/>
            <span className="checkmark" />
            </label>

            <button type="submit">Submit</button>
        </Form>
        </div>
    )
}
const FormikForms = withFormik({
  mapPropsToValues({name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || "",
    }
  }
})(Forms);

export default FormikForms;