import HotPosts from "../../features/HotPosts/HotPosts";
import MainPosts from "../../features/MainPosts/MainPosts";
import styles from "./DefaultView.module.css";

export default function DefaultView() {
  return (
    <main style={styles.defaultView}>
      <HotPosts />
      <MainPosts />
    </main>
  );
}