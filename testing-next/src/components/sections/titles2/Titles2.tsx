import styles from './Titles2.module.scss'

export default function TitlesSection2() {
  return (
    <div className={styles.title}>
      <div className={styles.container}>
        <h1 className={styles.titleArticle}>Введите название вашей подборки</h1>
        <div className={styles.titleText}>Опишите вашу подборку</div>
      </div>
    </div>
  )
}
