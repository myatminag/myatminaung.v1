import Link from "next/link";
import Image from "next/image";

import { Projects } from "@/assets/projects";

const ProjectSection = ({ projectRef }) => {

    return (
        <section ref={projectRef} className="pt-[4rem] lg:pt-0 lg:pb-0 lg:px-[15%]">
            <div className="max-w-[1240px] min-h-[100vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div>
                    <header className="mb-4 text-[1.6rem] font-[600] text-primaryColor">
                        {"What I've built..."}
                    </header>
                    <div className="grid grid-cols-1 gap-y-4">
                        {Projects.map(data => (
                            <Link key={data.id} href={data.demoLink} target="__blank">
                                <div className="lg:flex lg:items-center lg:justify-between">
                                    <Image 
                                        src="/project-1.png"
                                        alt={data.title}
                                        height={500}
                                        width={500}
                                        className="mb-2 rounded-md"
                                    />
                                    <div>
                                        <p className="mb-2 text-white text-center text-[1.1rem]">
                                            {data.title}
                                        </p>
                                        <div className="flex items-center justify-center gap-x-1">
                                            {data.stacks?.map(data => (
                                                <p key={data} className="text-[#acd7ff] text-sm">
                                                    {data.stackOne}
                                                </p>
                                            )).reduce((prev, curr) => [prev, " / ", curr])}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;