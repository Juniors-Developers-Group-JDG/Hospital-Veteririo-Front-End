'use client'

import { CaretDown } from '@/components/PhosphorIcons';

import { useEffect, useState } from 'react';

import { GiCalendar } from 'react-icons/gi';

import { getCookie } from '@/app/actions';
import { Avatar } from '@/components/Avatar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiComputerDesktop } from 'react-icons/hi2';
import Styles from './InnerHeaderNavList.module.sass';

export function InnerHeaderNavList() {
  const [showNavList, setShowNavList] = useState(false);

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
    <>
      <div data-show={showNavList} className={Styles.InnerHeaderNavListContainer}>
        <div className={Styles.NavListUserContainer}>
          <p>{userName}</p>

          <Avatar userName={userName} />
        </div>
        <button className={Styles.NavListLogoutButton} onClick={handleLogout}>
          Logout
        </button>
        
        <ul className={Styles.InnerHeaderNavListListContainer}>
          <li>
            <Link href='/admin'>
              <HiComputerDesktop className={Styles.SidebarIcon} />
            </Link>
          </li>
          <li>
            <Link href="/schedule">
              <GiCalendar className={Styles.SidebarIcon} />
            </Link>
          </li>
        </ul>
      </div>

      <div className={Styles.InnerHeaderNavListButtonContainer}>
        <button onClick={e => {e.preventDefault(); setShowNavList(state => !state)}}>
          <CaretDown data-show={showNavList} weight='bold' />
        </button>
      </div>
    </>
  )
}