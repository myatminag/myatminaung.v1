"use client"

import { useRef } from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "@/components/navbar/Header";
import BottomNav from "@/components/navbar/BottomNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpSection from "@/components/ExpSection";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import ProjectSection from "@/components/ProjectSection";

const CustomTheme = createTheme({
    typography: {
        fontFamily: [
            "Sarabun", "sans-serif"
        ].join(",")
    }
})

const Home = () => {

    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projectRef = useRef(null);
    const expRef = useRef(null);

    return (
        <ThemeProvider theme={CustomTheme}>
            <Header aboutRef={aboutRef} expRef={expRef} contactRef={contactRef} projectRef={projectRef} />
            <BottomNav aboutRef={aboutRef} expRef={expRef} contactRef={contactRef} projectRef={projectRef} />
            <Container maxWidth={false} sx={{ padding: 0 }}>
                <HeroSection />
                <AboutSection aboutRef={aboutRef} />
                <ExpSection expRef={expRef} />
                <ProjectSection projectRef={projectRef} />
                <Contact contactRef={contactRef} />
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default Home;