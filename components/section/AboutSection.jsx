import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { RoughNotation } from "react-rough-notation";

const AboutSection = ({ aboutRef }) => {

    const [showNotation, setShowNotation] = useState(false);

    return (
        <section ref={aboutRef} className="pt-[4rem] lg:pt-0 lg:px-[15%]">
            <div className="max-w-[1240px] lg:min-h-[100vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    className="w-[100%] lg:flex lg:items-center lg:justify-evenly"
                >
                    <div className="block lg:hidden">
                        <Image 
                            src="/ImageTwo.png"
                            alt="hero-section-img"
                            width={500}
                            height={500}
                            className="scale-75"
                        />
                    </div>
                    <div>
                        <RoughNotation
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            animate={true}
                            animationDelay={1000}
                            animationDuration={1000}
                            type="underline"
                            show={true}
                            color="#acd7ff"
                            padding={0}
                        >
                            <header className="mb-4 text-primaryColor font-semibold text-[1.6rem]">
                                About Me?
                            </header>
                        </RoughNotation>
                        <p className="mb-3 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] font-light">
                            Hi, I am Myat Min Aung. I am a Full-stack Web Developer from Yangon, Myanmar.
                        </p>
                        <p className="mb-3 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] font-light">
                            Currently, I am specializing in mern-stack development and I have a serious passion for 
                            developing dynamic user experiences and creating intuitive.
                        </p>
                        <p className="mb-3 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] font-light">
                            Back to a few year, I began to interest in web development with scratch when I firstly learned about 
                            programming at CS50 course. After learning over a year, I have a dab hand at both frontend and 
                            backend development.
                        </p>             
                        <p className="mb-3 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] font-light">
                            Interesting in the entire web standards spectrum, I like to develop on ambititous projects with 
                            positive people over the course of my life and career.
                        </p>
                        <Link href="mailto:myatminaung.dev@gmail.com" 
                            className="mb-2 lg:w-[550px] 2xl:w-[650px] text-primaryColor font-light"
                        >
                            {"Let's"} build something special...
                        </Link>
                    </div>
                    <div className="w-[380px] hidden lg:block">
                        <Image 
                            src="/ImageTwo.png"
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

export default AboutSection;