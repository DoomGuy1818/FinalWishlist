import Image from 'next/image'
import styles from './OtherSelection.module.scss'

export default function OtherSelection() {
  return (
    <div className={styles.selection}>
      <div className={styles.container}>
        <div className={styles.Title}>По поводам и без повода</div>
        <div className={styles.selectionInner}>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/Novoselie.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/ForTraining.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/8Mart.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/OnlineCourse.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/MomAndChild.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/Jevelery.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/Books.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/Woomen.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
