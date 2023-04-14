import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ children }) => {

    const loadingRef = useRef(null);

    useEffect(() => {
        const q = gsap.utils.selector(loadingRef);

        const tl = gsap.timeline({ defaults: { duration: 0.7 } });
        tl.fromTo((".loading-text"), { y: 150 }, { y: 0 });
        tl.to((".white-bg"), { x: "-100%" })
        .to((".dark-bg"),{ x: "-100%", duration: 0.6 }, "-=0.6");
    }, []);

    return (
        <div aria-hidden="true">
            <div className="white-bg fixed top-0 left-0 w-full h-screen bg-[#1c1e28] z-[9999] flex justify-center items-center">
                <div className="overflow-hidden">
                    <span className="loading-text uppercase text-primaryColor inline-block text-2xl sm:text-4xl tracking-widest">
                        {children}
                    </span>
                </div>
            </div>
            <div className="dark-bg fixed top-0 left-0 w-full h-screen bg-primaryColor z-[9998]"></div>
        </div>
    );
}

export default Loader;