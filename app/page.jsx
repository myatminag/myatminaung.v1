"use client"

import { useRef } from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import MobileNav from "@/components/navbar/MobileNav";
import Nav from "@/components/navbar/Nav";

const CustomTheme = createTheme({
    typography: {
        fontFamily: [
            "Sarabun", "sans-serif"
        ].join(",")
    }
})

const Home = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projectRef = useRef(null);

    return (
        <ThemeProvider theme={CustomTheme}>
            <Nav homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} projectRef={projectRef} />
            <MobileNav homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} projectRef={projectRef} />
            <Container maxWidth={false} sx={{ padding: 0 }}>
                <HeroSection homeRef={homeRef} />
                <AboutSection aboutRef={aboutRef} />
                <Projects projectRef={projectRef} />
                <Contact contactRef={contactRef} />
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default Home;