"use client"

import { useState, useEffect } from "react";

import TopArrowIcon from "./icons/TopArrowIcon";

const ScrollToTop = () => {

    const [showButton, setShowButton] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const isScrollBtnVisible = () => {
            window.scrollY > 200 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener('scroll', isScrollBtnVisible);

        return () => {
            window.removeEventListener('scroll', isScrollBtnVisible);
        }
    }, []);

    return (
        <div className="hidden lg:block lg:fixed lg:bottom-6 lg:right-6">
            {showButton && (
                <button onClick={handleScrollToTop} className="p-2 rounded-full bg-primaryColor">
                    <TopArrowIcon />
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;