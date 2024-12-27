"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import SNB from "../snb/Snb";

export default function Header() {
  const [isSnbOpen, setIsSnbOpen] = useState(false);

  const toggleSnb = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsSnbOpen(!isSnbOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.Headerlogo}>
          <Image
            src="/favicon/favicon-256.ico"
            alt="logo"
            width={32}
            height={32}
          />
          NEXTOMO
        </Link>
        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/auth/login">Login</Link>
        </div>
        <div className={styles.menu} onClick={toggleSnb}>
          <Image src="/icons/menu.svg" alt="menu" width={32} height={30} />
        </div>
      </div>

      <SNB isOpen={isSnbOpen} toggleSnb={toggleSnb} />
    </div>
  );
}
