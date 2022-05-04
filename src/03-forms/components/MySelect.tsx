import { useField, ErrorMessage } from "formik"

interface Props {
  label: string;
  name: string;
  placehlder?: string;
  [x:string]: any
}

export const MySelect = ({label, ...props}: Props) => {
  const [ field ] = useField(props)
  
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {/* @ts-ignore */}
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
