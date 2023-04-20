import Link from "next/link";
import { useEffect, useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import { scrollToSection } from "@/utils/scrollToSection";

const Header = ({ expRef, aboutRef, projectRef, contactRef }) => {

    const navigation = [
        { id: 1, label: "About Me?", ref: aboutRef },
        { id: 2, label: "Experience", ref: expRef },
        { id: 3, label: "Project", ref: projectRef },
        { id: 4, label: "Contact", ref: contactRef },
    ];

    const [isOpen, setIsOpen] = useState(false); 

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen]);

    // mobile menu animation
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

    return (
        <nav className="fixed top-0 w-full z-50 bg-primaryDark">
            <div 
                className="flex items-center justify-between py-3 px-3 lg:py-6 lg:px-[10%]" 
                data-aos="fade-in" 
                data-aos-delay="900"
                data-aos-duration="1000"
            >
                {/* ----- web nav ----- */}
                <div className="sticky z-[150] top-0 right-0">
                    <p className="text-primaryTextColor text-[1.4rem] font-[400] tracking-wider">
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
                {/* ----- moblie nav ----- */}
                <div className="block lg:hidden sticky z-[150] top-0 right-0">
                    <Hamburger 
                        toggled={isOpen} 
                        toggle={setIsOpen} 
                        size={28}
                        color="#acd7ff"
                        label="menu"
                    />
                </div>
                {isOpen && (
                    <motion.div 
                        variants={menu}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="fixed z-[100] bottom-0 top-0 right-0 left-0 w-full h-[100vh] overflow-hidden bg-primaryDark"
                    >
                        <div className="min-h-screen w-screen relative flex flex-col items-center justify-center">                    
                            <div className="flex flex-col items-center justify-center gap-y-12">
                                {navigation.map((nav) => (
                                    <p  
                                        className="header-nav"
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
                            <div className="absolute bottom-8">
                                <div className="mb-4 flex items-center justify-center gap-x-6">
                                    <Link aria-label="Github" target='__blank' href="https://github.com/MyatminAung2001">
                                        <GithubIcon />
                                    </Link>
                                    <Link aria-label="LinkedIn" target='__blank' href="https://www.linkedin.com/in/myat-min-aung-830039245">
                                        <LinkedInIcon />
                                    </Link>
                                    <Link aria-label="Facebook" target='__blank' href="https://www.facebook.com/profile.php?id=100008542208276">
                                        <FacebookIcon />
                                    </Link>
                                    <Link aria-label="Instagram" target='__blank' href="https://www.instagram.com/iri_diam">
                                        <InstagramIcon />
                                    </Link>
                                </div>
                                <Link 
                                    target="__blank"
                                    href="mailto:myatminaung.dev@gmail.com" 
                                    className="text-primaryTextColor tracking-wider"
                                >
                                    myatminaung.dev@gmail.com
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Header;