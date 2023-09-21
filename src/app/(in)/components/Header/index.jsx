'use client'

import { Avatar } from '@/components/Avatar';

import Styles from './InnerHeader.module.sass';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { deleteCookie, getCookie } from '../../../actions';
import { InnerHeaderNavList } from './components/navList';

export function InnerHeader() {
  const [userName, setUserName] = useState('');

  const { push } = useRouter()

  async function handleLogout() {
    await deleteCookie('username')
    await deleteCookie('token')

    push('/login');
  }

  useEffect(() => {
    getCookie('username').then(cookie => setUserName(cookie))
  }, [])

  return (
    <div className={Styles.HeaderWrapper}>
      <InnerHeaderNavList />

      <header className={Styles.HeaderContainer}>
        <div className={Styles.HeaderUserContainer}>
          <p>{userName}</p>

          <Avatar userName={userName} />
        </div>
        <button className={Styles.HeaderLogoutButton} onClick={handleLogout}>
          Logout
        </button>
      </header>
    </div>
  )
} 