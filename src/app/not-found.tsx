import styles from "@/styles/not-found/not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 | Not Found</h1>
      <p className={styles.description}>This page could not be found.</p>
      <Link href="/" className={styles.button}>
        홈으로
      </Link>
    </div>
  );
}
