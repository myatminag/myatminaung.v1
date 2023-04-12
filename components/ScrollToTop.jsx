"use client"

import { useState, useEffect } from "react";

import CircleArrowIcon from "./icons/CircleArrowIcon";

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
        <div className="fixed bottom-6 right-6 xl:bottom-9 xl:right-9">
            {showButton && (
                <button onClick={handleScrollToTop} className="p-2 rounded-full bg-[#1c1e28]">
                    <CircleArrowIcon />
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;