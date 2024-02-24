import styles from "./styles.module.scss";

export default function CreditCardDisplay() {
  return (
    <div className={styles.container}>
      <div className={styles.cardBalanceContainer}>
        <span>$1.924,35</span>
      </div>

      <div className={styles.cardInfoContainer}>
        <strong>5489 7654 3210 7894</strong>
        <span>04/24</span>
      </div>

      <img alt="creditCardImage" src="assets/card.png" />
    </div>
  );
}
