import styles from "./styles.module.scss";

import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "../../assets/Home";
import { BookmarkIcon } from "../../assets/Bookmark";
import { NotificationIcon } from "../../assets/Notification";
import { ProfileIcon } from "../../assets/Profile";

export function FloatingBottomMenu() {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <Link to="/" replace>
        <HomeIcon color={location.pathname === "/" ? "#49baff" : undefined} />
      </Link>
      <Link to="/bookmark" replace>
        <BookmarkIcon
          color={location.pathname === "/bookmark" ? "#49baff" : undefined}
        />
      </Link>
      <Link to="/add" replace>
        <img alt="add" src="assets/Add.png" />
      </Link>
      <Link to="/notification" replace>
        <NotificationIcon
          color={location.pathname === "/notification" ? "#49baff" : undefined}
        />
      </Link>
      <Link to="/profile" replace>
        <ProfileIcon
          color={location.pathname === "/profile" ? "#49baff" : undefined}
        />
      </Link>
    </div>
  );
}
