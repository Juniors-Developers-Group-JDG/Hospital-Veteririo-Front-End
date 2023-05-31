"use client";
import Link from "next/link";
import Style from "./styles.sass";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineCancel } from 'react-icons/md';

export default function NavBar() {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 480 ? true : false);

  const clickMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    console.log(menuIsOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 480) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);

  const pathname = usePathname();
  return (
    <div className='div-nav-bar'>
      <h1 className={`${Style.div_nav_bar_h1} div-nav-bar-h1`}>LOGO</h1>
      <div
        onClick={clickMenu}
        className='div-nav-bar-hamburguer-menu'
      >
          {
            mobile ? (
              menuIsOpen ? (
                <MdOutlineCancel 
                  className='div-nav-bar-hamburguer-menu-icon'
                />
              ) : (
                <RxHamburgerMenu
                  className='div-nav-bar-hamburguer-menu-icon'
                />
              )
            ) : null
          }
      </div>
      {
      pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/forgotPassword" ? (
        <div className={
          menuIsOpen ? `${Style.div_nav_bar_links} div-nav-bar-links` :
          `${Style.div_nav_bar_links} div-nav-bar-close`
        }>
          <Link
            className={`${Style.div_nav_bar_links_home} div-nav-bar-links-home`}
            href="#"
          >
            Home
          </Link>
          <Link
            className={`${Style.div_nav_bar_links_blog} div-nav-bar-links-blog`}
            href="#"
          >
            Blog
          </Link>
        </div>
      ) : (
        <div className={
          menuIsOpen ? `${Style.div_nav_bar_links} div-nav-bar-links` :
          `${Style.div_nav_bar_links} div-nav-bar-close`
        }>
          <Link
            className={`${Style.div_nav_bar_links_home} div-nav-bar-links-home`}
            href="#"
          >
            Home
          </Link>
          <Link
            className={`${Style.div_nav_bar_links_about} div-nav-bar-links-about`}
            href="#"
          >
            Sobre
          </Link>
          <Link
            className={`${Style.div_nav_bar_links_services} div-nav-bar-links-services`}
            href="#"
          >
            Serviços
          </Link>
          <Link
            className={`${Style.div_nav_bar_links_blog} div-nav-bar-links-blog`}
            href="#"
          >
            Blog
          </Link>
          <Link
            className={`${Style.div_nav_bar_links_contact} div-nav-bar-links-contact`}
            href="#"
          >
            Contato
          </Link>
          <Link
            className={`${Style.div_nav_bar_links_login} div-nav-bar-links-login`}
            href="#"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}