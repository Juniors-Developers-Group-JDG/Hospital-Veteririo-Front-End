"use client";
import Cep from "@/components/form_components/CEP/page";
import Address from "@/components/form_components/address/page";
import Button from "@/components/form_components/button/page";
import Email from "@/components/form_components/email/page";
import ConfirmPassword from "@/components/form_components/password/confirm_password/page";
import Password from "@/components/form_components/password/page";
import PhoneNumber from "@/components/form_components/phone_number/page";
import { useState } from "react";
import Style from "./styles.sass";
import { IoMdArrowBack } from "react-icons/io";

export default function Register() {
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setEmail("");
    setCep("");
    setAddress("");
    setNumber("");
    setPassword("");
    setConfirmPassword("");
  };

  const getBack = () => {
    window.location.href = "/login";
  };

  return (
    <>
      <div
        className={`${Style.container_register} container-register-image`}
        onClick={() => getBack()}
      >
        <IoMdArrowBack
          className={`${Style.container_register_image_icon} container-register-image-icon`}
        />
        Voltar
      </div>
      <h1 className={`${Style.register_h1} register-h1`}>Cadastre-se</h1>
      <div
        onSubmit={handleSubmit}
        className={`${Style.container_register} container-register`}
      >
        <form
          className={`${Style.container_register_form} container-register-form`}
        >
          <Email email={email} setEmail={setEmail} />
          <Cep cep={cep} setCep={setCep} />
          <Address address={address} setAddress={setAddress} />
          <PhoneNumber number={number} setNumber={setNumber} />
          <Password password={password} setPassword={setPassword} />
          <ConfirmPassword
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
          <Button />
        </form>
      </div>
    </>
  );
}
