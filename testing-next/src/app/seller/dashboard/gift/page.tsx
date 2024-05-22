import styles from "./dashboard.module.scss"
import Sidebar from "@/components/SellerDashboard/Sidebar"
import Header from "@/components/SellerDashboard/Header"
import Summary from "@/components/SellerDashboard/Summary"
import SellerCard from "@/components/SellerDashboard/SellerCard"

export default function SellerDashboard() {
  return (
    <div>
      <Sidebar/>
      <div className={styles.dashboardContainer}>
        <div className={styles.workSpace}>
          <div className={styles.itemContainer}>
            <Header text={ "Подарки" }/>
            <div className={styles.itemGrid}>
              <div className={styles.grid}>
                <a href="/seller/dashboard/gift/create">
                  <div className={styles.itemWrap}>
                    <SellerCard title={ "Добавить Подарок!" } image={ "/add.svg" } />
                  </div>
                </a>
                <a href="/seller/dashboard/gift/1">
                  <div className={styles.itemWrap}>
                    <SellerCard title={ "Клавиатура Угрин" } image={ "/content/keyboard.jpg" } />
                  </div>
                </a>
                <div className={styles.itemWrap}>
                  <SellerCard title={ "Доставка на дом" } image={ "/delivery.png" } />
                </div>
                <div className={styles.itemWrap}>
                  <SellerCard title={ "Особая доставка" } image={ "/surprise.png" } />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <Header text={ "Сводка" } />
            <Summary revenue={ 1990 } reviewCount={ 9 } />
          </div>
        </div>
      </div>
    </div>
  );
}
