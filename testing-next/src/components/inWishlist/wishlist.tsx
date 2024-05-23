'use client';
import styles from "./wishlist.module.scss";
import Image from "next/image";
import SideNavbar from "@/components/sideNavbar";
import { UseGetWishlistQuery } from "@/hooks/useGetWishlistQuery";
import Link from "next/link";

function Wishlist() {
    const { data, isLoading, isError } = UseGetWishlistQuery();

    // Если данные загружаются, отобразите сообщение о загрузке
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Если произошла ошибка при загрузке данных, отобразите сообщение об ошибке
    if (isError) {
        return <div>Error fetching wishlist</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.pageWrap}>
                <div className={styles.sideNavbar}>
                    <SideNavbar />
                </div>
                <div className={styles.page}>
                    <div className={styles.profile}>
                        <div className={styles.profileImage}></div>
                        <div className={styles.profileInfo}>
                            <h1>Елизавета Ланус</h1>
                            <a href="#" className={styles.refToEdit}>редактировать</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.myWishlists}>
                <h1>Мои Вишлисты</h1>
                <a href="#" className={styles.createButton}>Создать вишлист</a>
                <div className={styles.wishlistGrid}>
                    {data?.map((wishlist) => (
                        <Link key={wishlist.id} href="#">
                            <div className={styles.wishlistItem}>{wishlist.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Wishlist;

