import { useState } from "react";

const FacebookIcon = () => {

    const [isHover, setIsHover] = useState(false);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 48 84"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <path
                fill={isHover ? "#5de4c7" : "#acd7ff"}
                d="M41.766 0h5.717v21.992h-5.557a8.995 8.995 0 00-8.995 8.995v.032-.002 1.723h10.9v18.371h-10.9v32.74H10.939v-32.74H0v-18.37h10.939v-1.716C10.939 13.96 24.714.114 41.75 0h.015zm1.905 3.811h-1.905c-14.929.151-26.978 12.27-27.016 27.21v5.53H3.812V47.3H14.75v32.74h14.37V47.3h10.9V36.552h-10.9v-5.565c0-7.073 5.733-12.806 12.806-12.806h1.753L43.67 3.81z"
            ></path>
        </svg>
    );
}

export default FacebookIcon;