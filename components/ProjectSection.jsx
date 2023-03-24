import Link from "next/link";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import GithubIcon from "./icons/GithubIcon";
import UrlIcon from "./icons/UrlIcon";
import AnimateHeading from "./AnimateHeading";
import ProjectJson from "@/assets/projects.json";

const ProjectSection = ({ projectRef }) => {

    return (
        <Box
            ref={projectRef} 
            width={"100vw"} 
            maxWidth={"1240px"} 
            sx={{
                display: { lg: "flex" },
                justifyContent: { lg: "center" },
                alignItems: { lg: "center" },
                marginX: { lg: "auto" },
                paddingY: { xs: "5rem" },
                paddingX: { xs: "16px" }
            }}
        >
            <Box>
                <AnimateHeading title={"Projects."} />
                {/* ----- mobile view ----- */}
                <Stack direction={"column"} spacing={5} marginTop={4}>
                    {ProjectJson.map(data => (
                        <Stack key={data.id} direction={"column"} spacing={1}>
                            <Box position={"relative"} width={"100%"} height={"200px"}>
                                <Image 
                                    src={data.url}
                                    alt={data.title}
                                    fill
                                    style={{ objectFit: "cover" }}  
                                />
                            </Box>
                            <Stack direction={"column"} spacing={1}>
                                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Typography fontSize={"1.2rem"} fontWeight={600} color={"#acd7ff"}>
                                        {data.title}
                                    </Typography>
                                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                        <Link href={data.githubLink}>
                                            <IconButton 
                                                sx={{ 
                                                    px: "0",
                                                    '&:hover': {
                                                        backgroundColor: "transparent"
                                                    }
                                                }}
                                            >
                                                <GithubIcon />
                                            </IconButton>
                                        </Link>
                                        <Link href={data.demoLink}>
                                            <IconButton 
                                                sx={{ 
                                                    px: "0",
                                                    '&:hover': {
                                                        backgroundColor: "transparent"
                                                    }
                                                }}
                                            >
                                                <UrlIcon />
                                            </IconButton>
                                        </Link>
                                    </Stack>
                                </Stack>
                                <Typography fontWeight={300} color={"#acd7ff"}>
                                    {data.description}
                                </Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}

export default ProjectSection;