import Link from 'next/link'
import styles from '../../header.module.scss'

export function Navlink({ isActive, children, href }){
  return(
    <li><Link c href={href} className={styles.nav_link +' '+(isActive&& styles.active)}>{children}</Link></li>
  )
}