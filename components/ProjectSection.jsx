import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import ProjectJson from "@/assets/projects.json";

const ProjectSection = ({ projectRef }) => {

    const [isHover, setIsHover] = useState(null);

    const handleItemHover = (currId) => {
        setIsHover(currId);
    };

    const handleItemLeave = () => {
        setIsHover(null);
    };

    return (
        <section ref={projectRef} className="lg:pt-0 lg:pb-0 lg:px-[15%]">
            <div className="max-w-[1240px] min-h-[100vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div>
                    <header className="mb-4 text-[1.6rem] font-[600] text-primaryColor">
                        {"What I've built..."}
                    </header>
                    <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-y-6 lg:gap-x-6">
                        {ProjectJson.map(data => (
                            <Link key={data.id} href={data.demoLink}>
                                <div className="relative w-[100%] lg:w-[500px] h-[200px] lg:h-[250px]">
                                    <Image 
                                        onMouseOver={() => handleItemHover(data.id)}
                                        onMouseOut={handleItemLeave}
                                        src={data.url}
                                        alt={data.title}
                                        fill
                                        className="mb-2 rounded-md"
                                    />
                                    {isHover === data.id && (
                                        <div className="absolute p-4 bottom-0 left-0 right-0 bg-[#546077] bg-opacity-75 rounded-b-md">
                                            <p className="mb-2 text-white text-[1.1rem]">
                                                {data.title}
                                            </p>
                                            <div className="flex items-center gap-x-1">
                                                {data.stacks?.map(data => (
                                                    <p key={data} className="text-white">
                                                        {data}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    )}
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