import "../styles/styles.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormikComponents = () => {
  
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Should be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Should be 10 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Should be a valid email")
            .required("Required"),
          terms: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'This option is not allowed')
            .required('Requerido')
        })}
      >
        {
          (formik) => (
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" />
              {/* @ts-ignore */}
              <ErrorMessage name="firstName" component="span" />


              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              {/* @ts-ignore */}
              <ErrorMessage name="lastName" component="span"/>

              <label htmlFor="email">Email Address</label>
              <Field name="email" type="text" />
              {/* @ts-ignore */}
              <ErrorMessage name="email" component="span" />

              <label htmlFor="jobType">Job type</label>
              <Field name="jobType" as="select" >
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </Field>
              {/* @ts-ignore */}
              <ErrorMessage name="jobType" component="span" />

              <label>
                <Field name="terms" type="checkbox" />
                Terms and conditions
              </label>
              {/* @ts-ignore */}
              <ErrorMessage name="terms" component="span" />

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>

      
    </div>
  );
};
