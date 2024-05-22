import styles from "./sideNavbar.module.scss"
import Image from 'next/image';

export default function SideNavbar() {
    return(
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.page}>
                    <a href="/profile">
                        <span className={styles.Text}>Моя Страница</span>
                    </a>
                </li>

                <li className={styles.friend}>
                    <a href="#">
                        <span className={styles.Text}>Друзья</span>
                    </a>
                </li>

                <li className={styles.gifts}>
                    <a href="/boocked-gift">
                        <span className={styles.Text}>Подарки друзьям</span>
                    </a>
                </li>

                <li className={styles.settings}>
                    <a href="#">
                        <span className={styles.Text}>Настройки</span>
                    </a>
                </li>
            </ul>

        </div>
    )
}