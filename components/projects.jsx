"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { MdViewInAr } from "react-icons/md";
 
import { sanityClient, urlFor } from "@/lib/sanity";
import Headliner from "@/components/headliner";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    // Fetch Projects from Sanity CMS 
    useEffect(() => {
        const query = '*[_type == "project"]';

        sanityClient.fetch(query).then((data) => {
            setProjects(data);
        });
    }, []);

    return (
        <section id="projects" className="w-full px-3 x-6 pt-[25%] lg:pb-0 lg:pt-[10%] lg:px-[15%]">
            <div className="max-w-[1240px] w-full h-full lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div>
                    <Headliner name={"Feature Projects"} />
                    <p className="text-white mb-5">
                        Here are some list of my projects.
                    </p>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-5">
                        {projects.map((data, index) => (
                            <div key={index} className="mb-6">
                                <Image 
                                    src={urlFor(data.imgUrl).url()} 
                                    alt="project-image"   
                                    width={500}
                                    height={500}
                                />
                                <div className="px-3 py-3">
                                    <div className="mb-4 flex items-center justify-between">
                                        <p className="text-[#7392b7] text-lg uppercase">  
                                            {data.title} 
                                        </p>
                                        <div className="flex items-center gap-x-3">
                                            <Link href={data.gitUrl}>
                                                <FaGithub size={23} color="white" />
                                            </Link>
                                            <Link href={data.projectUrl}>
                                                <MdViewInAr size={23} color="white" />
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="mb-4 text-white">  
                                        {data.description} 
                                    </p>
                                    <div className="flex items-center gap-x-3 gap-y-2 flex-wrap">
                                        <p className="text-sm text-white bg-[#1d1d1d] px-2 rounded">
                                            {data.tags[0]}
                                        </p>
                                        <p className="text-sm text-white bg-[#1d1d1d] px-2 rounded">
                                            {data.tags[1]}
                                        </p>
                                        <p className="text-sm text-white bg-[#1d1d1d] px-2 rounded">
                                            {data.tags[2]}
                                        </p>
                                        <p className="text-sm text-white bg-[#1d1d1d] px-2 rounded">
                                            {data.tags[3]}
                                        </p>
                                        <p className="text-sm text-white bg-[#1d1d1d] px-2 rounded">
                                            {data.tags[4]}
                                        </p>
                                        <p className="text-sm text-white bg-[#1d1d1d] px-2 rounded">
                                            {data.tags[5]}
                                        </p>
                                        <p className="text-sm text-white bg-[#1d1d1d] px-2 rounded">
                                            {data.tags[6]}
                                        </p>
                                    </div>
                                </div>
                            </div> 
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
