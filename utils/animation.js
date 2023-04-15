import Lottie from "lottie-react";

import Animation from "@/public/animation.json"

const AnimationLottie = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        style: {
            zIndex: "-100",
            position: "relative"
        }
    };

    return (
        <Lottie {...defaultOptions} />
    );
}

export default AnimationLottie;