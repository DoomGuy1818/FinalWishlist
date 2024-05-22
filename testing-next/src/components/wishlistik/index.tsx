'use client';
import styles from "./wishlist.module.scss";
import Image from "next/image";
import SideNavbar from "@/components/sideNavbar";
import { UseGetWishlistQuery } from "@/hooks/useGetWishlistQuery";
import Link from "next/link";

function Wishlist() {
    const { data, isLoading, isError } = UseGetWishlistQuery();
    console.log(data)

    // Если данные загружаются, отобразите сообщение о загрузке
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Если произошла ошибка при загрузке данных, отобразите сообщение об ошибке
    if (isError) {
        return <div>Error fetching wishlist</div>;
    }


    const handleWishlistID = (id : string) => {
        localStorage.setItem("wishlistID", id);
        console.log(localStorage.getItem("wishlistID"))
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
                <a href="/wishlist/create/wishlist" className={styles.createButton}>Создать вишлист</a>
                <div className={styles.wishlistGrid}>
                    {data?.map((wishlist) => (
                        <div key={wishlist.id} className={styles.wishlistItem}>
                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDelete(wishlist.id)}
                            >
                                &times;
                            </button>
                            <Link href="/in-wishlist" onClick={()=> handleWishlistID(wishlist.id)}>
                                <div>{wishlist.name}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
