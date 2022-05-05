import { Formik, Form } from "formik";
import * as Yup from "yup";
import {MyTextInput} from '../components'

import "../styles/styles.css";

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values)=>{
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required').max(15, 'Should be 15 characters or less').min(2, 'Should be at least 2 characters'),
          email: Yup.string().required('Required').email('Enter a valid email'),
          password1: Yup.string().required('Required').min(6, 'Should be at least 6 characters'),
          password2: Yup.string().required('Required').oneOf([Yup.ref('password1')], 'Passwords should match')
        })}
      >
        {
          ({handleReset})=>(
            <Form>
              <MyTextInput 
                label=""
                name="name"
                placeholder="Name:"
              />
              <MyTextInput 
                label=""
                name="email"
                type="email"
                placeholder="Email:"
              />
              <MyTextInput 
                label=""
                type="password"
                name="password1"
                placeholder="Password:"
              />
              <MyTextInput 
                label=""
                type="password"
                name="password2"
                placeholder="Repeat Password:"
              />
              <button type="submit">Create</button>
              <button type="button" onClick={handleReset}>Reset Form</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
