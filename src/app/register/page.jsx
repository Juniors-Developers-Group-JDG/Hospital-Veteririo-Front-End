"use client";
import { useState } from "react";
import Style from "./styles.sass";
import NavBar from "@/app/nav_bar/page";
import Email from "@/components/form_components/email/page";
import Cep from "@/components/form_components/CEP/page";
import Address from "@/components/form_components/address/page";
import PhoneNumber from "@/components/form_components/phone_number/page";
import Password from "@/components/form_components/password/page";
import ConfirmPassword from "@/components/form_components/password/confirm_password/page";
import Button from "@/components/form_components/button/page";

export default function Register() {
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    if (password === confirmPassword) {
      console.log("OK!");
    }

    event.preventDefault();
    console.log(email);
  };

  return (
    <>
      <NavBar />
      <h1 className={`${Style.register_h1} register-h1`}>Cadastre-se</h1>
      <div className={`${Style.container} container`}>
        <form className={`${Style.container_form} container-form`}>
          <Email email={email} setEmail={setEmail} />
          <Cep cep={cep} setCep={setCep} />
          <Address address={address} setAddress={setAddress} />
          <PhoneNumber number={number} setNumber={setNumber} />
          <Password password={password} setPassword={setPassword} />
          <ConfirmPassword
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
          <Button handleSubmit={handleSubmit} />
        </form>
      </div>
    </>
  );
}
