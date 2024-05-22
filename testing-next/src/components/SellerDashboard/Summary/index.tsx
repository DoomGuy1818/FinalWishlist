import styles from "./Summary.module.scss"

export default function Summary( { revenue, reviewCount } ) {
	return (
		<div className={styles.summaryContainer}>
			<div className={styles.factContainer}>
				<h1 className={styles.number}>{revenue}&nbsp;₽</h1>
				<span className={styles.description}>Выручка за&nbsp;сегодня</span>
			</div>
			<div className={styles.factContainer}>
				<h1 className={styles.number}>{reviewCount}&nbsp;отзыва(ов)</h1>
				<span className={styles.description}>за последнюю&nbsp;неделю</span>
			</div>
		</div>
	)
}
