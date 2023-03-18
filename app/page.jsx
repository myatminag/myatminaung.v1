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

const Home = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projectRef = useRef(null);

    return (
        <>
            {/* <Header homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} projectRef={projectRef} /> */}
            <MobileNav />
            <Container maxWidth={"sm"}>
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