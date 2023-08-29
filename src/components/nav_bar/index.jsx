"use client";
import Image from 'next/image';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import style from "./NavBar.module.scss";

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
          
          




          
        </div>
      )}
    </div>
  );
}