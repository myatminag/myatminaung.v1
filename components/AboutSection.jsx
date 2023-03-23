import Image from "next/image";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


import profilePic from "@/assets/myProfile.jpeg"; 
import AnimateHeading from "./AnimateHeading";

const AboutSection = ({ aboutRef }) => {
    return (
        <Box 
            ref={aboutRef} 
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
            <Box>
                <AnimateHeading title={"About Me."} />
                {/* ----- mobile view ----- */}
                <Stack direction={"column"} spacing={2} marginTop={6} sx={{ 
                    display: { xs: "block", lg: "none" }
                }}>
                    <Box sx={{
                        width: "280px",
                        height: "280px",
                        position: "relative",
                        border: "1px solid #5de4c7",
                        borderRadius: "10px",
                        marginX: "auto"
                    }}>
                        <Image 
                            src={profilePic}
                            alt="profile-pic" 
                            fill
                            style={{
                                borderRadius: "10px",
                            }}
                        />
                    </Box>
                    <Stack direction={"column"} spacing={2}>
                        <Typography color={"#acd7ff"} sx={{
                            width: { lg: "450px" }
                        }}>
                            I am a full-stack web developer from Yangon, Myanmar. I began to interest in
                            web development with scratch when I firstly learned programming at CS50. After
                            learning over a year, I have a dab hand at both frontend and backend development,
                            utilizing my background knowledges and problems-solving to bring some unique things.
                        </Typography>
                        <Stack direction={"column"} spacing={1}>
                            <Typography fontWeight={600} fontSize={"1.3rem"} color={"#5de4c7"}>
                                Tech stacks currently working with,
                            </Typography>
                            <Stack direction={"row"} alignItems={"flex-start"} spacing={4}>
                                <Stack direction={"column"} spacing={0.5}>
                                    <li style={{ color: "#acd7ff" }}>
                                        JavaScript
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        TypeScript
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        Reactjs
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        Nextjs
                                    </li>
                                </Stack>
                                <Stack direction={"column"} spacing={0.5}>
                                    <li style={{ color: "#acd7ff" }}>
                                        Nodejs
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        Expressjs
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        Mongodb
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        Mysql
                                    </li>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction={"column"} spacing={1}>
                            <Typography fontWeight={600} fontSize={"1.3rem"} color={"#5de4c7"}>
                                Educational Background,
                            </Typography>
                            <li style={{ color: "#acd7ff", fontSize: "1.1rem" }}>
                                2nd year major in mechanical engineering
                            </li>
                        </Stack>
                    </Stack>
                </Stack>
                {/* ----- web view ----- */}
                <Stack marginTop={4} sx={{
                    width: "100%",
                    display: { xs: "none", lg: "flex" },
                    flexDirection: { lg: "row" },
                    justifyContent: { lg: "space-between" },
                    gap: "6rem"
                }}>
                    <Box sx={{
                        width: "280px",
                        height: "280px",
                        position: "relative",
                        border: "1px solid #5de4c7",
                        borderRadius: "10px",
                        marginX: "auto"
                    }}>
                        <Image 
                            src={profilePic}
                            alt="profile-pic" 
                            fill
                            style={{
                                borderRadius: "10px",
                            }}
                        />
                    </Box>
                    <Stack direction={"column"} spacing={2}>
                        <Typography color={"#acd7ff"} sx={{
                            width: { lg: "450px" }
                        }}>
                            I am a full-stack web developer from Yangon, Myanmar. I began to interest in
                            web development with scratch when I firstly learned programming at CS50. After
                            learning over a year, I have a dab hand at both frontend and backend development,
                            utilizing my background knowledges and problems-solving to bring some unique things.
                        </Typography>
                        <Typography color={"#acd7ff"}>
                            Here is my tech stacks currently working with,
                        </Typography>
                        <Stack direction={"column"} spacing={1}>
                            <Typography fontWeight={600} fontSize={"1.3rem"} color={"#5de4c7"}>
                                Tech stacks currently working with,
                            </Typography>
                            <Stack direction={"row"} alignItems={"flex-start"} spacing={4}>
                                <Stack direction={"column"} spacing={0.5}>
                                    <li style={{ color: "#acd7ff" }}>
                                        JavaScript
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        TypeScript
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        Reactjs
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        Nextjs
                                    </li>
                                </Stack>
                                <Stack direction={"column"} spacing={0.5}>
                                    <li style={{ color: "#acd7ff" }}>
                                        Nodejs
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        Expressjs
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        Mongodb
                                    </li>
                                    <li style={{ color: "#acd7ff" }}>
                                        Mysql
                                    </li>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction={"column"} spacing={1}>
                            <Typography fontWeight={600} fontSize={"1.3rem"} color={"#5de4c7"}>
                                Educational Background,
                            </Typography>
                            <li style={{ color: "#acd7ff", fontSize: "1.1rem" }}>
                                2nd year major in mechanical engineering
                            </li>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default AboutSection;