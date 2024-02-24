import CreditCardDisplay from "../../components/CreditCardDisplay";
import styles from "./styles.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <CreditCardDisplay />
    </div>
  );
}
