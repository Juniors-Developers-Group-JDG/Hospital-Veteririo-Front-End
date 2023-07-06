import { Avatar } from '@/components/Avatar';

import Styles from './InnerHeader.module.sass';

import { InnerHeaderNavList } from './components/navList';

export function InnerHeader() {
  
  return (
    <header className={Styles.HeaderContainer}>
      <InnerHeaderNavList />

      <Avatar UserName='John Doe' />
    </header>
  )
}