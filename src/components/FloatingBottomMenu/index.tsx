import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

export function FloatingBottomMenu() {
  return (
    <div className={styles.container}>
      <Link to="/" replace>
        <img alt="home" src="assets/home.png" />
      </Link>
      <Link to="/bookmark" replace>
        <img alt="bookmark" src="assets/bookmark.png" />
      </Link>
      <Link to="/add" replace>
        <img alt="add" src="assets/add.png" />
      </Link>
      <Link to="/notification" replace>
        <img alt="notification" src="assets/notification.png" />
      </Link>
      <Link to="/profile" replace>
        <img alt="profile" src="assets/profile.png" />
      </Link>
    </div>
  );
}
