import AddButton from '@/components/ui/AddButton/AddButton'
import styles from './Gifts.module.scss'

export default function GiftsSection() {
	return (
		<div className={styles.gifts}>
			<div className={styles.container}>
				<div className={styles.giftsInner}>
					<h2 className={styles.giftsTitle}>
						Добавьте подарки в вашу подборку
					</h2>
					<AddButton />
				</div>
			</div>
		</div>
	)
}
