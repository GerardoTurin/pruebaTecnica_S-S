import { InterestList } from "@/components";
import styles from "./interests.module.css";

export const metadata = {
    title: "Intereses",
    description: "Página de intereses",
};

export default function InterestPage() {
    return (
        <main className={styles.interests}>
            <h2 className={styles.title}>Intereses</h2>
            <InterestList />
        </main>
    );
}
