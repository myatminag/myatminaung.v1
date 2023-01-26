import { useEffect, useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { FaHome, FaUserAlt, FaProjectDiagram } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";   

const Header = () => {

    const [isOpen, setIsOpen] = useState(false); 

    // Navigation link
    const navigation = [
        { id: '1', link: '/#hero', text: 'Home', icon: FaHome, size: 20},  
        { id: '2', link: '/#about', text: 'About', icon: FaUserAlt, size: 20},
        { id: '3', link: '/#projects', text: 'Projects', icon: FaProjectDiagram, size: 20 },
        { id: '4', link: '/#contact', text: 'Contact', icon: MdPermContactCalendar, size: 20 },
        { id: '5', link: '/resume.pdf', text: 'Resume', icon: IoNewspaperOutline, size: 20 },
    ];

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

    // Disabled scroll when menu open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen]);

    return (
        <nav className="w-[100%] fixed bg-[#101110] py-6 px-3 lg:px-12">
            <div className="w-[100%] flex items-center justify-between">
                <a href="/">
                    <p className="text-white text-lg tracking-wider sticky z-[150] left-0 top-0">
                        Mma.dev
                    </p>
                </a>
                <div>
                    <ul className="hidden w-[100%] lg:flex items-center justify-center gap-x-6">
                        {navigation.map((nav) => {
                            const Icons = nav.icon;
                            return (
                                <a key={nav.id} href={nav.link}>
                                    <li className="px-6 py-2 flex items-center gap-x-2 text-[#ffffffb3] rounded-md bg-[#1d1d1d] hover:text-white duration-100 transition-all">
                                        <Icons size={nav.size} color="white" />
                                        {nav.text} 
                                    </li>
                                </a>
                            )
                        })}
                    </ul>
                </div>
                <div className="lg:hidden">
                    <div className="sticky z-[150] top-0 right-0">
                        <Hamburger 
                            toggled={isOpen} 
                            toggle={setIsOpen} 
                            size={28}
                            color="#ffffff"
                        />
                    </div>
                    {isOpen && (
                        <motion.div 
                            variants={menu}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "100vh", opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            exit="exit"
                            className="fixed z-[100] bottom-0 top-0 right-0 left-0 w-full h-[100vh] overflow-hidden overlay"
                        >
                            <div className="px-[1em] fixed top-[6em]">                    
                                <ul className="flex flex-col items-start justify-center gap-y-8">
                                    {navigation.map((nav) => (
                                        <li key={nav.id} className="text-xl text-[#ffffffb3] hover:text-white duration-100 transition-all">
                                            <a href={nav.link} onClick={() => setIsOpen(!isOpen)}>
                                                {nav.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;