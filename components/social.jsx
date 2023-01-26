"use client"

import React from 'react';
import { FaLinkedinIn, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="flex item-center gap-x-3">
            <a 
                href="https://www.facebook.com/profile.php?id=100008542208276" 
                className="bg-[#30302f] px-2 py-1 rounded-md flex items-center justify-center"
            >
                <FaFacebook size={23} color="white" className="cursor-pointer" />
            </a>
            <a 
                href="https://www.instagram.com/iri_diam/" 
                className="bg-[#30302f] px-2 py-2 rounded-md flex items-center justify-center"
            >
                <FaInstagram size={23} color="white" className="cursor-pointer" />
            </a>
            <a 
                href="https://github.com/MyatminAung2001" 
                className="bg-[#30302f] px-2 py-2 rounded-md flex items-center justify-center"
            >
                <FaGithub size={23} color="white" className="cursor-pointer" />
            </a>
            <a 
                href="https://www.linkedin.com/in/myat-min-aung-830039245/" 
                className="bg-[#30302f] px-2 py-2 rounded-md flex items-center justify-center"
            >
                <FaLinkedinIn size={23} color="white" className="cursor-pointer" />
            </a>
        </div>
    )
}

export default SocialMedia