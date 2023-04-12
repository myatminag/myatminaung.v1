"use client"

import { useRef } from "react";

import Header from "@/components/navbar/Header";
import BottomNav from "@/components/navbar/BottomNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpSection from "@/components/ExpSection";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import ProjectSection from "@/components/ProjectSection";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {

    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projectRef = useRef(null);
    const expRef = useRef(null);

    return (
        <>
            <Header aboutRef={aboutRef} expRef={expRef} contactRef={contactRef} projectRef={projectRef} />
            <BottomNav aboutRef={aboutRef} expRef={expRef} contactRef={contactRef} projectRef={projectRef} />
            <main className="px-4 lg:px-0">
                <ScrollToTop />
                <HeroSection aboutRef={aboutRef} />
                <AboutSection aboutRef={aboutRef} />
                <ExpSection expRef={expRef} />
                {/* <ProjectSection projectRef={projectRef} /> */}
                {/* <Contact contactRef={contactRef} /> */}
            </main>
            {/* <Footer /> */}
        </>
    );
}

export default Home;