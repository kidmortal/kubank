import styles from "./styles.module.scss";
import Home from "../../assets/home.png";
import Bookmark from "../../assets/bookmark.png";
import Add from "../../assets/add.png";
import Notification from "../../assets/notification.png";
import Profile from "../../assets/profile.png";
import { Link } from "react-router-dom";

export function FloatingBottomMenu() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img alt="home" src={Home} />
      </Link>
      <img alt="bookmark" src={Bookmark} />
      <img alt="add" src={Add} />
      <img alt="notification" src={Notification} />
      <Link to="/profile">
        <img alt="profile" src={Profile} />
      </Link>
    </div>
  );
}
