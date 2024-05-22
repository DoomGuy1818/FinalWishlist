import styles from "./dashboard.module.scss"
import Image from "next/image"
import Sidebar from "@/components/SellerDashboard/Sidebar"
import Header from "@/components/SellerDashboard/Header"

export default function CreateService() {
  return (
    <>
      <Sidebar/>
      <div className={styles.dashboardContainer}>
        <div className={styles.workSpace}>
          <Header text={ "Подарок" }/>
          <div className={styles.createForm}>
            <div className={styles.textRow}>
              <div className={styles.textInputs}>
                <input className={styles.input} placeholder={ "Клавиатура Угрин" }></input>
                <input className={styles.input} placeholder={ "Хорошо знает матан и линал" }></input>
                <input className={styles.input} placeholder={ "3590" }></input>
              </div>
              <div className={styles.deleteButton}>
                <div className={styles.deleteIcon}>
                  <Image src="/delete.svg" alt="" width={50} height={50} />
                </div>
                <div className={styles.section}>
                  Удалить подарок
                </div>
              </div>
              <button className={styles.createButton}>Изменить подарок</button>
            </div>
            <div className={styles.photoBox}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
