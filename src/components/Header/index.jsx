import { Navlink } from './components/Navlink'
import styles from './header.module.scss' 

export function Header({isActive}){
  return(
    <header className={styles.header}>
      <span className={styles.Logo}>Logo</span>
      <nav>
        <ul className={styles.navbar}>
          <Navlink isActive>Home</Navlink>
          <Navlink>Sobre</Navlink>
          <Navlink>Serviços</Navlink>
          <Navlink>Blog</Navlink>
          <Navlink>Contato</Navlink>
          <Navlink>Login</Navlink>
        </ul>
      </nav>
    </header>
  )
}