'use client'

import { CaretDown } from '@/components/PhosphorIcons';

import { useState } from 'react';

import { GiCalendar } from 'react-icons/gi';

import Styles from './InnerHeaderNavList.module.sass';

export function InnerHeaderNavList() {
  const [showNavList, setShowNavList] = useState(false);

  return (
    <>
      <ul data-show={showNavList} className={Styles.InnerHeaderNavListContainer}>
        <li>
          <GiCalendar className={Styles.SidebarIcon} />
        </li>
      </ul>

      <div className={Styles.InnerHeaderNavListButtonContainer}>
        <button onClick={e => {e.preventDefault(); setShowNavList(state => !state)}}>
          <CaretDown data-show={showNavList} weight='bold' />
        </button>
      </div>
    </>
  )
}