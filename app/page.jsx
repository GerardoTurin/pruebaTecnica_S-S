import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
    return (
        <main className={styles.home}>
            <section className={styles.hero}>
                <Image src="/perfil.jpeg" alt="Usuario" width={300} height={300} className={styles.photo} />
                <h1 className={styles.title}>Hola, soy Gerardo Turin</h1>
                <span className={styles.role}>Full Stack Developer</span>
            </section>
        </main>
    );
}
