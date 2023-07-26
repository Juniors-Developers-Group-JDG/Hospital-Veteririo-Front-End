'use client'

import { Avatar } from '@/components/Avatar';

import Styles from './InnerHeader.module.sass';

import { InnerHeaderNavList } from './components/navList';

export function InnerHeader() {

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  
  return (
    <header className={Styles.HeaderContainer}>
      <InnerHeaderNavList />
      <Avatar UserName='John Doe' />
      <button
        onClick={logout}
      >
        <span>Logout</span>
      </button>
    </header>
  )
} 