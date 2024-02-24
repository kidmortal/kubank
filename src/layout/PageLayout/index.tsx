import React from "react";
import styles from "./styles.module.scss";
import { FloatingBottomMenu } from "../../components/FloatingBottomMenu";

export default function PageLayout(props: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      {props.children}
      <div className={styles.floatingBottomContainer}>
        <FloatingBottomMenu />
      </div>
    </div>
  );
}
