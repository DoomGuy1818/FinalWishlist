import Image from 'next/image'
import Link from 'next/link'

export default function LikeButton() {
	return (
		// <Link href="/add_present">
			<Image
				src="/images/Like.svg"
				alt="LikeButton"
				width={80}
				height={80}
			/>
		// </Link>
	)
}