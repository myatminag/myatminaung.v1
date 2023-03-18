/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ResumeIcon from "./icons/ResumeIcon";
import AnimationLottie from "@/lib/animation";

const HeroSection = ({ homeRef }) => {

    const router = useRouter();

    return (
        <Box 
            ref={homeRef} 
            minHeight={"90vh"} 
            width={"100vw"} 
            maxWidth={"1240px"} 
            sx={{
                display: { lg: "flex" },
                justifyContent: { lg: "center" },
                alignItems: { lg: "center" },
                marginX: { lg: "auto" },
                padding: { xs: "16px" }
            }}
        >
            <Box width={"350px"} sx={{ 
                display: { xs: "block", lg: "none" },
                marginX: "auto"
            }}>
                <AnimationLottie />
            </Box>
            <Stack direction={"row"} alignItems={"center"}>
                <Stack direction={"column"} spacing={1} alignItems={"flex-start"}> 
                    <Typography color={"#acd7ff"}>
                        Welcome, my name is
                    </Typography>
                    <Typography color={"#acd7ff"} fontWeight={600} sx={{ 
                        fontSize: { xs: "2.3rem", lg: "2.8rem" } 
                    }}>
                        Myat Min Aung
                    </Typography>
                    <Typography color={"#5de4c7"} fontWeight={600} sx={{
                        fontSize: { xs: "1.6rem", lg: "2.5rem" }
                    }}>
                        A Full-stack Web Developer
                    </Typography>
                    <Typography color={"#acd7ff"} sx={{ 
                        width: { lg: "450px" },
                        fontSize: { xs: "1rem" }
                    }}>
                        I'm passionate about web standards and developing user-friendly website &
                        web applications.
                    </Typography>
                    <Typography color={"#acd7ff"} paddingBottom={2} sx={{ 
                        width: { lg: "450px" },
                        fontSize: { xs: "1rem" }
                    }}>
                        Currently, I'm specializing in reactjs & nextjs for frontend and 
                        nodejs & expressjs for backend.
                    </Typography>
                    <Stack 
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                        bgcolor={"#5de4c7"}
                        color={"#000000"}
                        paddingX={"16px"}
                        paddingY={"8px"}
                        borderRadius={"5px"}
                        onClick={() => router.push('/resume.pdf')}
                    >
                        <ResumeIcon />
                        <Typography marginLeft={"5px"} fontWeight={500}>
                            Resume
                        </Typography>
                    </Stack>
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

export default HeroSection;