"use client";
import Image from 'next/image';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { scroller } from "react-scroll";
import style from "./NavBar.module.scss";
import LoginButton from "./loginButton/page";

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [mobile, setMobile] = useState(null);
  const [scroll, setScroll] = useState(false);
  const { push } = useRouter();

  const scrollToSection = (sectionId)=>{
    scroller.scrollTo(sectionId, {smooth: true, duration: 500})
  }

  const clickMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const goHome = () => {
    push('/home')
  }

  const detectarScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 600) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      }
    }; 

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', detectarScroll);
    return () => {
      window.removeEventListener('scroll', detectarScroll);
    };
  }, [
    
  ]);

  const pathname = usePathname();

  return (
    <div className={ scroll ? style.navbar_scroll : style.navbar } id="navbar">
      
      <div className={style.logo}>
        <Image
          src="/assets/logo.png"
          alt="JDG Logo"
          width={70}
          height={70}
          className="logo"
          onClick={goHome}
        />
      </div> 


      {pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/forgotPassword" ||
      pathname === "/forgotPassword/changePassword" ? (
        <div className={style.list_lrf}>
          <Link href="#" onClick={() => {
              setMenuIsOpen(false);
            }}>
            Home
          </Link>
          
          <Link href="/blog" onClick={() => {
              setMenuIsOpen(false);
            }}>
            Blog
          </Link>

        </div>
      ) : (
        <div className={style.list_home}>


          {/* Pagina home tela WEB */}
          {
            !mobile && (
              <div className={style.group_list}>
              <Link
            href="#"
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => {
              scrollToSection('about')
              setMenuIsOpen(false);
            }}
          >
            Sobre
          </Link>
          <Link
            href="#services"
            onClick={() => {
              scrollToSection('services')
              setMenuIsOpen(false);
            }}
          >
            Serviços
          </Link>
          <Link
            href="/blog"
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            onClick={() => {
              scrollToSection('contact')
              setMenuIsOpen(false);
            }}
          >
            Contato
          </Link>
          <LoginButton 
            onClick={() => {
              setMenuIsOpen(false);
            }}
          />
              </div>
            )
          }

          {/* Pagina home tela MOBILE */}
          {
            mobile && (
              <div className={style.group_list}>
                <div className={style.menu}>
                <button onClick={clickMenu}>
                  
                  {/* Troca de icones */}
                  {
                    !menuIsOpen ? (
                      <Image
                        src="/icons/menu-hamb.svg"
                        alt="Menu Hamburger"
                        width={40}
                        height={40}
                        className={style.menu_hamb}
                      />
                    ) : (
                      <Image
                        src="/icons/close.svg"
                        alt="Menu Hamburger"
                        width={40}
                        height={40}
                        className={style.menu_hamb}
                      />
                    )
                  }
                </button>
                </div>


                  {/* Aprecimento de lista */}
                {
                  menuIsOpen && (
                    <div className={style.nav_list}>
                      <Link
                      className={style.link}
                          href="#"
                          onClick={() => {
                            setMenuIsOpen(false);
                          }}
                        >
                          Home
                        </Link>
                        <Link
                        className={style.link}
                          href="#about"
                          onClick={() => {
                            scrollToSection('about')
                            setMenuIsOpen(false);
                          }}
                        >
                          Sobre
                        </Link>
                        <Link
                        className={style.link}
                          href="#services"
                          onClick={() => {
                            scrollToSection('services')
                            setMenuIsOpen(false);
                          }}
                        >
                          Serviços
                        </Link>
                        <Link
                        className={style.link}
                          href="/blog"
                          onClick={() => {
                            setMenuIsOpen(false);
                          }}
                        >
                          Blog
                        </Link>
                        <Link
                        className={style.link}
                          href="#contact"
                          onClick={() => {
                            scrollToSection('contact')
                            setMenuIsOpen(false);
                          }}
                        >
                          Contato
                        </Link>
                        <span className="username">
                          {username}
                        </span>
                        <LoginButton />
                    </div>
                  )
                }

              </div>
            )
          }




          
        </div>
      )}
    </div>
  );
}