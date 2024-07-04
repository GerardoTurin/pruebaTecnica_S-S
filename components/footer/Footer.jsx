import Link from "next/link";
import styles from "./footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Gerardo Turin &copy; 2024</p>
            <ul className={styles.socials}>
                <li>
                    <Link href="https://www.linkedin.com/in/gerardo-turin" target="_blank" rel="noopener noreferrer" className={styles.socialsItem} alt="Linkedin">
                        <FaLinkedin size={24} color="#0077b5" />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/GerardoTurin" target="_blank" rel="noopener noreferrer" className={styles.socialsItem} alt="Github">
                        <FaGithub size={24} color="black" />
                    </Link>
                </li>
            </ul>
        </footer>
    )
}
