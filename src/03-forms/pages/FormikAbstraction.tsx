import "../styles/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {MyCheckbox, MySelect, MyTextInput} from '../components'

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
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
          terms: Yup.boolean().oneOf(
            [true],
            "You must accept the terms and conditions"
          ),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "This option is not allowed")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Tlacaelel"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Leon"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="correo@domain.com"
            />

            <MySelect label="Job Type" name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
