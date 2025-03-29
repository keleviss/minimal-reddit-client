import styles from "./Button.module.css";

export default function Button({ text, ...props }) {
  return (
    <button className={styles.Button} {...props}>{text}</button>
  );
}