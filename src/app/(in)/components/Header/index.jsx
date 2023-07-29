'use client'

import { Avatar } from '@/components/Avatar';

import Styles from './InnerHeader.module.sass';

import { InnerHeaderNavList } from './components/navList';

import LoginButton from '@/components/nav_bar/loginButton/page.jsx';

import Username from '@/components/nav_bar/username/page.jsx';

export function InnerHeader() {

  return (
    <header className={Styles.HeaderContainer}>
      <InnerHeaderNavList />
      <Avatar UserName='John Doe' />
      <Username/>
      <LoginButton className={Styles.login}
      
      />

    </header>
  )
} 