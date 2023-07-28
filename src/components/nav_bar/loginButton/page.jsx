"use client"

import Link from "next/link";
import style from "../NavBar.module.scss"
import { getCookie } from "@/app/actions";

export default function LoginButton(){
  const isauth = getCookie('authenticated')
  if(isauth) {
    return (
      <Link className={style.login}
            href="/login"
            onClick={() => {
              window.location.href = '/login'
            }}
          >
            Login
      </Link>
    )
  }
  return (
    <Link className={style.login}
      href="#"
      onClick={() => {
      localStorage.removeItem('username');
    }}
      > 
      Logout
      </Link>
  )
}