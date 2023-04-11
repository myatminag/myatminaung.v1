"use client";

import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ResumeIcon from "./icons/ResumeIcon";
import AnimationLottie from "@/lib/animation";

const HeroSection = ({ homeRef }) => {

    const router = useRouter();

    return (
        <section ref={homeRef} className="lg:pb-0 lg:px-[15%]">
            <div className="max-w-[1240px] min-h-[90vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div className="block lg:hidden">
                    <AnimationLottie />
                </div>
                <div className="">
                    <p className="mb-2 text-[#acd7ff]"> 
                        Welcome, my name is
                    </p>
                    <p className="mb-2 text-white font-semibold text-[1.6rem] xl:text-[2.4rem] 2xl:text-[3.2rem]">
                        Myat Min Aung
                    </p>
                    <p className="mb-2 font-semibold text-[#5de4c7] text-[1.6rem] xl:text-[2.4rem] 2xl:text-[3.2rem]">
                        A Full-stack Web Developer
                    </p>     
                    <p className="mb-2 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] xl:text-[1.1rem] 2xl:text-[1.5rem]">
                        I build awesome things for the web specializing in Reactjs & Nextjs 
                        for the frontend and Nodejs & Expressjs for the backend.
                    </p>             
                    <p className="mb-6 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] xl:text-[1.1em] 2xl:text-[1.5rem]">
                        Currently, I am focusing on frontend development for building incredible eCommerces at {" "}
                        <a 
                            target="_blank" 
                            rel="noreferrer"
                            href="https://www.shopdoora.com/web-view-buy-app"
                            style={{ color: "#5de4c7", cursor: "pointer" }}
                        >
                            Shopdoora
                        </a>.
                    </p>  
                    <button 
                        onClick={() => router.push("/resume.pdf")}
                        className="flex items-center gap-x-1 px-4 py-2 border rounded-md border-[#5de4c7]"
                    >
                        <ResumeIcon />
                        <p className="text-[#5de4c7]">
                            Resume
                        </p>
                    </button>
                </div>
                <div className="w-[380px] hidden lg:block">
                    <AnimationLottie />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;