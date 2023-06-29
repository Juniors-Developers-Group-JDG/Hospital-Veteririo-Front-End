import style from "../NavBar.module.scss"

export default function Username(){
  const username = localStorage.getItem('username');
  if (username) {
    return (
    <span className={style.username}>{username}</span>
    )
  }
  return
}