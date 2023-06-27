import { Avatar } from '../../../../components/Avatar';

import Styles from './InnerHeader.module.sass';

export function InnerHeader() {
  return (
    <header className={Styles.HeaderContainer}>
      <Avatar UserName='John Doe' />
    </header>
  )
}