import { useState } from "react";

const InstagramIcon = () => {

    const [isHover, setIsHover] = useState(false);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <path
                stroke={isHover ? "#5de4c7" : "#acd7ff"}
                strokeMiterlimit="10"
                d="M17.073 1H6.927A5.927 5.927 0 001 6.927v10.146A5.927 5.927 0 006.927 23h10.146A5.927 5.927 0 0023 17.073V6.927A5.927 5.927 0 0017.073 1z"
            ></path>
            <path
                stroke={isHover ? "#5de4c7" : "#acd7ff"}
                strokeMiterlimit="10"
                d="M12 17.31a5.31 5.31 0 100-10.62 5.31 5.31 0 000 10.62z"
            ></path>
            <path
                fill={isHover ? "#5de4c7" : "#acd7ff"}
                d="M18.448 6.69a1.138 1.138 0 100-2.276 1.138 1.138 0 000 2.276z"
            ></path>
        </svg>
    );
}

export default InstagramIcon;