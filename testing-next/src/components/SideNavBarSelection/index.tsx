import styles from "./sideNavbar.module.scss"
import Image from 'next/image';

export default function SideNavBarAdmin() {
    return(
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.page}>
                    <a href="#">
                        <span className={styles.Text}>Моя Страница</span>
                    </a>
                </li>

                <li className={styles.friend}>
                    <a href="#">
                        <span className={styles.Text}>Друзья</span>
                    </a>
                </li>

                <li className={styles.gifts}>
                    <a href="#">
                        <span className={styles.Text}>Подарки друзьям</span>
                    </a>
                </li>

                <li className={styles.settings}>
                    <a href="#">
                        <span className={styles.Text}>Настройки</span>
                    </a>
                </li>

                <li className={styles.settings}>
                    <a href="#">
                        <span className={styles.Text}>Мои подборки</span>
                    </a>
                </li>
            </ul>

        </div>
    )
}
