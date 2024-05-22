import Image from 'next/image'
import Link from 'next/link'
import styles from './AddButton.module.scss'

export default function AddButton() {
  return (
    <Link href="/add_present">
      <div className={styles.imageContainer}>
        <Image
          src="/images/BigPlusButton.svg"
          alt="BigPlusButton"
          layout="responsive"
          width={170}
          height={170}
        />
      </div>
    </Link>
  )
}
