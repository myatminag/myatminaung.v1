import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const AnimateHeading = ({ title }) => {
    return (
        <Stack direction={"row"} position={"relative"}>
            <motion.div 
                className="w-12 h-12 rounded-full bg-[#5de4c7]"
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                initial={{ y: "8px" }}
                animate={{ y: "-8px" }}
                exit={{ y: "8px" }}
            >
                
            </motion.div>
            <Typography 
                color={"#FFFFFF"} 
                fontSize={"30px"} 
                textAlign={"center"}
                fontWeight={700}
                letterSpacing={1.5}
                position={"absolute"}
                left={9}
            >
                {title}
            </Typography>
        </Stack>
    );
}

export default AnimateHeading;