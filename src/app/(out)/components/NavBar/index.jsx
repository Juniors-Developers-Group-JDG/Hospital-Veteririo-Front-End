'use client';

import Image from 'next/image';
import Link from 'next/link';
import Styles from './NavBar.module.sass';
import LoginButton from './loginButton';

const navigation = {
  home: '/landing',
  sobre: '/landing#about',
  serviços: '/landing#services',
  blog: '/blog',
  contato: '/landing#contact'
}

const navigationKeys = Object.keys(navigation)

export function OuterNavBar() {
  return (
    <header className={Styles.NavBarContainer}>
      <Link href='/'>
        <Image width={100} height={100} alt='Hospital Veterinário Logo' src='/assets/logo.png' className={Styles.NavBarLogo} />
      </Link>

      <div className={Styles.NavBarContentContainer}>
        <nav className={Styles.NavBarNavigation}>
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
    </header>
  )
}