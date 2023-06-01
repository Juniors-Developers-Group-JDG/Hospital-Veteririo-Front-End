import { Navlink } from './components/Navlink'
import styles from './header.module.scss'

export function Header({isActive}){
  return(
    <header className={styles.header}>
      <span className={styles.Logo}>Logo</span>
      <nav>
        <ul className={styles.navbar}>
          <Navlink href='/'>Home</Navlink>
          <Navlink href='/about'>Sobre</Navlink>
          <Navlink href=''>Serviços</Navlink>
          <Navlink href=''>Blog</Navlink>
          <Navlink href=''>Contato</Navlink>
          <Navlink href=''>Login</Navlink>
        </ul>
      </nav>
    </header>
  )
}