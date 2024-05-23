'use client';
import styles from "./wishlist.module.scss";
import Image from "next/image";
import SideNavbar from "@/components/sideNavbar";
import { UseGetWishlistQuery } from "@/hooks/useGetWishlistQuery";
import Link from "next/link";
import { UseGetUserQuery } from "@/hooks/useGetUserQuery";

function Wishlist() {
    const { data, isLoading, isError } = UseGetWishlistQuery();
    //const { data: dataUser, isLoading: userLoading, isError: userError } = UseGetUserQuery();
    console.log(data)


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching wishlist</div>;
    }
/*
    if (userError) {
        return <div>Error fetching User</div>;
    } */

    const handleDelete = (id: string) => {
        console.log(`Delete wishlist with id: ${id}`);
    };

    const handleWishlistID = (id: string) => {
        localStorage.setItem("wishlistID", id);
        console.log(localStorage.getItem("wishlistID"));
    };

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
                            {
                                /* {dataUser?.map((user) => (
                                    <h1 key={user.ID}>{user.Name}</h1>
                                ))} */
                            }
                                <h1>Уолтер Митти</h1>
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
                                onClick={() => handleDelete(wishlist.id)}>
                                &times;
                            </button>
                            <Link href="/in-wishlist" onClick={() => handleWishlistID(wishlist.id)}>
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
