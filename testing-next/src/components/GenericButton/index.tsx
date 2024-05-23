import styles from "./GenericButton.module.scss"

export default function Button({ text, onClick }) {
  return (
    <button type="button" className={styles.sellerButton}>{text ? text : "Button"}  {onClick? onClick : ""}</button>
  );
}
