import React from "react";
import styles from "./styles.module.scss";

export default function PageLayout(props: { children: React.ReactNode }) {
  return <div className={styles.container}>{props.children}</div>;
}
