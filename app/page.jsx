"use client"

import { useRef, Fragment, useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import Header from "@/components/Header";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ExpSection from "@/components/section/ExpSection";
import ContactSection from "@/components/section/ContactSection";
import ProjectSection from "@/components/section/ProjectSection";
import ScrollToTop from "@/components/ScrollToTop";
import SocialMedia from "@/components/SocialMedia";
import Loader from "@/components/Loader";

const Home = () => {

    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const projectRef = useRef(null);
    const expRef = useRef(null);

    useEffect(() => {
        Aos.init({
            offset: 50
        })
    }, [])

    return (
        <Fragment>
            <Loader>Develop & Innovate</Loader>
            <Header aboutRef={aboutRef} expRef={expRef} contactRef={contactRef} projectRef={projectRef} />
            <SocialMedia />
            <main className="px-4 lg:px-0">
                <ScrollToTop />
                <HeroSection aboutRef={aboutRef} />
                <AboutSection aboutRef={aboutRef} />
                <ExpSection expRef={expRef} />
                <ProjectSection projectRef={projectRef} />
                <ContactSection contactRef={contactRef} />
            </main>
        </Fragment>
    );
}

export default Home;