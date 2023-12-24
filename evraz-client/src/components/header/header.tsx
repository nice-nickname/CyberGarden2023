import { Container, Nav, Navbar } from "react-bootstrap";
import styles from './header.module.css'
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Navbar className={styles.header}>
      <a className={styles.link} href='/'>Карта</a>
      <a className={styles.link} href='/login'>Авторизация</a>
    </Navbar>
  );
}
