import styles from "./Header.module.scss"

export default function Header({ text }) {
  return (
    <div>
	<p className={styles.header}>{text ? text : "Header"}</p>
    </div>
  );
}
