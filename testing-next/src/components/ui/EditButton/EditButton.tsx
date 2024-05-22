import Image from 'next/image'
import Link from 'next/link'

export default function EditButton() {
	return (
		<Link href="/add_present">
			<Image
				src="/images/Edit.svg"
				alt="Edit button"
				width={80}
				height={80}
			/>
		</Link>
	)
}