import Link from "next/link";
import Lottie from "./Lottie";

const AboutSection = ({ aboutRef }) => {
    return (
        <section ref={aboutRef} className="pt-[4rem] lg:pt-0 lg:px-[15%]">
            <div className="max-w-[1240px] lg:min-h-[100vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div className="w-[100%] lg:flex lg:items-center lg:justify-evenly">
                    {/* <div className="block lg:hidden">
                        <Lottie />
                    </div> */}
                    <div>
                        <header className="mb-4 text-primaryColor font-semibold text-[1.6rem]">
                            About Me?
                        </header>
                        <p className="mb-3 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] font-light">
                            Hi, I am Myat Min Aung. I am a Full-stack Web Developer from Yangon, Myanmar. I have serious 
                            a passion for developing dynamic user experiences and creating intuitive.
                        </p>
                        <p className="mb-3 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] font-light">
                            Back to a few year, I began to interest in web development with scratch when I firstly learned about 
                            programming at CS50 course. After learning over a year, I have a dab hand at both frontend and 
                            backend development.
                        </p>             
                        <p className="mb-2 lg:w-[550px] 2xl:w-[650px] text-[#acd7ff] font-light">
                            Interesting in the entire web standards spectrum, I like to develop on ambititous projects with 
                            positive people over the course of my life and career.
                        </p>
                        <Link href="mailto:myatminaung.dev@gmail.com" 
                            className="mb-2 lg:w-[550px] 2xl:w-[650px] text-primaryColor font-light"
                        >
                            {"Let's"} build something special...
                        </Link>
                    </div>
                    {/* <div className="w-[380px] hidden lg:block">
                        <Lottie />
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default AboutSection;