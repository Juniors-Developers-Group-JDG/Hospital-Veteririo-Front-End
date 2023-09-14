import { HiCalendarDays, HiComputerDesktop } from 'react-icons/hi2'

import Link from 'next/link'
import Styles from './Sidebar.module.sass'

export function Sidebar() {
  return (
    <aside className={Styles.SidebarContainer}>
      <Link href='/admin'>
        <HiComputerDesktop className={Styles.SidebarIcon} />
      </Link>
      <Link href='/schedule'>
        <HiCalendarDays className={Styles.SidebarIcon} />
      </Link>
    </aside>
  )
}