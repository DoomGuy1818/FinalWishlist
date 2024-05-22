import styles from './Titles.module.scss'

export default function TitlesSection() {
	return (
		<div className={styles.title}>
			<div className={styles.container}>
				<h1 className={styles.titleArticle}>Что подарить хозяюшке</h1>
				<div className={styles.titleText}>
					Идеи полезных и нужных подарков для дома, кухни, облегчения бытовых
					дел и экономии времени
				</div>
			</div>
		</div>
	)
}
