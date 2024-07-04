"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { ThreeBarsIcon, XIcon } from "@primer/octicons-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Interests", href: "/interests" },
    { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <Link href={"/"} className={styles.linkHome}>
                <span>Gerardo Turin</span>
                <Image src="/perfil.jpeg" alt="Logo" width={50} height={50} className={styles.perfil} />
            </Link>

            {/* Menu Button mobile */}
            <button className={styles.menuButton} onClick={toggleMenu}>
                {menuOpen ? <XIcon size={24} /> : <ThreeBarsIcon size={24} />}
            </button>

            {/* Links desktop */}
            <ul className={styles.navLinks}>
                {navItems.map((item, index) => (
                    <li key={index} className={styles.navItem}>
                        <Link href={item.href} className={`${styles.link} ${pathname === item.href ? styles.linkActive : ""}`}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Links mobile */}
            {menuOpen && (
                <ul className={styles.mobileNavLinks}>
                    {navItems.map((item, index) => (
                        <li key={index} className={styles.navItem}>
                            <Link href={item.href} className={`${styles.link} ${pathname === item.href ? styles.linkActive : ""}`} onClick={toggleMenu}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
