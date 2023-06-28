"use client";
import AlteredPassword from "@/components/form_components/changePassword/page";
import style from "./changePassword.module.scss";
import Image from 'next/image';
import { useState } from "react";


export default function ChangePassword() {

  

   const [newPassword, setNewPassword] = useState('')
   const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    if(newPassword == confirmNewPassword){
      window.location.href = '/login';
    }
    
    }
  

  return (
    <main className={style.main}>
      <div className={style.box_login}>
      <div className={style.title}>
        <h2>Trocar senha</h2>
      </div>

      <form className={style.form}>
          <AlteredPassword newPassword={newPassword} setNewPassword={setNewPassword} confirmNewPassword={confirmNewPassword} setConfirmNewPassword={setConfirmNewPassword}/>

          <button
            type='button'
            onClick={handleSubmit}
            >Alterar senha
          </button>
      </form>

      </div>

      <figure>
        <Image
          src="/assets/image4.png"
          alt="background animal"
          width={500}
          height={500}
        />
        <Image
          src="/assets/image6.png"
          alt="background animal"
          width={500}
          height={500}
        />
      </figure>
    </main>
  );
}