'use client';

import { List, X } from '@/components/PhosphorIcons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Styles from './NavBar.module.sass';
import { LoginButton } from './loginButton';

const navigation = {
  home: '/landing',
  sobre: '/landing#about',
  serviços: '/landing#services',
  contato: '/landing#contact'
}

const navigationKeys = Object.keys(navigation)

export function OuterNavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  function toggleIsNavBarOpen() {
    setIsNavBarOpen(state => !state)
  }

  return (
    <div className={Styles.NavBarWrapper}>
      <header className={Styles.NavBarContainer}>
        <Link href='/'>
          <Image width={100} height={100} alt='Hospital Veterinário Logo' src='/assets/logo.png' className={Styles.NavBarLogo} />
        </Link>

        <div className={Styles.DesktopNavBarContentContainer}>
          <nav className={Styles.DesktopNavBarNavigation}>
            {
              navigationKeys.map(key => (
                <Link key={key} href={navigation[key]}>
                  {key}
                </Link>
              ))
            }
          </nav>
          
          <LoginButton />
        </div>

        <button onClick={toggleIsNavBarOpen} className={Styles.MobileNavBarTrigger}>
          {
            isNavBarOpen ? 
              <X />
            :
              <List />
          }
        </button>

      </header>

      <nav data-show={isNavBarOpen} onClick={toggleIsNavBarOpen} className={Styles.MobileNavBarNavigation}>
        {
          navigationKeys.map(key => (
            <Link key={key} href={navigation[key]}>
              {key}
            </Link>
          ))
        }

        <LoginButton />
      </nav>
    </div>
  )
}