import Logo from "../../assets/logo.jpg";

import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.container}>
    <img src={Logo} alt="logo" className={styles.logo} />
    <h2 className={styles.title}>Ставки - наше все</h2>
  </header>
);
