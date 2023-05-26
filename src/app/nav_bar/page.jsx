'use client';
import Style from "./styles.sass";
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className={`${Style.div_nav_bar} div-nav-bar`}>
      <h1 className={`${Style.div_nav_bar_h1} div-nav-bar-h1`}>LOGO</h1>
        {
          pathname === "/login" || pathname === '/register' || pathname === '/forgetPassword' 
          ? (
            <div className={`${Style.div_nav_bar_links} div-nav-bar-links`}>
              <a className={`${Style.div_nav_bar_links_home} div-nav-bar-links-home`} href="#">
                Home
              </a>
              <a className={`${Style.div_nav_bar_links_blog} div-nav-bar-links-blog`} href="#">
                Blog
              </a>
          </div>
          ) : (
            <div className={`${Style.div_nav_bar_links} div-nav-bar-links`}>
              <a className={`${Style.div_nav_bar_links_home} div-nav-bar-links-home`} href="#">
                Home
              </a>
              <a className={`${Style.div_nav_bar_links_about} div-nav-bar-links-about`} href="#">
                Sobre
              </a>
              <a className={`${Style.div_nav_bar_links_services} div-nav-bar-links-services`} href="#">
                Serviços
              </a>
              <a className={`${Style.div_nav_bar_links_blog} div-nav-bar-links-blog`} href="#">
                Blog
              </a>
              <a className={`${Style.div_nav_bar_links_contact} div-nav-bar-links-contact`} href="#">
                Contato
              </a>
              <a className={`${Style.div_nav_bar_links_login} div-nav-bar-links-login`} href="#">
                Login
              </a>
            </div> 
          )
        }
    </div>
  );
}
