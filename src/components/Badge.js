import styles from "../styles/Badge.module.css";

export default function Badge({ size }) {
  const container_class = "container_" + size;
  return (
    <div className={styles[container_class]}>
      <div className={styles.top}></div>
      <div className={styles.middle}></div>
      <div className={styles.bottom}></div>
    </div>
  );
}
