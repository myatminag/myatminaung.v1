import Lottie from "lottie-react";
import animation from "@/assets/animation.json"; 

const AnimationLottie = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
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