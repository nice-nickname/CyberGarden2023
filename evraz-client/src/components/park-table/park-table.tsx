import { ParkRow } from "./park-row";
import styles from "./park-table.module.css";

export function ParkTable() {
  const a = [1, 1, 1, 1, 1, 1, 1];

  return (
    <div className={styles.table}>
      <div className={styles.table__header}>
        <p className={styles.table__name}>Парк "П"</p>
      </div>
      {a.map((a, index) => (
        <ParkRow id={index} />
      ))}
    </div>
  );
}
