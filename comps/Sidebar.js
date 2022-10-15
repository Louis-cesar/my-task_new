import styles from "./sidebar.module.css";
import Link from "next/link";
const Sidebar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuTitle}>
        <li className={styles.list}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/list">
            <a>Number</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
