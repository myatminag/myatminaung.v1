import { useState } from "react";

const InstagramIcon = () => {

    const [isHover, setIsHover] = useState(false);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 51 51"
        >
            <path
                fill={isHover ? "#5de4c7" : "#acd7ff"}
                strokeMiterlimit="10"
                strokeWidth="2.03"
                d="M36.69 2H14.793C7.728 2 2 7.728 2 14.793V36.69c0 7.065 5.728 12.793 12.793 12.793H36.69c7.065 0 12.793-5.728 12.793-12.793V14.793C49.483 7.728 43.755 2 36.69 2z"
            ></path>
            <path
                fill={isHover ? "#5de4c7" : "#acd7ff"}
                strokeMiterlimit="10"
                strokeWidth="2.03"
                d="M25.741 37.203c6.33 0 11.462-5.132 11.462-11.462S32.07 14.28 25.74 14.28 14.28 19.412 14.28 25.741c0 6.33 5.132 11.462 11.461 11.462z"
            ></path>
            <path
                fill={isHover ? "#5de4c7" : "#acd7ff"}
                d="M39.659 14.28a2.456 2.456 0 100-4.912 2.456 2.456 0 000 4.912z"
            ></path>
        </svg>
    );
}

export default InstagramIcon;