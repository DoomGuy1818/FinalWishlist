'use client'
import Button from "@/components/GenericButton"
import styles from "./Registration.module.scss"
import buttonStyles from "@/components/GenericButton/GenericButton.module.scss"
import React, { useState } from "react";
import { RegisterUser } from "@/services/fetch";

export default function RegistrationCard({ back, login }) {
    const [formData, setFormData] = useState({
        Name: "",
        LastName: "Jenkins",
        Login: "",
        Birthday: "30.10.2003",
        Coins: 0,
        Password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegisterClick = async () => {
        try {
            await RegisterUser(formData);
            console.log(formData)
            console.log("Пользователь успешно зарегистрирован!");
        } catch (error) {
            console.log(formData)
            console.error("Ошибка во время регистрации пользователя:", error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.loginContent}>
                    <a href={back ? back : "/nope!"} className={styles.backButton}>Назад</a>
                    <h1>Регистрация</h1>
                    <div className={styles.formInputs}>
                        <div className={styles.loginInput}>
                            <span>Как вас называть?</span>
                            <input type="text" name="Name" value={formData.Name} onChange={handleInputChange} />
                        </div>
                        <div className={styles.loginInput}>
                            <span>Email</span>
                            <input type="email" name="Login" value={formData.Login} onChange={handleInputChange} />
                        </div>
                        <div className={styles.passwordInput}>
                            <span>Пароль</span>
                            <input type="password" name="Password" value={formData.Password} onChange={handleInputChange} />
                        </div>
                        <div className={styles.passwordInput}>
                            <span>Повторите пароль</span>
                            <input type="password" />
                        </div>
                    </div>
                    <button type="button" className={buttonStyles.sellerButton} onClick={handleRegisterClick}>
                        Зарегистрироваться
                    </button>
                    <div className={styles.support}>
                        <a href={login ? login : "/nope!"} className={styles.login}>Уже зарегистрированы?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
