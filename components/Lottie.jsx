import { useEffect, useRef, useState } from "react";

const Lottie = () => {

    const animateRef = useRef(null);

    const [lottie, setLottie] = useState(null);

    useEffect(() => {
        import('lottie-web').then((Lottie) => setLottie(Lottie.default));
    }, []);

    useEffect(() => {
        if (lottie && animateRef.current) {
            const animation = lottie.loadAnimation({
                container: animateRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: "/animation.json",
            });

            return () => animation.destroy();
        }
    }, [lottie])

    return (
        <div ref={animateRef} />
    );
}

export default Lottie;