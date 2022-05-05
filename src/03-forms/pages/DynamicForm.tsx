import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import *  as Yup from 'yup'
import formJson from "../data/custom-form.json";

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if(!input.validations) continue;
  let schema = Yup.string()

  for(const rule of input.validations){
    if(rule.type === 'required'){
      schema = schema.required('this field is required')
    }
    if(rule.type === 'minLength'){
      schema = schema.min((rule as any).value || 2, `Minimum of ${(rule as any).value || 2} characters`)
    }
    if(rule.type=== 'email'){
      schema = schema.email('Should be a valid email')
    }
  }

  requiredFields[input.name] = schema;

}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }
              if (type === "select")
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              throw new Error(`Type: ${type}, not supported `);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
