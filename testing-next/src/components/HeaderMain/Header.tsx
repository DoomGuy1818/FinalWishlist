'use client';

import styles from './Header.module.scss'
import Image from "next/image";
import { useState, useEffect } from "react";

const BurgerMenu = () => {

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

  return (
    <div className={styles.all}>
      <div className={styles.biggift}>
              <Image src="/images/giftbig.svg" width={windowWidth * 0.33} height={windowWidth * 0.335} alt="Not found" />
          </div>
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
          <ul className={styles.menu}>
          {/* <li><a href = {checkUserSession()? "/profile" : "/profile"  }>Мои квесты</a></li> */}
          <li><a href = {checkUserSession()? "/seller/dashboard/gift" : "/seller/dashboard/gift"  }>Продавцам</a></li>
          <li><a href = {checkUserSession()? "/main-selection" : "/main-selection"  }>Подборки</a></li>
          <li><a href = {checkUserSession()? "/profile" : "/login"  }>Мой профиль</a></li>
        </ul>
        </ul>
      </section>
      <ul className={styles.header__list__main}>
            <li className={styles.header__item__main}>
            Привет, это wishlistik — сервис для создания вишлистов
            </li>
            <li className={styles.header__item__main__two}>
              Мы помогаем вам получать и дарить
            </li>
            
          </ul>
          <a href = "/profile">
          <button className={styles.createButton}>
            Создать вишлист
          </button>
          </a>
          
    </div>
  );
};

export default BurgerMenu;
