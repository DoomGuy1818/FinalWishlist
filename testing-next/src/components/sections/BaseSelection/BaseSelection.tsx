import Image from 'next/image'
import styles from './BaseSelection.module.scss'

export default function BaseSelection() {
  return (
    <div className={styles.selection}>
      <div className={styles.container}>
        <div className={styles.Title}>Базовые подборки</div>
        <div className={styles.selectionInner}>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/Sportsmenam.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/Traveling.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/Hozyaikam.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/forVibe.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/Children.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/Flower.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/DomPit.svg"
              width={408}
              height={354}
              alt="selection Card"
            />
          </div>
          <div className={styles.selectionCard}>
            <Image
              src="images/selectionCard/Gamers.svg"
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
