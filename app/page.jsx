"use client"

import { useRef } from "react";

import Header from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

const Home = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projectRef = useRef(null);

    return (
        <>
            <Header homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} projectRef={projectRef} />
            <>
                <Hero homeRef={homeRef} />
                <About aboutRef={aboutRef} />
                <Projects projectRef={projectRef} />
                <Contact contactRef={contactRef} />
            </>
            <Footer />
        </>
    );
}

export default Home;