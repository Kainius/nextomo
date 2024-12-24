"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="#1">이것은</Link>
          <Link href="#2">반응형</Link>
          <Link href="#3">링크</Link>
          <Link href="#4">입니다</Link>
        </div>
        <div className={styles.innerwrapper}>
          <Link href="/" className={styles.Headerlogo}>
            <Image
              src="/favicon/favicon-256.ico"
              alt="logo"
              width={50}
              height={50}
            />
            NEXTOMO
          </Link>
          <div className={styles.menu}>
            <Image src="/icons/menu.svg" alt="menu" width={32} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
