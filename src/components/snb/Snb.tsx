import styles from "./Snb.module.css";

interface SnbProps {
  isOpen: boolean;
  toggleSnb: (event: React.MouseEvent) => void;
}

export default function SNB({ isOpen, toggleSnb }: SnbProps) {
  return (
    <>
      {isOpen && (
        <div
          className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
          onClick={toggleSnb}
        ></div>
      )}
      <div className={`${styles.snb} ${isOpen ? styles.snbOpen : ""}`}>
        <div className={styles.content}>
          <h2>메뉴</h2>
          <button className={styles.closeButton} onClick={toggleSnb}>
            ✕
          </button>
        </div>
        <hr className={styles.hr} />
        <nav className={styles.nav}>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </>
  );
}
