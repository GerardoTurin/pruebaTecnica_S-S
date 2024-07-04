"use client";
import { useState } from "react";
import styles from "./formContact.module.css";

export const FormContacto = () => {
    const [emailTouched, setEmailTouched] = useState(false);
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,    // Desparramar los valores actuales.
            [name]: value,  // Actualizar el valor que cambió.
        });
    };

    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Expresión regular para validar email.
        return re.test(email);
    };

    const handleBlur = (e) => {
        if (e.target.name === "email") {
            setEmailTouched(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(formData.email)) {
            alert("Por favor, introduce un email válido");
            return;
        }

        alert(`Mensaje enviado: ${formData.message}`);
        console.log(formData);

        // Clear form
        setFormData({
            name: "",
            email: "",
            message: "",
        });

        setEmailTouched(false);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={ handleBlur }   // Valida el email al salir del campo
                />
                {
                    emailTouched && !isValidEmail(formData.email) && (
                        <p className={styles.error}>Email inválido</p>
                    )
                }
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className={styles.input}
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>

            <button type="submit" className={styles.button}>
                Enviar
            </button>
        </form>
    );
}
