import styles from "./dashboard.module.scss"
import Sidebar from "@/components/SellerDashboard/Sidebar"
import Header from "@/components/SellerDashboard/Header"
import ReviewCard from "@/components/SellerDashboard/ReviewCard";

export default function CreateGift() {
  return (
    <>
      <Sidebar/>
      <div className={styles.dashboardContainer}>
        <div className={styles.workSpace}>
          <Header text={ "Отзывы о ваших услугах" }/>
          <div className={styles.createForm}>
            <input className={styles.filterBox} placeholder={ "Фильтр" }></input>
            <div className={styles.reviewContainer}>
              <ReviewCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
