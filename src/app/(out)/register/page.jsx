"use client";
import Cep from "@/components/form_components/CEP";
import Address from "@/components/form_components/address";
import Email from "@/components/form_components/email";
import Password from "@/components/form_components/password";
// import ConfirmPassword from "@/components/form_components/password/confirm_password";
import PhoneNumber from "@/components/form_components/phone_number";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./register.module.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { push } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setEmail("");
    setCep("");
    setAddress("");
    setNumber("");
    setPassword("");
    setConfirmPassword("");
    getBack()
  };

  const getBack = () => {
    push("/login");
  };

  return (
      <main className={style.main}>

          <form>
            <div className={style.title}>
              <h2>Cadastre-se</h2>
            </div>
            <Email email={email} setEmail={setEmail}/>
            <Cep cep={cep} setCep={setCep}/>
            <Address address={address} setAddress={setAddress}/>
            <PhoneNumber number={number} setNumber={setNumber}/>
            <Password password={password} setPassword={setPassword}/>
            {/* <ConfirmPassword confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}/> */}
            <button onClick={handleSubmit}>Cadastrar</button>
          </form>
          
          <figure>
            <img src="/assets/image4.png" alt="background animal"/>
            <img src="/assets/image6.png" alt="background animal"/>
          </figure>
      </main>
  );
}

