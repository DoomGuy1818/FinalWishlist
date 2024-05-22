// 'use client';
import React from "react";
import styles from "@/app/components/Banners1/Subbanner1/Subbanner1.module.scss";
import Image from "next/image";

const Subbanner1 = () => {
  return (
    <>
      <div className={styles.violet_rectangle} id="first">
        <div className={styles.text_all}>
          <div className={styles.text_small}>
            <span>1 балл = 1 ₽</span>
          </div>

          <div className={styles.text_big}>
            <p>СЕЙЧАС У ВАС</p>
            <div className={styles.coins_section}>
              65
              <Image
                className={styles.coin_image}
                width={50}
                height={51}
                src="/coin.png"
                alt="Coin"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subbanner1;
