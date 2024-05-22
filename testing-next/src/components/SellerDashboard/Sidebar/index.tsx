import styles from "./Sidebar.module.scss"
import Image from "next/image"
import Logo from "@/components/SellerDashboard/Logo"

export default function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.logo}>
	<Logo />
      </div>
      <div className={styles.parent}>
	<a href="/seller/dashboard/gift" className={styles.child}>
	  <Image src="/gift.svg" alt="" width={40} height={40} />
	  <div className={styles.section}>
	    Подарки
	  </div>
	</a>
	<a href="/seller/dashboard/service" className={styles.child}>
	  <Image src="/service.svg" alt="" width={50} height={50} />
	  <div className={styles.section}>
	    Услуги
	  </div>
	</a>
	<a href="/seller/dashboard/reviews" className={styles.child}>
	  <Image src="/review.svg" alt="" width={40} height={40} />
	  <div className={styles.section}>
	    Отзывы
	  </div>
	</a>
      </div>
      <div className={styles.exitParent}>
	<a href="/seller" className={styles.exitChild}>
	  <Image src="/exit.svg" alt="" width={50} height={50} />
	  <div className={styles.exitSection}>
	    Выйти
	  </div>
	</a>
      </div>
    </div>
  );
}
