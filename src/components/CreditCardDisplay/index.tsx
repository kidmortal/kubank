import { useState } from "react";
import styles from "./styles.module.scss";
import { When } from "../When";

export default function CreditCardDisplay() {
  const [loading, setLoading] = useState(true);
  return (
    <div className={styles.container}>
      <When value={!loading}>
        <div className={styles.cardBalanceContainer}>
          <span>$1.924,35</span>
        </div>

        <div className={styles.cardInfoContainer}>
          <strong>5489 7654 3210 7894</strong>
          <span>04/24</span>
        </div>
      </When>

      <img
        alt="creditCardImage"
        src="assets/card.png"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
