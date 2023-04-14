"use client"

import { useState, useEffect } from "react";

import TopArrowIcon from "./icons/TopArrowIcon";
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
        <div className="fixed z-30 -bottom-[50px] -right-[50px]">
            {showButton && (
                <button onClick={handleScrollToTop} className="p-2 min-w-[110px] min-h-[110px] rounded-full bg-primaryColor">
                    <div className="mb-9 ml-[0.5rem]">
                        <CircleArrowIcon />
                    </div>
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;