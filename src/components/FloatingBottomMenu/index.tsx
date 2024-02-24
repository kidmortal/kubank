import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

export function FloatingBottomMenu() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img alt="home" src="assets/home.png" />
      </Link>
      <img alt="bookmark" src="assets/bookmark.png" />
      <img alt="add" src="assets/add.png" />
      <img alt="notification" src="assets/notification.png" />
      <Link to="/profile">
        <img alt="profile" src="assets/profile.png" />
      </Link>
    </div>
  );
}
