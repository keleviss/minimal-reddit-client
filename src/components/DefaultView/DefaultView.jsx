import Posts from "../../features/Posts/Posts";
import styles from "./DefaultView.module.css";

export default function DefaultView() {
  return (
    <main style={styles.defaultView}>
      <Posts />
    </main>
  );
}