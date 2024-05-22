import styles from "./landing.module.scss";
import Link from "next/link";
import Header from "@/components/HeaderSeller/HeaderSeller";

export default function SellerLanding() {
  return (
    <div className={styles.landing}>
      <Header />
      <div className={styles.landingContainer}>
        <div className={styles.foreground}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>Помогайте дарить и радовать</h1>
            <p className={styles.subheading}>Зарегистрируйтесь как продавец и продвигайте свои услуги</p>
          </div>
          <Link href="/seller/login" className={styles.fuckingButton}>
            <button className={styles.landingButton}>Стать продавцом!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
