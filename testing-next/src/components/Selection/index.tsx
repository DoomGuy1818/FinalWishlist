import Image from 'next/image'
import styles from './selection.module.scss'


export default function OtherSelection() {

    
  return (
    <div className={styles.selection}>
      <div className={styles.container}>
        
        <div className={styles.selectionInner}>
          <div className={styles.selectionCard}>
            <Image
              src="images/Novoselie.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/ForTraining.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/8Mart.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/OnlineCourse.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/MomAndChild.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/Jevelery.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/Books.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/Woomen.svg"
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