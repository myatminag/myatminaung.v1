import { useEffect, useState } from "react";

import DarkIcon from "./icons/DarkIcon";
import LightIcon from "./icons/LightIcon";
import { scrollToSection } from "@/utils/scrollToSection";

const Header = ({ expRef, aboutRef, projectRef, contactRef }) => {

    const navigation = [
        { id: 1, label: "About Me?", ref: aboutRef },
        { id: 2, label: "Experience", ref: expRef },
        { id: 3, label: "Project", ref: projectRef },
        { id: 4, label: "Contact", ref: contactRef },
    ];

    // scroll and change nav bgColor
    const [changeBgColor, setChangeBgColor] = useState(false);

    const handleScrollBgColor = () => {
        if (window.scrollY >= 50) {
            setChangeBgColor(true);
        } else {
            setChangeBgColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollBgColor);

        return () => {
            window.removeEventListener("scroll", handleScrollBgColor);
        }
    }, []);

    return (
        <nav className={
                changeBgColor ? 
                "fixed top-0 w-full z-50 bg-[#1c1e28] backdrop-blur-[10px] shadow-[0 8px 32px 0 rgba( 16, 17, 16, 0.25 )]" : 
                "fixed top-0 w-full z-50"
            }>
            <div className="flex items-center justify-between py-3 px-3 lg:py-6 lg:px-[10%]">
                <p className="text-[#FFFFFF] text-[1.4rem] font-[400] tracking-wider">
                    Mma.dev
                </p>
                <div className="hidden lg:flex lg:items-center lg:gap-x-12">
                    {navigation.map(nav => (
                        <p key={nav.id} onClick={() => scrollToSection(nav.ref)} className="header-nav">
                            {nav.label}
                        </p>
                    ))}
                </div>
                <button className="block lg:hidden">
                    <LightIcon />
                </button>
            </div>
        </nav>
    );
}

export default Header;