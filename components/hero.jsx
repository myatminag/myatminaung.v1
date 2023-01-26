/* eslint-disable react/no-unescaped-entities */
"use client";

import SocialMedia from "@/components/social";
import AnimationLottie from "@/lib/animation";

const Hero = () => {
    return (
        <section id="hero" className="w-full px-3 py-[10%] lg:h-screen lg:pb-0 lg:pt-[5%] lg:px-[15%]">
            <div className="max-w-[1240px] w-full h-full lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div className="block lg:hidden">
                    <AnimationLottie />
                </div>
                <div className="">
                    <p className="mb-4 text-[#7392b7]"> 
                        Welcome, my name is
                    </p>
                    <p className="mb-4 text-white font-semibold text-2xl lg:mb-4 lg:text-5xl">
                        Myatmin Aung
                    </p>
                    <p className="mb-4 font-semibold text-white text-2xl lg:text-3xl">
                        A Full-stack Web Developer
                    </p>     
                    <p className="mb-2 lg:w-[550px] text-gray">
                        I'm passionate about web standards and developing user-friendly website &
                        web applications.
                    </p>             
                    <p className="mb-6 lg:w-[550px] text-gray">
                        I'm specializing in reactjs & nextjs for frontend and 
                        nodejs & expressjs for backend.
                    </p>  
                    <SocialMedia />
                </div>
                <div className="w-[350px] hidden lg:block lg:ml-auto">
                    <AnimationLottie />
                </div>
            </div>
        </section>
    );
}

export default Hero;