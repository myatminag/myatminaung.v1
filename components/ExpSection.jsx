import { useState, useRef, useEffect } from 'react';

import { expData } from '@/assets/exp';

const ExpSection = ({ expRef }) => {

    const tabsRef = useRef([]);

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderLineWidth, setTabUnderLineWidth] = useState(0);
    const [tabUnderLineLeft, setTabUnderLineLeft] = useState(0);

    useEffect(() => {
        const handleTabPosition = () => {
            const currnetTab = tabsRef.current[activeTabIndex];
            setTabUnderLineLeft(currnetTab?.offsetLeft ?? 0);
            setTabUnderLineWidth(currnetTab?.clientWidth ?? 0);
        };

        handleTabPosition();

        window.addEventListener("resize", handleTabPosition);

        return () => window.removeEventListener("resize", handleTabPosition);
    }, [activeTabIndex]);

    return (
        <section ref={expRef} className="pt-[4rem] lg:pt-0 lg:px-[15%]">
            <div className="max-w-[600px] 2xl:max-w-[900px] lg:min-h-[100vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div
                    data-aos="fade-up" 
                    data-aos-delay="0"
                    data-aos-duration="1000"
                >
                    <header className="mb-4 text-[1.6rem] font-[600] text-primaryColor">
                        {"Where I've worked..."}
                    </header>
                    <div className="relative">
                        <div className="flex space-x-3 border-b border-[#5de4c710]">
                            {expData?.map((exp, idx) => {
                                return (
                                    <button
                                        key={idx}
                                        ref={(el) => (tabsRef.current[idx] = el)}
                                        className="pt-2 pb-3 text-[#acd7ff]"
                                        onClick={() => setActiveTabIndex(idx)}
                                    >
                                        {exp.companyName}
                                    </button>
                                );
                            })}
                        </div>
                        <span
                            className="absolute bottom-0 block h-[2px] bg-primaryColor transition-all duration-300"
                            style={{ left: tabUnderLineLeft, width: tabUnderLineWidth }}
                        />
                    </div>
                    <div className="py-4">
                        <p className="text-[1.2rem] text-[#acd7ff] font-[500]">
                            {expData[activeTabIndex].jobTitle}
                        </p>
                        <p className="text-[#acd7ff] my-2">
                            {expData[activeTabIndex].date} | {" "}
                            <span className="text-primaryColor italic">{expData[activeTabIndex].companyName}</span>
                        </p>
                        <ul className="list-outside list-disc px-3 xl:px-0">
                            {expData[activeTabIndex].description.map(data => (
                                <li key={data} className="text-primaryColor mb-2">
                                    <p className="text-[#acd7ff] font-light xl:text-[1.1rem] 2xl:text-[1.5rem]"> 
                                        {data}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExpSection;