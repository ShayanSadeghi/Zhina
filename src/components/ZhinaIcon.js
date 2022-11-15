import image from "../MahsaAmini.jpg";
import styles from "../styles/ZhinaIcon.module.css";

export default function ZhinaIcon({ size }) {
  let image_style = "image_";
  if (["small", "medium", "large"].includes(size)) {
    image_style += size;
  } else {
    image_style += "small";
  }

  return (
    <div className={styles.container}>
      <img src={image} className={styles[image_style]} alt="MahsaAmini" />
    </div>
  );
}
