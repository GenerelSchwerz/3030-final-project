import Link from 'next/link';
import styles from "./header.module.css";

export default function header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="./">My project!</Link>
      </h1>
      <ul className={styles.headerSelection}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}
