import { useEffect, useState } from "react";

import DarkIcon from "../icons/DarkIcon";
import LightIcon from "../icons/LightIcon";

const Header = ({ expRef, aboutRef, projectRef, contactRef }) => {

    const navigation = [
        { id: 1, label: "About Me?", ref: aboutRef },
        { id: 2, label: "Experience", ref: expRef },
        { id: 3, label: "Project", ref: projectRef },
        { id: 4, label: "Contact", ref: contactRef },
    ];

    // scroll to section
    const handleScroll = (sectionRef) => {
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: "smooth"
        })
    };

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
        <nav className="sticky top-0 z-50">
            <div className="flex items-start justify-between py-6 px-3 lg:px-[10%]">
                <p className="text-[#FFFFFF] text-[1.4rem] font-[400] tracking-wider">
                    Mma.dev
                </p>
                <div className="flex items-center gap-x-12">
                    {navigation.map(nav => (
                        <p key={nav.id} onClick={() => handleScroll(nav.ref)} className="text-[#FFFFFF] cursor-pointer">
                            {nav.label}
                        </p>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Header;