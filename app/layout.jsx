import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Prueba NextJS",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    
    return (
        <html lang="es">
            <body className={inter.className}>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
