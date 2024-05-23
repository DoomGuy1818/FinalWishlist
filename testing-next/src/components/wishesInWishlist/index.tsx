'use client'
import styles from '@/components/wishesInWishlist/wishesInWishlist.module.scss'
import  SideNavBar from '@/components/sideNavbar/index'
import { UseGetWishesQuery } from '@/hooks/useGetWishesQuery'
import Link from "next/link";

export default function WishesInWishlist(){
    const { data } = UseGetWishesQuery();
    return(

        <div className={styles.container}>
            <div className={styles.sidebarContainer}>
                <SideNavBar/>
            </div>
            <div className={styles.wishesContainer}>
                <div className={styles.nameHolder}>
                    <a href="#" className={styles.backbutton}>Назад</a>
                    <h1>placeHolder.Name</h1>
                </div>
                <div className={styles.wishesGrid}>
                    {data?.map((wish) => (

                        <div key = {wish.id} className={styles.wishlistCard}>
                            <Link href="#">
                                <button>{wish.name}</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
