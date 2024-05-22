'use client'
import Button from "@/components/GenericButton"
import styles from "./Registration.module.scss"
import buttonStyles from "@/components/GenericButton/GenericButton.module.scss"
import React, {useState} from "react";
import {RegisterUser} from "@/services/fetch";

export default function RegistrationCard( { back, login } ) {

        const [formData, setFormData] = useState({
            Name: "",
            LastName: "Jenkins",
            Login: "",
            Birthday: "30.10.2003",
            Coins: 0,
            Password: ""
        });

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

         const handleRegisterClick = async () => {
            try {
                await RegisterUser(formData);
                console.log(formData)
                console.log("Пользователь успешно вошёл!");

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
                                <span>как вас называть?</span>
                                <input type='text' name="Name" value={formData.Name}
                                       onChange={handleInputChange}></input>

                            </div>
                            <div className={styles.loginInput}>
                                <span>email</span>
                                <input type='text' name="Login" value={formData.Login}
                                       onChange={handleInputChange}></input>

                            </div>
                            <div className={styles.passwordInput}>
                                <span>пароль</span>
                                <input id="pass" type='password' name="Password" value={formData.Password}
                                       onChange={handleInputChange}></input>
                            </div>
                            <div className={styles.passwordInput}>
                                <span>повторите пароль</span>
                                <input type="password" id="pass"></input>
                            </div>
                        </div>
                        <a href={"/profile"}>
                            <button type="button" className={buttonStyles.sellerButton}
                                    onClick={handleRegisterClick}>Зарегистрироваться
                            </button>
                        </a>

                        <div className={styles.support}>
                            <a href={login ? login : "/nope!"} className={styles.login}>Уже зарегестрированы?</a>
                        </div>
                    </div>

                </div>
            </div>
        )
}

