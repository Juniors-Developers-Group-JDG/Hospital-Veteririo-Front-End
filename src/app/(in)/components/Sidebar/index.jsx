import { GiCalendar } from 'react-icons/gi'

import Styles from './Sidebar.module.sass'

export function Sidebar() {
  return (
    <aside className={Styles.SidebarContainer}>
      <GiCalendar className={Styles.SidebarIcon} />
    </aside>
  )
}