import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import DarkIcon from "../icons/DarkIcon";
import LightIcon from "../icons/LightIcon";

const Nav = ({ homeRef, aboutRef, projectRef, contactRef }) => {

    const navigation = [
        { id: 1, label: "Home", ref: homeRef },
        { id: 2, label: "About Me?", ref: aboutRef },
        { id: 3, label: "Project", ref: projectRef },
        { id: 4, label: "Contact", ref: contactRef },
    ];

    // scroll to section
    const handleScroll = (sectionRef) => {
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: "smooth"
        })
    };

    // scroll and change nav bgColor
    const [changeBgColor, setChangeBgColor] = useState(false);

    const handleScrollBgColor = () => {
        if (window.scrollY >= 50) {
            setChangeBgColor(true);
        } else {
            setChangeBgColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollBgColor);

        return () => {
            window.removeEventListener("scroll", handleScrollBgColor);
        }
    }, []);

    return (
        <Stack 
            direction={"row"} 
            justifyContent={"space-between"} 
            alignItems={"center"} 
            position={"sticky"} 
            top={0} 
            paddingY={"10px"}
            sx={{ 
                paddingX: { xs: "16px", lg: "10%" },
                backgroundColor: changeBgColor ? "rgba( 27, 27, 30, 0.25 )" : "#1c1e28",
                boxShadow: changeBgColor && "0 8px 32px 0 rgba( 16, 17, 16, 0.25 )",
                backdropFilter: "blur(10px)",
                zIndex: 10
            }}
        >
            <Typography fontSize={"1.4rem"} fontWeight={400} letterSpacing={1.8} color={"#FFFFFF"}>
                Mma.dev
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={6}>
                <Stack direction={"row"} alignItems={"center"} spacing={6} sx={{
                    display: { xs: "none", md: "none", lg: "flex" }
                }}>
                    {navigation.map(data => (
                        <Typography 
                            onClick={() => handleScroll(data.ref)} 
                            key={data.id} 
                            color={"#FFFFFF"}
                            sx={{
                                cursor: "pointer"
                            }}
                        >
                            {data.label}
                        </Typography>
                    ))}
                </Stack>
                <IconButton 
                    sx={{ 
                        px: "0",
                        '&:hover': {
                            backgroundColor: "transparent"
                        }
                    }}
                >
                    <LightIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
}

export default Nav;