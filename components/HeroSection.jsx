"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import MouseIcon from "./icons/MouseIcon";
import { scrollToSection } from "@/utils/scrollToSection";


const HeroSection = ({ homeRef, aboutRef }) => {

    return (
        <section ref={homeRef} className="section-padding relative">
            <div className="hidden lg:block lg:absolute lg:bottom-14 lg:left-[50%] lg:translate-x-[-50%]">
                <motion.div 
                    onClick={() => scrollToSection(aboutRef)}
                    className="lg:flex lg:flex-col lg:items-center lg:gap-y-0 lg:cursor-pointer"
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    initial={{ y: "16px" }}
                    animate={{ y: "-16px" }}
                    exit={{ y: "16px" }}
                >
                    <MouseIcon />
                    <p className="text-[#acd7ff] text-sm">
                        Scroll
                    </p>
                </motion.div>
            </div>
            <div className="container">
                <div className="w-[100%] lg:flex lg:items-center lg:justify-evenly">
                    <div 
                        className="block lg:hidden"
                        data-aos="fade-up" 
                        data-aos-delay="900"
                        data-aos-duration="1000"
                    >
                        <Image 
                            src="/ImageOne.png"
                            alt="hero-section-img"
                            width={500}
                            height={500}
                            className="scale-75"
                        />
                    </div>
                    <div
                        data-aos="fade-up" 
                        data-aos-delay="900"
                        data-aos-duration="1100"
                    >
                        <p className="mb-3 text-primaryTextColor font-light"> 
                            Welcome, my name is
                        </p>
                        <p className="mb-3 secondary-text">
                            Myat Min Aung
                        </p>
                        <p className="mb-3 primary-text">
                            A Full-stack Developer
                        </p>     
                        <p className="mb-3 lg:w-[550px] 2xl:w-[650px] default-text">
                            I build awesome things for the web specializing in {" "}
                            <span className="text-primaryColor">Reactjs</span> & {" "}
                            <span className="text-primaryColor">Nextjs </span>
                            for the frontend and {" "}
                            <span className="text-primaryColor">Nodejs</span> & {" "}
                            <span className="text-primaryColor">Expressjs</span> for the backend.
                        </p>             
                        <p className="mb-6 lg:w-[550px] 2xl:w-[650px] default-text">
                            Currently, I am focusing on frontend development for building incredible eCommerces at {" "}
                            <Link 
                                target="_blank" 
                                rel="noreferrer"
                                href="https://www.shopdoora.com/web-view-buy-app"
                                style={{ color: "#5de4c7", cursor: "pointer", fontWeight: 300 }}
                            >
                                Shopdoora
                            </Link>.
                        </p>  
                        <Link 
                            target="__blank"
                            href="/resume.pdf"
                            className="btn"
                        >
                            <p>
                                My Resume
                            </p>
                        </Link>
                    </div>
                    <div className="w-[380px] hidden lg:block">
                        <Image 
                            src="/ImageOne.png"
                            alt="hero-section-img"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;