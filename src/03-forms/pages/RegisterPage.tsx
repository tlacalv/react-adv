import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {onChange, formData, resetForm, isValidEmail, name, email, password1, password2} =useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  })
  

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData)
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={name}
          type="text"
          placeholder="Name"
          name="name"
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          onChange={onChange}
          value={email}
          type="email"
          placeholder="Email"
          name="email"
          className={`${!isValidEmail(email) && 'has-error'}`}

        />
        {!isValidEmail(email) && <span>Email no es valido</span>}

        <input
          onChange={onChange}
          value={password1}
          type="password"
          placeholder="Password"
          name="password1"
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe ser de mas de 6 caracteres</span>}

        <input
          onChange={onChange}
          value={password2}
          type="password"
          placeholder="Repeat Password"
          name="password2"
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  );
};
