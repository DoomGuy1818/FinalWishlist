import Image from 'next/image'
import Link from 'next/link'
import styles from './Catalog.module.scss'

export default function CatalogSection() {
return (
<div className={styles.catalog}>
<div className={styles.container}>
<div className={styles.catalogInner}>
<div className={styles.catalogCard}>
<Image
src="images/mainCard.svg"
width={350}
height={350}
alt="product photo"
/>
<div className={styles.catalogTitle}>
Ручной отпариватель Xiaomi
</div>
<div className={styles.catalogPrice}>1 727 ₽</div>
<div className={styles.catalogAdd}>
<button className={styles.catalogBtn}>
<Image
width={44}
height={44}
src="/images/plusButton.svg"
alt="plusButton"
/>
Добавить в Wishlist
</button>
</div>
<Link className={styles.catalogLink} href="/">
Перейти в магазин
</Link>
</div>
<div className={styles.catalogCard}>
<Image
src="images/productCard/spisii.svg"
width={350}
height={350}
alt="product photo"
/>
<div className={styles.catalogTitle}>
Набор электромельниц для перца и соли
</div>
<div className={styles.catalogPrice}>2 659 ₽</div>
<div className={styles.catalogAdd}>
<button className={styles.catalogBtn}>
<Image
width={44}
height={44}
src="/images/plusButton.svg"
alt="plusButton"
/>
Добавить в Wishlist
</button>
</div>
<Link className={styles.catalogLink} href="/">
Перейти в магазин
</Link>
</div>
<div className={styles.catalogCard}>
<Image
src="images/productCard/grill.svg"
width={350}
height={350}
alt="product photo"
/>
<div className={styles.catalogTitle}>
Аэрогриль-мультипечь REDMOND RAG-247
</div>
<div className={styles.catalogPrice}>10 999 ₽</div>
<div className={styles.catalogAdd}>
<button className={styles.catalogBtn}>
<Image
width={44}
height={44}
src="/images/plusButton.svg"
alt="plusButton"
/>
Добавить в Wishlist
</button>
</div>
<Link className={styles.catalogLink} href="/">
Перейти в магазин
</Link>
</div>
<div className={styles.catalogCard}>
<Image
src="images//productCard/tarelki.svg"
width={350}
height={350}
alt="product photo"
/>
<div className={styles.catalogTitle}>
Набор столовой посуды "Органик" на 6 персон
</div>
<div className={styles.catalogPrice}>14 241 ₽</div>
<div className={styles.catalogAdd}>
<button className={styles.catalogBtn}>
<Image
width={44}
height={44}
src="/images/plusButton.svg"
alt="plusButton"
/>
Добавить в Wishlist
</button>
</div>
<Link className={styles.catalogLink} href="/">
Перейти в магазин
</Link>
</div>
<div className={styles.catalogCard}>
<Image
src="images/productCard/soap.svg"
width={350}
height={350}
alt="product photo"
/>
<div className={styles.catalogTitle}>
Набор для ванной комнаты Emily
</div>
<div className={styles.catalogPrice}>3 325 ₽</div>
<div className={styles.catalogAdd}>
<button className={styles.catalogBtn}>
<Image
width={44}
height={44}
src="/images/plusButton.svg"
alt="plusButton"
/>
Добавить в Wishlist
</button>
</div>
<Link className={styles.catalogLink} href="/">
Перейти в магазин
</Link>
</div>
<div className={styles.catalogCard}>
<Image
src="images/productCard/multivarka.svg"
width={350}
height={350}
alt="product photo"
/>
<div className={styles.catalogTitle}>
Мультиварка-скороварка REDMOND RMC-PM381
</div>
<div className={styles.catalogPrice}>9 928 ₽</div>
<div className={styles.catalogAdd}>
<button className={styles.catalogBtn}>
<Image
width={44}
height={44}
src="/images/plusButton.svg"
alt="plusButton"
/>
Добавить в Wishlist
</button>
</div>
<Link className={styles.catalogLink} href="/">
Перейти в магазин
</Link>
</div>
<div className={styles.catalogCard}>
<Image
src="images/productCard/postel.svg"
width={350}
height={350}
alt="product photo"
/>
<div className={styles.catalogTitle}>
Комплект постельного белья MORФEUS
</div>
<div className={styles.catalogPrice}>9 120 ₽</div>
<div className={styles.catalogAdd}>

    <button className={styles.catalogBtn}>
    <Image
    width={44}
    height={44}
    src="/images/plusButton.svg"
    alt="plusButton"
    />
    Добавить в Wishlist
    </button>
    </div>
    <Link className={styles.catalogLink} href="/">
    Перейти в магазин
    </Link>
    </div>
    <div className={styles.catalogCard}>
    <Image
    src="images/productCard/tarelkibel.svg"
    width={350}
    height={350}
    alt="product photo"
    />
    <div className={styles.catalogTitle}>
    Набор столовой посуды, 12 предметов
    </div>
    <div className={styles.catalogPrice}>6 335 ₽</div>
    <div className={styles.catalogAdd}>
    <button className={styles.catalogBtn}>
    <Image
    width={44}
    height={44}
    src="/images/plusButton.svg"
    alt="plusButton"
    />
    Добавить в Wishlist
    </button>
    </div>
    <Link className={styles.catalogLink} href="/">
    Перейти в магазин
    </Link>
    </div>
    <div className={styles.catalogCard}>
    <Image
    src="images/productCard/desk.svg"
    width={350}
    height={350}
    alt="product photo"
    />
    <div className={styles.catalogTitle}>
    Гладильная доска Nika Sophy SF
    </div>
    <div className={styles.catalogPrice}>3 940 ₽</div>
    <div className={styles.catalogAdd}>
    <button className={styles.catalogBtn}>
    <Image
    width={44}
    height={44}
    src="/images/plusButton.svg"
    alt="plusButton"
    />
    Добавить в Wishlist
    </button>
    </div>
    <Link className={styles.catalogLink} href="/">
    Перейти в магазин
    </Link>
    </div>
    </div>
    </div>
    </div>
    )
    }
