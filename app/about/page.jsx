import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
    title: "Acerca de Nosotros",
    description: "Página de información sobre nosotros",
};

export default function AboutPage() {
    return (
        <main className={styles.about}>
            <h2 className={styles.title}>About Me</h2>
            <section className={styles.hero}>
                <Image src="/perfil.jpeg" alt="Usuario" width={300} height={300} className={styles.photo} />
                <div className={styles.description}>
                    <p>
                        Full Stack Developer con experiencia en diseño, desarrollo y mantenimiento de aplicaciones web. Dominio de lenguajes y frameworks en el entorno web, principalmente <strong> HTML/CSS, JavaScript, React, Node.js, Express, MongoDB, Git, GitHub,</strong> entre otros.
                    </p>
                    <p>
                        Capaz de gestionarme eficazmente siendo un aprendiz rápido, proactivo y comprometido durante proyectos freelance, así como en colaborar con un equipo de trabajo para lograr los objetivos.
                    </p>
                </div>
            </section>
        </main>
    );
}
