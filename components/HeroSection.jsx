"use client";

import { useRouter } from "next/navigation";

import ResumeIcon from "./icons/ResumeIcon";
import AnimationLottie from "@/lib/animation";

const HeroSection = ({ homeRef }) => {

    const router = useRouter();

    return (
        <section ref={homeRef} className="lg:pb-0 lg:px-[15%]">
            <div className="max-w-[1240px] min-h-[90vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div className="w-[100%] lg:flex lg:items-center lg:justify-evenly">
                    <div className="block lg:hidden">
                        <AnimationLottie />
                    </div>
                    <div>
                        <p className="mb-3 text-[#acd7ff]"> 
                            Welcome, my name is
                        </p>
                        <p className="mb-3 text-[#acd7ff] font-semibold text-[1.6rem] xl:text-[2.4rem] 2xl:text-[3.2rem]">
                            Myat Min Aung
                        </p>
                        <p className="mb-3 font-semibold text-primaryColor text-[1.6rem] xl:text-[2.4rem] 2xl:text-[3.2rem]">
                            A Full-stack Web Developer
                        </p>     
                        <p className="mb-3 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] xl:text-[1.1rem] 2xl:text-[1.5rem]">
                            I build awesome things for the web specializing in <span className="text-primaryColor">Reactjs</span> & {" "}
                            <span className="text-primaryColor">Nextjs </span>
                            for the frontend and <span className="text-primaryColor">Nodejs</span> & {" "}
                            <span className="text-primaryColor">Expressjs</span> for the backend.
                        </p>             
                        <p className="mb-6 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] xl:text-[1.1em] 2xl:text-[1.5rem]">
                            Currently, I am focusing on frontend development for building incredible eCommerces at {" "}
                            <a 
                                target="_blank" 
                                rel="noreferrer"
                                href="https://www.shopdoora.com/web-view-buy-app"
                                style={{ color: "#5de4c7", cursor: "pointer", fontWeight: 400 }}
                            >
                                Shopdoora
                            </a>.
                        </p>  
                        <button 
                            onClick={() => router.push("/resume.pdf")}
                            className="btn"
                        >
                            {/* <ResumeIcon /> */}
                            <p>
                                My Resume
                            </p>
                        </button>
                    </div>
                    <div className="w-[380px] hidden lg:block">
                        <AnimationLottie />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;