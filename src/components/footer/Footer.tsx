"use client";

import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contents}>
          <div className={styles.links}>
            <Link
              href={`https://www.jobsicke.xyz/`}
              // target="_blank"
              rel="noopener noreferrer"
            >
              NEXTNOVA
            </Link>
            <Link
              href={`/services/privacy/`}
              // target="_blank"
              rel="noopener noreferrer"
            >
              개인정보처리방침
            </Link>
            <Link
              href={`/services/terms/`}
              // target="_blank"
              rel="noopener noreferrer"
            >
              이용약관
            </Link>
          </div>
        </div>
        <hr className={styles.hr} />
        <p className={styles.copyright}>ⓒ 2024 Kainius. All Rights Reserved.</p>
      </div>
    </div>
  );
}
