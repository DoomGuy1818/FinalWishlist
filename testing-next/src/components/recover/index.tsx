import Button from "@/components/GenericButton";
import styles from "./forgot.module.scss";

export default function ForgotPasswordCard( { back, login, registration } ){
    return(
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.loginContent}>
                    <a href={ back ? back : "/nope!" } className={styles.backButton}>Назад</a>
                    <h1>Восстановление пароля</h1>
                    <div className={styles.loginInput}>
                        <span>email</span>
                        <input></input>

                    </div>
                    <Button text={ "Восстановить пароль" } />
                    <div className={styles.support}>
                        <a href={login ? login : "/nope!" } className={styles.forgotPass}>Войти</a>
                        <a href={registration? registration : "/nope!" } className={styles.register}>Зарегистрироваться</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

