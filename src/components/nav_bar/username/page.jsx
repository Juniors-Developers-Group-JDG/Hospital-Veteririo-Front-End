"use client";

import { getCookie, createCookie } from "@/app/actions";
import style from "../NavBar.module.scss"


export default function Username(){
  
  if (true) {
    return (
    <span className={style.username}>{localStorage.getItem('username')}</span>
    )
  }
  return
}