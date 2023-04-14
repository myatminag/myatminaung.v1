"use client"

import { useRef } from "react";

import Header from "@/components/Header";
import BottomNav from "@/components/navbar/BottomNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpSection from "@/components/ExpSection";
import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectSection";
import ScrollToTop from "@/components/ScrollToTop";
import SocialMedia from "@/components/SocialMedia";
import Loader from "@/components/Loader";

const Home = () => {

    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projectRef = useRef(null);
    const expRef = useRef(null);

    return (
        <>
            <Loader>Develop & Innovate</Loader>
            <Header aboutRef={aboutRef} expRef={expRef} contactRef={contactRef} projectRef={projectRef} />
            {/* <BottomNav aboutRef={aboutRef} expRef={expRef} contactRef={contactRef} projectRef={projectRef} /> */}
            <SocialMedia />
            <main className="px-4 lg:px-0">
                <ScrollToTop />
                <HeroSection aboutRef={aboutRef} />
                <AboutSection aboutRef={aboutRef} />
                <ExpSection expRef={expRef} />
                <ProjectSection projectRef={projectRef} />
                <ContactSection contactRef={contactRef} />
            </main>
        </>
    );
}

export default Home;