import styles from "./ReviewCard.module.scss"
import Image from "next/image";

export default function ReviewCard( { title, image, mark, comment } ) {
  return (
    <div className={styles.cardContainer}>
	<Image
		// className={styles.logo}
		src={image ? image : "/placeholder_image.svg"}
		alt=""
		width={ 125 }
		height={ 70 }
		style={{borderRadius: "20px"}}
	/>
	<div className={styles.text}>
	<div className={styles.reviewSummary}>
	  <h1 className={styles.title}>
	    { title ? title : "Title" }  
	  </h1>
	  <h1 className={styles.title}>
	    { mark ? mark : 4 }  
	  </h1>
	</div>
	<p className={styles.comment}>
	  { comment ? comment : "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident." }
	</p>
	</div>
    </div>
  );
}
