"use client";
import { useState } from "react";
import Style from "./styles.sass";
import Email from "@/components/form_components/email/page";
import Cep from "@/components/form_components/CEP/page";
import Address from "@/components/form_components/address/page";
import PhoneNumber from "@/components/form_components/phone_number/page";
import Password from "@/components/form_components/password/page";
import ConfirmPassword from "@/components/form_components/password/confirm_password/page";
import Button from "@/components/form_components/button/page";
import NavBar from "@/components/nav_bar/page";
import Image from "next/image";
import Bg_dog_paw from "../../assets/dog_paw_image.png";

export default function Register() {
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      console.log("OK!");
    }

    setEmail("");
    setCep("");
    setAddress("");
    setNumber("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <NavBar />
      <h1 className={`${Style.register_h1} register-h1`}>Cadastre-se</h1>
      <div onSubmit={handleSubmit} className={`${Style.container} container`}>
        <Image
          src={Bg_dog_paw}
          alt="Imagem de uma pata de cachorro"
          className={`${Style.dog_paw} dog_paw`}
        />
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
          <Button />
        </form>
      </div>
    </>
  );
}
