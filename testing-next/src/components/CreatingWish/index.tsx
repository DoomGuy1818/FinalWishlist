'use client'
import styles from "./creatingWish.module.scss"
import SideNavBar from "@/components/sideNavbar/index"
import {UseUploadPhoto} from "@/hooks/useUploadPhoto";
import {UseCreateWishQuery} from "@/hooks/useCreateWishQuery";
import React, {useState} from 'react'
import { CreateGift } from "@/services/fetch";
import {number} from "prop-types";


export default function CreatingWish() {

    const [ formData , setFormData ] = useState(
        {
            Name: "",
            Price: 0,
            Description: "",
            Photo: "",
            Link: "",
            Category: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreateWishClick = async () => {
        try {
            await CreateGift(formData);
            console.log(formData)
            console.log("Подарок успешно создан!");

        } catch (error) {
            console.log(formData)
            console.error("Ошибка во время регистрации пользователя:", error);
        }
    };

    const PhotoUpload = () => {
        const handleFileChange = (event) => {
            const file = event.target.files[0];
            const category = localStorage.setItem("category", "selection")
        };
    };


        return(
        <div className={styles.container}>
            <div className={styles.sector}>
                <div className={styles.sideNavbar}><SideNavBar/></div>
                <div className={styles.addGift}>
                    <a href="#" className="#">Назад</a>
                    <h1 className={styles.title}>Добавить подарок</h1>

                    <div className={styles.blocklink}>
                        <span className={styles.text}>Ссылка</span>
                        <input className={styles.link} type='url' name="Link" value={formData.Link}
                               onChange={handleInputChange}></input>
                    </div>

                    <div className={styles.bigblock}>

                        <div className={styles.import}>
                            <span className={styles.text}>Фото</span>
                            <input className={styles.img} type="file" name="photo" onChange={handleInputChange}></input>
                        </div>

                        <div>
                            <div className={styles.block1}>
                                <span className={styles.text}>Название</span>
                                <input className={styles.link} type='text' name="Name" value={formData.Name} onChange={handleInputChange}></input>
                            </div>

                            <div className={styles.block2}>
                                <span className={styles.text}>Цена</span>
                                <div className={styles.price}>
                                    <input className={styles.link} type="number" name="Price" value={formData.Price} onChange={handleInputChange}></input>
                                </div>

                            </div>


                            <div className={styles.block3}>
                                <span className={styles.text}>Комментарий</span>
                                <input className={styles.link} type='text' name="Description" value={formData.Description} onChange={handleInputChange}></input>
                            </div>

                            <div className={styles.buttonBox}>
                                <button className={styles.createButton} onClick={handleCreateWishClick}>
                                    Создать!
                                </button>
                            </div>
                        </div>

                    </div>

                    </div>


                </div>
            </div>

        )

}
