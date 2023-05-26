import styles from '../../header.module.scss'

export function Navlink({isActive, children}){
  return(
    <li><a href="#" className={styles.nav_link +' '+(isActive&& styles.active)}>{children}</a></li>
  )
}