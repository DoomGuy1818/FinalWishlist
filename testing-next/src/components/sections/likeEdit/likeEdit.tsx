import EditButton from '@/components/ui/EditButton/EditButton'
import LikeButton from '@/components/ui/LikeButton/LikeBotton'
import styles from './likeEdit.module.scss'

export default function LikeEditSection() {
  return (
    <div className={styles.likeEdit}>
      <div className={styles.container}>
        <div className={styles.likeEditInner}>

          <div className={styles.likeEditButton}>
            <h2 className={styles.likeEditTitle}>15</h2>
            <LikeButton /> 
          </div>

          <div className={styles.likeEditButton2}>
          <EditButton />
          </div>

        </div>
      </div>
    </div>
  )
}
