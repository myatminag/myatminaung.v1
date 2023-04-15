import { useEffect, useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

import { scrollToSection } from "@/utils/scrollToSection";

const Header = ({ expRef, aboutRef, projectRef, contactRef }) => {

    const [isOpen, setIsOpen] = useState(false); 

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

    // Mobile menu animation
    const menu = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 1.2
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollBgColor);

        return () => {
            window.removeEventListener("scroll", handleScrollBgColor);
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen]);

    return (
        <nav className={
                changeBgColor ? 
                "fixed top-0 w-full z-50 bg-[#1c1e28] backdrop-blur-[10px] shadow-[0 8px 32px 0 rgba( 16, 17, 16, 0.25 )]" : 
                "fixed top-0 w-full z-50"
            }>
            <div className="flex items-center justify-between py-3 px-3 lg:py-6 lg:px-[10%]">
                <div className="sticky z-[150] top-0 right-0">
                    <p className="text-[#FFFFFF] text-[1.4rem] font-[400] tracking-wider">
                        Mma.dev
                    </p>
                </div>
                <div className="hidden lg:flex lg:items-center lg:gap-x-12">
                    {navigation.map(nav => (
                        <p key={nav.id} onClick={() => scrollToSection(nav.ref)} className="header-nav">
                            {nav.label}
                        </p>
                    ))}
                </div>
                <div className="block lg:hidden sticky z-[150] top-0 right-0">
                    <Hamburger 
                        toggled={isOpen} 
                        toggle={setIsOpen} 
                        size={28}
                        color="#ffffff"
                        label="menu"
                    />
                </div>
                {isOpen && (
                    <motion.div 
                        variants={menu}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        exit="exit"
                        className="fixed z-[100] bottom-0 top-0 right-0 left-0 w-full h-[100vh] overflow-hidden bg-[#1c1e28]"
                    >
                        <div className="min-h-screen w-screen flex flex-col items-center justify-center">                    
                            <div className="flex flex-col items-center justify-center gap-y-4">
                                {navigation.map((nav) => (
                                    <p  
                                        className="text-[#acd7ff] text-[1.5rem] font-[400] tracking-wider"
                                        key={nav.id} 
                                        onClick={() => {
                                            setIsOpen(!isOpen)
                                            scrollToSection(nav.ref)
                                        }}
                                    >
                                        {nav.label}
                                    </p>
                                ))}
                            </div>
                            <p className="mt-16 text-[#acd7ff] text-[1.3rem] tracking-wider">
                                myatminaung@gmail.com
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Header;