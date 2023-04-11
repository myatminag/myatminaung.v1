import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ExpJson from "@/assets/exp.json"
import AnimateHeading from "./AnimateHeading";

const ExpSection = ({ expRef }) => {
    return (
        <section className="">

        </section>
        // <Box
        //     ref={expRef} 
        //     width={"100vw"} 
        //     maxWidth={"1240px"} 
        //     sx={{
        //         display: { lg: "flex" },
        //         justifyContent: { lg: "center" },
        //         alignItems: { lg: "center" },
        //         marginX: { lg: "auto" },
        //         paddingY: { xs: "5rem" },
        //         paddingX: { xs: "16px" }
        //     }}
        // >
        //     <Box>
        //         <AnimateHeading title={"Experience."} />
        //         {/* ----- mobile view ----- */}
        //         <Stack direction={"column"} spacing={2.5} marginTop={4}>
        //             {ExpJson.map(data => (
        //                 <Stack key={data.id} bgcolor="#313340" direction={"column"} spacing={2} padding={"32px 16px"} borderRadius={"10px"}>
        //                     <Stack direction={"column"} spacing={0.5}>
        //                         <Typography fontSize={"1.2rem"} fontWeight={600} color="#acd7ff">
        //                             {data.jobTitle}
        //                         </Typography>
        //                         <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
        //                             <Typography fontStyle={"italic"} color="#acd7ff">
        //                                 {data.companyName}
        //                             </Typography>
        //                             <Typography color="#acd7ff">
        //                                 /
        //                             </Typography>
        //                             <Typography color="#acd7ff">
        //                                 {data.jobType}
        //                             </Typography>
        //                         </Stack>
        //                         <Typography fontWeight={300} color="#acd7ff">
        //                             {data.date}
        //                         </Typography>
        //                         <Typography 
        //                             fontSize={"0.9rem"} 
        //                             width={"90px"} 
        //                             textAlign={"center"}
        //                             bgcolor={"#5de4c7"} 
        //                             padding={"5px"} 
        //                             borderRadius={"5px"}
        //                         >
        //                             {data.type}
        //                         </Typography>
        //                     </Stack>
        //                     <Stack direction={"column"} spacing={1}>
        //                         <Typography fontSize={"1.2rem"} fontWeight={600} color="#acd7ff">
        //                             {data.companyName}
        //                         </Typography>
        //                         <Typography fontWeight={300} color="#acd7ff">
        //                             {data.description}
        //                         </Typography>
        //                     </Stack>
        //                 </Stack>
        //             ))}
        //         </Stack>
        //     </Box>
        // </Box>
    );
}

export default ExpSection;