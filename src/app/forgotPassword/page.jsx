"use client";
import { useState } from "react";
import Style from "./styles.sass";
import NavBar from '@/app/nav_bar/page';
import { IoMdArrowBack } from 'react-icons/io';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('formulário enviado');
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const getBack = () => {
    window.location.href = '/login';
  }
  
  return (
  <>
    <NavBar />
    <div className={`${Style.container} container`}>
      <div className={`${Style.container_image} container-image`} onClick={ () => getBack() }>
        <IoMdArrowBack
          className={`${Style.container_image_icon} container-image-icon`}
        />
        Voltar
      </div>
      <div className={`${Style.container} container_content`}>
        <h1 className={`${Style.container_h1} container-h1`}>Esqueci minha senha</h1>
        <p>Para redefinir sua senha, informe  o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
        <form className={`${Style.container_form} container-form`}>
          <label htmlFor='email' className={`${Style.container_label} container-label`}>
            E-mail
          </label>
            <input
              type="email"
              className={`${Style.container_input} container-input container-input-email`}
              id="email"
              onChange= { (event) => handleChange(event) }
              name='email'
            />

          <button
            type="button"
            className={`${Style.container_button} container-button`}
            onClick={ (event) => handleSubmit(event)}
          >
            Próximo
          </button>
        </form>
      </div>
    </div>
  </>
  );
}