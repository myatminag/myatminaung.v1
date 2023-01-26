"use client"

import "./globals.css";

import Header from "../components/navbar";
import Footer from "../components/footer";

const RootLayout = ({ children }) => {  

    return (
        <html lang="en">
            <body>
                <Header />
                <main>
                    { children }
                </main>
                <Footer />
            </body>
        </html>
    );
} 

export default RootLayout;