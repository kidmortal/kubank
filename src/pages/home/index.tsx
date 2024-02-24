import CreditCardDisplay from "../../components/CreditCardDisplay";
import styles from "./styles.module.scss";

export function HomePage() {
  return (
    <div className={styles.container}>
      <CreditCardDisplay />
    </div>
  );
}
