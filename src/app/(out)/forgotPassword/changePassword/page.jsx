"use client";
import Password from "@/components/form_components/password";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./changePassword.module.scss";

export default function ChangePassword() {
   const [newPassword, setNewPassword] = useState('')
   const [confirmNewPassword, setConfirmNewPassword] = useState('')

   const { push } = useRouter();

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value)
  }

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(newPassword == confirmNewPassword){
      push('/login');
    }
    
  }
  
  return (
    <main className={style.main}>
      <div className={style.box_login}>
      <div className={style.title}>
        <h2>Trocar senha</h2>
      </div>

      <form className={style.form}>
        <div className={style.form_inputs_container}>
          <Password
            value={newPassword}
            placeholder="Digite sua nova senha"
            onChange={handleNewPasswordChange}
          />
          
          <Password
            value={confirmNewPassword}
            placeholder="Confirme sua nova senha"
            onChange={handleConfirmNewPasswordChange}
          />
        </div>

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