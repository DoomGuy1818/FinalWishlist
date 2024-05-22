'use client'
import React from 'react';
import styles from './wishlist.module.scss';
import SideNavbar from '../sideNavbar/index';
import WishlistCard from '../WishlistCard/index';
import Image from "next/image";
 import { UseGetWishesQuery } from "@/hooks/useGetWishesQuery";
import {useQuery} from "@tanstack/react-query";
import {fetchWishes} from "@/services/fetch";


export default function CreatingWish() {
    const {data} = UseGetWishesQuery();
    return (
        <div className={styles.container}>
            <div className={styles.sector}>
                <div className={styles.sideNavbar}><SideNavbar /></div>
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Вишлист</h1>
                        <button className={styles.addButton}><a href = "/create-wish">добавить подарок</a></button>
                        <div className={styles.shareButton}>

                            <span className={styles.shareTxt}>поделиться</span>
                        </div>
                    </div>
                    <div className={styles.giftList}>
                        {data?.map((item) => (
                            <WishlistCard key = {item.id}
                                imgSrc="/images/mainCard.svg"
                                title={item.name}
                                price={(item.price).toString()}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}