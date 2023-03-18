/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ResumeIcon from "./icons/ResumeIcon";
import SocialMedia from "@/components/social";
import AnimationLottie from "@/lib/animation";

const Hero = ({ homeRef }) => {

    const router = useRouter();

    return (
        <Box ref={homeRef} minHeight={"90vh"} width={"100vw"} maxWidth={"1240px"} sx={{
            display: { lg: "flex" },
            justifyContent: { lg: "center" },
            alignItems: { lg: "center" },
            marginX: { lg: "auto" },
            padding: { xs: "16px" }
        }}>
            <Box width={"350px"} sx={{ 
                display: { xs: "block", lg: "none" },
                marginX: "auto"
            }}>
                <AnimationLottie />
            </Box>
            <Stack direction={"row"} alignItems={"center"}>
                <Stack direction={"column"} spacing={1} alignItems={"flex-start"}> 
                    <Typography color={"#acd7ff"}>
                        Welcome my name is
                    </Typography>
                    <Typography color={"#acd7ff"} fontWeight={600} sx={{ 
                        fontSize: { xs: "2rem", lg: "2.8rem" } 
                    }}>
                        Myat Min Aung
                    </Typography>
                    <Typography color={"#5de4c7"} sx={{
                        fontSize: { xs: "1.2rem", lg: "2.5rem" }
                    }}>
                        A Full-stack Web Developer
                    </Typography>
                    <Typography color={"#acd7ff"} sx={{ width: { lg: "450px" } }}>
                        I'm passionate about web standards and developing user-friendly website &
                        web applications.
                    </Typography>
                    <Typography color={"#acd7ff"} sx={{ width: { lg: "500px" } }} paddingBottom={2}>
                        Currently, I'm specializing in reactjs & nextjs for frontend and 
                        nodejs & expressjs for backend.
                    </Typography>
                    <Button 
                        onClick={() => router.push('/resume.pdf')}
                        style={{ backgroundColor: "#5de4c7" }} 
                        sx={{
                            color: "#000000",
                            paddingX: "16px"
                        }}
                    >
                        <ResumeIcon />
                        <Typography marginLeft={"5px"} fontWeight={500}>
                            Resume
                        </Typography>
                    </Button>
                </Stack>
                <Box width={"400px"} sx={{ 
                    display: { xs: "none", lg: "block" },
                    marginLeft: "30px"
                }}>
                    <AnimationLottie />
                </Box>
            </Stack>
        </Box>
    );
}

export default Hero;