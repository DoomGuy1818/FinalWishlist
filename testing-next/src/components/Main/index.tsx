'use client';

import Image from "next/image";
import styles from "./main.module.scss"; 
import Selection from "../Selection/index";
import Gifts from "../Gifts/index";
import Fiolet from "../fioletcube/index"



export default function Main() {
    return(
        <div className={styles.conteiner}>
            <div className={styles.gift_selections}>
                <div className={styles.gift_selections_nav}>
                    <div className={styles.nav_item1}>Подарки на любой вкус</div>
                    
                    <div className={styles.seeAll}>
                     <div className={styles.nav_item2}><a href = "/main-selection">Смотреть все</a></div>
                     <Image src="Images/arrow.svg" width={25} height={15} alt="Icon" />
                    </div>
                    </div>
                
                <div className={styles.selection}>
                <Selection/>
                </div>
            </div>
            
            <div className={styles.gifts}>
                <div className={styles.gift_selections_nav}>
                    <div className={styles.nav_item1}>Все подарки</div>
                    <div className={styles.seeAll}>
                     <div className={styles.nav_item2}><a href = "/main-selection">Смотреть все</a></div>
                     <Image src="Images/arrow.svg" width={25} height={15} alt="Icon" />
                    </div>
                </div>
                <div>
                    <Gifts/>
                </div>
            </div>
            <Fiolet/>
        </div>
    );
}