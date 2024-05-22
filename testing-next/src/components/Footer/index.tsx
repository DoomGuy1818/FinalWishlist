import styles from './Footer.module.scss'
import Image from 'next/image';

function Footer() {

    return(

        <footer className={styles.footerContainer}>

            <div className={styles.subContainer}>

                <div className={styles.logo}>

                    <Image 
                    src="img/Logo.svg"
                    width={48}
                    height={48}
                    alt="Logo"
                    />

                    <h3 className={styles.logoTitle}>
                    Wishlistik
                    </h3>

                </div>

                <div className={styles.socialContainer}>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="icons/VK.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="icons/Telegram.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                    <div className={styles.btnIcon}>
                        <Image 
                            src="icons/Whatsapp.svg"
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>

                </div>

            </div>

            <div className={styles.footerNavigation}>

                <ul className={styles.homeList}>
                    <li className={styles.listItem}>Кто мы?</li>
                    <li className={styles.listItem}>Подборки</li>
                    <li className={styles.listItem}>Продавцам</li>
                    <li className={styles.listItem}>Условия использования</li>
                </ul>

                <div className={styles.privacyContainer}>

                    <span className={styles.privacyText1}>
                        @2024 Wishlistik. Никакие права не защищены.
                    </span>

                </div>
                
            </div>

        </footer>

    )

}

export default Footer;
