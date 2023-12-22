import classNames from "classnames";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <p className={classNames(styles.header__btn)}>АРМ дежурного по станции</p>
      <p className={classNames(styles.header__btn, styles.header__btn_disabled)}>Журнал операций</p>
    </div>
  );
}
