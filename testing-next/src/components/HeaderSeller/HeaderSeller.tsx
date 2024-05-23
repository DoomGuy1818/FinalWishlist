'use client';

import Image from "next/image";
import styles from "./HeaderSeller.module.scss"; 
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
        setWindowWidth(window.innerWidth);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

        const logoWidth = windowWidth * 0.16; 
        const logoHeight = logoWidth * 0.4; 
        
        const checkUserSession = () => {
          if (typeof localStorage === 'undefined') {
            return false;
          }
          const userSession = localStorage.getItem('userSession');
          console.log(userSession)
          return !!userSession;
        };
  
    return(
      <div className={styles.all}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <section className={styles.topNav}>
        <div className={styles.logo}>
        <a href ="/">
        <Image src="/images/logo.svg" width={logoWidth} height={logoHeight} alt="Not found" />
        </a>
        </div>
        <input id="menu-toggle" type="checkbox" className={styles.menuToggle} />
        <label className={styles.menuButtonContainer} htmlFor="menu-toggle">
          <div className={styles.menuButton}></div>
        </label>
        <ul className={styles.menu}>
        <li><a href = {checkUserSession()? "/seller/dashboard/gift" : "/seller/dashboard/gift"  }>Продавцам</a></li>
          <li><a href = {checkUserSession()? "/main-selection" : "/main-selection"  }>Подборки</a></li>
          <li><a href = {checkUserSession()? "/profile" : "/login"  }>Мой профиль</a></li>
        </ul>
      </section>

      </div>
  );
};
     
