import { Navbar } from "react-bootstrap";
import styles from './header.module.css'

export function Header() {
  return (
    <Navbar className={styles.header}>
      <a className={styles.link} href='/map'>Карта</a>
      <a className={styles.link} href='/'>Выход</a>
    </Navbar>
  );
}
