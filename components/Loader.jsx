import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ children }) => {

    const loadingRef = useRef(null);

    useEffect(() => {
        const q = gsap.utils.selector(loadingRef);

        const tl = gsap.timeline({ defaults: { duration: 0.7 } });
        tl.fromTo(q(".loading-text"), { y: 120 }, { y: -10 });
        tl.to(
            q(".white-bg"), { x: "-100%" }).to(
            q(".dark-bg"),{ x: "-100%", duration: 0.6 },
            "-=0.6"
        );
    }, []);

    return (
        <div ref={loadingRef} aria-hidden="true">
            <div className="white-bg fixed top-0 left-0 w-full h-screen bg-[#1c1e28] z-[9999] flex justify-center items-center">
                <div className="overflow-hidden">
                    <span className="loading-text text-primaryColor inline-block text-bgdark dark:text-bglight text-4xl sm:text-5xl lg:text-7xl tracking-widest">
                        {children}
                    </span>
                </div>
            </div>
            <div className="dark-bg fixed top-0 left-0 w-full h-screen bg-primaryColor dark:bg-carrigreen z-[9998]"></div>
        </div>
    );
}

export default Loader;