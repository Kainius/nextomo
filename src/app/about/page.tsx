import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bp1}>min-width: 1440px ~</div>
      <div className={styles.bp2}>min-width: 1081px ~ max-width: 1440px</div>
      <div className={styles.bp3}>min-width: 721px ~ max-width: 1080px</div>
      <div className={styles.bp4}>min-width: 361px ~ max-width: 720px</div>
      <div className={styles.bp5}>~ max-width: 360px</div>
    </div>
  );
}
