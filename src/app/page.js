import Image from "next/image";
import styles from "./page.module.css";
import Poliwag from "./components/Poliwag";

export default function Home() {
  return (
    <main className={styles.main}>
     <Poliwag/>
    </main>
  );
}
