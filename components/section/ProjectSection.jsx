import { useRef, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import UrlIcon from "../icons/UrlIcon";
import { Projects } from "@/assets/projects";
import GithubIcon from "../icons/GithubIcon";

const ProjectSection = ({ projectRef }) => {
    return (
        <section ref={projectRef} className="pt-[4rem] xl:pt-[5rem] lg:px-[15%]">
            <div className="max-w-[1240px] min-h-[100vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div
                    data-aos="fade-up" 
                    data-aos-delay="0"
                    data-aos-duration="1000"
                >
                    <header className="mb-4 text-[1.6rem] font-[600] text-primaryColor">
                        {"What I've built..."}
                    </header>
                    <div className="grid grid-cols-1 gap-y-[4rem] xl:gap-y-[2rem]">
                        {Projects.map(data => (
                            <Fragment key={data.id}>
                                <div 
                                    data-aos="fade-up" 
                                    data-aos-delay="0"
                                    data-aos-duration="1000"
                                    className="lg:flex lg:items-center lg:justify-between"
                                >
                                    {data.imageIsLeft === 1 ? (
                                        <Fragment>
                                            <Image 
                                                src={data.imgUrl}
                                                alt={data.title}
                                                height={500}
                                                width={500}
                                                className="mb-2 rounded-md"
                                            />
                                            <div>
                                                <p className="mb-6 text-[#acd7ff] font-[500] text-center text-[1.2rem]">
                                                    {data.title}
                                                </p>
                                                <p className="mb-6 text-[#acd7ff] font-light text-center tracking-wide">
                                                    {data.description}
                                                </p>
                                                <div className="mb-6 flex flex-wrap items-center justify-center gap-x-3">
                                                    {data.stacks?.map(data => (
                                                        <p key={data} className="text-primaryColor tracking-wide text-sm">
                                                            {data.stackOne}
                                                        </p>
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-evenly">
                                                    <Link href={`${data.demoLink}`} className="flex items-center gap-x-2" target="__blank">
                                                        <p className="text-[#acd7ff] font-light">
                                                            Launch
                                                        </p>
                                                        <UrlIcon />
                                                    </Link>
                                                    <Link href={`${data.githubLink}`} className="flex items-center gap-x-2" target="__blank">
                                                        <p className="text-[#acd7ff] font-light">
                                                            Github
                                                        </p>
                                                        <GithubIcon />
                                                    </Link>
                                                </div>
                                            </div>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            {/* mobile view */}
                                            <div className="block xl:hidden">
                                                <Image 
                                                    src={data.imgUrl}
                                                    alt={data.title}
                                                    height={500}
                                                    width={500}
                                                    className="mb-2 rounded-md"
                                                />
                                                <div className="">
                                                    <p className="mb-6 text-[#acd7ff] font-[500] text-center text-[1.2rem]">
                                                        {data.title}
                                                    </p>
                                                    <p className="mb-6 text-[#acd7ff] font-light text-center tracking-wide">
                                                        {data.description}
                                                    </p>
                                                    <div className="mb-6 flex flex-wrap items-center justify-center gap-x-3">
                                                        {data.stacks?.map(data => (
                                                            <p key={data} className="text-primaryColor tracking-wide text-sm">
                                                                {data.stackOne}
                                                            </p>
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center justify-evenly">
                                                        <Link href={`${data.demoLink}`} className="flex items-center gap-x-2" target="__blank">
                                                            <p className="text-[#acd7ff] font-light">
                                                                Launch
                                                            </p>
                                                            <UrlIcon />
                                                        </Link>
                                                        <Link href={`${data.githubLink}`} className="flex items-center gap-x-2" target="__blank">
                                                            <p className="text-[#acd7ff] font-light">
                                                                Github
                                                            </p>
                                                            <GithubIcon />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* desktop view */}
                                            <div className="hidden xl:block">
                                                <p className="mb-6 text-[#acd7ff] font-[500] text-center text-[1.2rem]">
                                                    {data.title}
                                                </p>
                                                <p className="mb-6 text-[#acd7ff] font-light text-center tracking-wide">
                                                    {data.description}
                                                </p>
                                                <div className="mb-6 flex flex-wrap items-center justify-center gap-x-3">
                                                    {data.stacks?.map(data => (
                                                        <p key={data} className="text-primaryColor tracking-wide text-sm">
                                                            {data.stackOne}
                                                        </p>
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-evenly">
                                                    <Link href={`${data.demoLink}`} className="flex items-center gap-x-2" target="__blank">
                                                        <p className="text-[#acd7ff] font-light">
                                                            Launch
                                                        </p>
                                                        <UrlIcon />
                                                    </Link>
                                                    <Link href={`${data.githubLink}`} className="flex items-center gap-x-2" target="__blank">
                                                        <p className="text-[#acd7ff] font-light">
                                                            Github
                                                        </p>
                                                        <GithubIcon />
                                                    </Link>
                                                </div>
                                            </div>
                                            <Image 
                                                src={data.imgUrl}
                                                alt={data.title}
                                                height={500}
                                                width={500}
                                                className="mb-2 rounded-md hidden xl:block"
                                            />
                                        </Fragment>
                                    )}
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;