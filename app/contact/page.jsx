//import FormContacto from "@/components/formContact/FormContact";
import { FormContacto } from "@/components";
import styles from "./contact.module.css";

export const metadata = {
    title: "Contacto",
    description: "Página de contacto",

};


export default function ContactPage() {

    return (
        <main className={styles.contact}>
            <h2 className={styles.title}>Contacto</h2>
            <FormContacto />
        </main>
    );
}