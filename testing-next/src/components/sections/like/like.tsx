import LikeButton from '@/components/ui/LikeButton/LikeBotton'
import styles from './like.module.scss'

export default function LikeSection() {
  return (
    <div className={styles.likeEdit}>
      <div className={styles.container}>
        <div className={styles.likeEditInner}>

          <div className={styles.likeEditButton}>
            <h2 className={styles.likeEditTitle}>15</h2>
            <LikeButton /> 
          </div>

        </div>
      </div>
    </div>
  )
}
