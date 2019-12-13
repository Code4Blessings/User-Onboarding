import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Forms.css';

const Forms = ({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status])
    },[status])

    return (
        <div className="form-container">
        <Form>
            <h1>User Onboarding</h1>
            <label htmlFor="name">Name:
             <Field  type="text" name="name" placeholder="John Doe" />
             {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}
            </label>

            <label htmlFor="email">Email:
            <Field  type="text" name="email" placeholder="name@email.com" />
            {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}
            </label>
            
            <label htmlFor="password">Password:
            <Field  type="text" name="password" placeholder="password" />
            {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
            </label>

            <label className="checkbox-container" htmlFor="checkbox">Agree To Terms of Service?
            <Field type="checkbox" name="terms"/>
            <span className="checkmark" />
            </label>

            <button type="submit">Submit</button>
        </Form>
        {users.map(user => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.password}</li>
        </ul>
      ))}
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
  },
  validationSchema: Yup.object().shape({ 
        name: Yup.string().required(), 
        email: Yup.string().required(), 
        password: Yup.string().required()
}),
handleSubmit(values, { setStatus }) {
    axios
      // values is our object with all our data on it.
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(Forms);

export default FormikForms;