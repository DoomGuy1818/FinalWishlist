'use client'
import styles from "./login.module.scss"
import React, { useState } from "react";
import { LoginUser } from "@/services/fetch";
import buttonStyles from "@/components/GenericButton/GenericButton.module.scss";

export default function LoginCard( { back, pass, registration, recover } ){

    const [formData, setFormData] = useState({
        login: "",
        password: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUserID = (id : string) => {
        localStorage.setItem("userID", id);
        console.log(localStorage.getItem("userID"))
        return(localStorage.getItem("userID"))
    }

    const handleLoginClick = async () => {
        try {
            
            const userID = await LoginUser(formData);
            console.log(formData)
            console.log("Пользователь успешно вошёл!");
            handleUserID (userID.ID)

        } catch (error) {
            console.log(formData)
            console.error("Ошибка во время входа пользователя:", error);
        }
    };

      

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.loginContent}>
                    <a href={back ? back : '/nope!'} className={styles.backButton}>Назад</a>
                    <h1>Вход</h1>
                    <div className={styles.loginInput}>
                        <span>логин</span>
                        <input type="text" name="login" value={formData.login} onChange={handleInputChange} />
                    </div>
                    <div className={styles.passwordInput}>
                        <span>пароль</span>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                    </div>
                    <a href={pass? pass : "/nope!"}>
                        <button type="button" className={buttonStyles.sellerButton} onClick={handleLoginClick}>Войти без данных</button>
                    </a>
                    <div className={styles.support}>
                        <a href={recover ? recover : '/nope!'} className={styles.forgotPass}>Забыли пароль?</a>
                        <a href={registration ? registration : '/nope!'} className={styles.register}>Зарегистрироваться</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
