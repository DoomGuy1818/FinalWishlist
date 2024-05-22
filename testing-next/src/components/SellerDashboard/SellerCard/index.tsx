import styles from "./SellerCard.module.scss"
import Image from "next/image";

export default function SellerCard( { title, image } ) {
  return (
    <div className={styles.cardContainer}>
	<Image
		// className={styles.logo}
		src={image}
		alt=""
		width={ 125 }
		height={ 70 }
		style={{borderRadius: "20px"}}
	/>
	<div className={styles.title}>
		{ title }	
	</div>
    </div>
  );
}
