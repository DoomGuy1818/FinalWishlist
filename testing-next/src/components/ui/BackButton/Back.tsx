import Image from 'next/image'
import Link from 'next/link'

export default function BackButton({ link }) {
	return (
		<Link href={link}>
			<Image src="/images/Arrow.svg" alt="arrow" width={162} height={162} />
		</Link>
	)
}
