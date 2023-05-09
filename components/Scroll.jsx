import { motion } from "framer-motion";

import MouseIcon from "./icons/MouseIcon";
import { scrollToSection } from "@/utils/scrollToSection";

const Scroll = ({ aboutRef }) => {
    return (
        <div className="hidden lg:block lg:absolute lg:bottom-14 lg:left-[50%] lg:translate-x-[-50%]">
            <motion.div 
                onClick={() => scrollToSection(aboutRef)}
                className="lg:flex lg:flex-col lg:items-center lg:gap-y-0 lg:cursor-pointer"
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                initial={{ y: "16px" }}
                animate={{ y: "-16px" }}
                exit={{ y: "16px" }}
            >
                <MouseIcon />
                <p className="text-[#acd7ff] text-sm">
                    Scroll
                </p>
            </motion.div>
        </div>
    );
}

export default Scroll;