import Image from 'next/image'
import Link from 'next/link'
import styles from './Interface.module.scss'

export default function InterfaceSection() {
  return (
    <section className={styles.interface}>
      <div className={styles.container}>
        <div className={styles.interfaceInner}>
          <Link className={styles.interfaceLink} href="/">
            <Image
              width={162}
              height={162}
              src="/images/Arrow.svg"
              alt="arrow"
            />
          </Link>
          <div className={styles.interfaceButtons}>
            <button className={styles.interfaceGreen}>
              Сохранить подборку
            </button>
            <button className={styles.interfaceRed}>Удалить подборку</button>
          </div>
        </div>
      </div>
    </section>
  )
}
