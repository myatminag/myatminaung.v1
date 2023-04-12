import Image from "next/image";

import profilePic from "@/assets/myProfile.jpeg"; 
import AnimateHeading from "./AnimateHeading";
import AnimationLottie from "@/lib/animation";

const AboutSection = ({ aboutRef }) => {
    return (
        <section ref={aboutRef} className="lg:pb-0 lg:px-[15%]">
            <div className="max-w-[1240px] min-h-[100vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div className="w-[100%] lg:flex lg:items-center lg:justify-evenly">
                    <div className="block lg:hidden">
                        <AnimationLottie />
                    </div>
                    <div>
                        <header className="mb-4 text-[2rem] font-[600] text-primaryColor">
                            About Me?
                        </header>
                        <p className="mb-3 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] xl:text-[1.1rem] 2xl:text-[1.5rem]">
                            Hi, I am Myat Min Aung. I am a Full-stack Web Developer from Yangon, Myanmar. I have serious 
                            a passion for developing dynamic user experiences and creating intuitive.
                        </p>
                        <p className="mb-3 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] xl:text-[1.1rem] 2xl:text-[1.5rem]">
                            Back to a few year, I began to interest in web development with scratch when I firstly learned about 
                            programming at CS50 course. After learning over a year, I have a dab hand at both frontend and 
                            backend development.
                        </p>             
                        <p className="mb-2 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] xl:text-[1.1rem] 2xl:text-[1.5rem]">
                            Interesting in the entire web standards spectrum, I like to develop on ambititous projects with 
                            positive people over the course of my life and career.
                        </p>
                        <p className="mb-2 lg:w-[550px] 2xl:w-[650px] text-primaryColor xl:text-[1.1rem] 2xl:text-[1.5rem]">
                            {"Let's"} build something special...
                        </p>
                    </div>
                    <div className="w-[380px] hidden lg:block">
                        <AnimationLottie />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;