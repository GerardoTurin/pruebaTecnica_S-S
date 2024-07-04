"use client";
import { useState } from "react";
import styles from "./interestList.module.css";

export const InterestList = () => {

    const [newInterest, setNewInterest] = useState("");
    const [interests, setInterests] = useState([
        "Desarrollo Web",
        "Programación",
        "Videojuegos",
        "Deportes"
    ]);
    

    const handleAddInterest = (e) => {
        e.preventDefault();

        if (newInterest.trim() !== "") {
            setInterests([...interests, newInterest]);
            setNewInterest("");
        }
    };

    return (
        <section className={styles.addInterestSection}>

            <form onSubmit={ handleAddInterest } className={styles.form}>
                <input
                    type="text"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    className={styles.input}
                    placeholder="Nuevo Interés"
                    />

                <button type="submit" className={styles.button}>
                    Agregar
                </button>
            </form>
            <ul>
                {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </section>
    );
}
