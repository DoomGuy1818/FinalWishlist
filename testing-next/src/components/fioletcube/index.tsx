'use client';

import Image from "next/image";
import styles from "./fioletcube.module.scss";
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

  


    return (
        <div className={styles.gift_box}>
      
            <div className={styles.content}>
        
                <h2 className={styles.title}>Получай и дари только желаные подарки!</h2>
                <p className={styles.description}>
                Никаких глупых и нелепых сюрпризов! Добавь ссылку и получи
                гарантированно то, что хотел в нужном виде, цвете и качестве!
                </p>
                <a href = "/profile">
                <button className={styles.createButton}>
                  Создать вишлист
                </button>
                </a>
                
            </div>
            <div className={styles.image_container}>
            <Image src="Images/giftcloud.svg" width={windowWidth * 0.29} height={windowWidth * 0.275} alt="gift" />
            </div>
      
    </div>
    );
}