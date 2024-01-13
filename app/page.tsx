import damas from "./imageneslanding/damas.jpg";
import caballeros from "./imageneslanding/caballeros.jpg";
import niños from "./imageneslanding/niños.jpg";
import styles from "./logos.module.css";
import logo from "./imageneslanding/maryologo.jpg"

export default function Home() {
  return (
    <div>
      <div className={styles.logo}>
        <img src={logo.src} alt="" />
      </div>
      <div className={styles.categoriesContainer}>
        <div className={styles.category}>
          <img src={damas.src} alt="damas" />
          <h2 className={styles.centeredText}>DAMAS</h2>
        </div>
        <div className={styles.category}>
          <img src={caballeros.src} alt="caballeros" />
          <h2 className={styles.centeredText}>CABALLEROS</h2>
        </div>
        <div className={styles.category}>
          <img src={niños.src} alt="niños" />
          <h2 className={styles.centeredText}>INFANTIL</h2>
        </div>
      </div>
      <br />
    </div>
  );
}