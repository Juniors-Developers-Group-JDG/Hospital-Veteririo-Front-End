import { getCookie } from '@/app/actions'
import style from "../NavBar.module.scss"

export default function Username(){
  const username = getCookie('username')
  if (username) {
    return (
    <span className={style.username}>{username}</span>
    )
  }
  return
}