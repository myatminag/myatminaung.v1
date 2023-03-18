"use client"

import { useRef } from "react";
import Container from "@mui/material/Container";

import Header from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import MobileNav from "@/components/navbar/MobileNav";
import Nav from "@/components/navbar/Nav";

const Home = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projectRef = useRef(null);

    return (
        <>
            <Nav homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} projectRef={projectRef} />
            <MobileNav homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} projectRef={projectRef} />
            <Container maxWidth={false}>
                <Hero homeRef={homeRef} />
                <About aboutRef={aboutRef} />
                <Projects projectRef={projectRef} />
                <Contact contactRef={contactRef} />
            </Container>
            <Footer />
        </>
    );
}

export default Home;