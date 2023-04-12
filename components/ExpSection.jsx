
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ExpJson from "@/assets/exp.json"
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ px: 0, py: 2 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ExpSection = ({ expRef }) => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section ref={expRef} className="pt-[5rem] pb-[5rem] lg:pt-0 lg:pb-0 lg:px-[15%]">
            <div className="max-w-[600px] min-h-[100vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <Box sx={{ width: "100%" }}>
                    <header className="mb-4 text-[2rem] font-[600] text-primaryColor">
                        Experiences
                    </header>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs 
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons={false}
                            aria-label="scrollable auto tabs example"
                            sx={{
                                "& .MuiButtonBase-root.MuiTab-root": {
                                    color: "#acd7ff",
                                },
                                "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
                                    borderBottom: '1px solid',
                                    borderBottomColor: '#5de4c7',
                                    fontWeight: 400,
                                    color: '#5de4c7',
                                },
                                "& .MuiTabs-indicator": {
                                    display: "none"
                                },
                            }}
                        >
                            <Tab label="Shopdoora" {...a11yProps(0)} />
                            <Tab label="Tee Htwin" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Typography fontSize={"1.2rem"} color={"#acd7ff"} fontWeight={500}>
                            Junior Front-End Developer
                        </Typography>
                        <Typography color={"#acd7ff"} fontSize={"1rem"} marginTop={1}>
                            <span className="text-primaryColor italic">Shopdoora</span> | January 2023 - Present
                        </Typography>
                        <Stack direction={"column"} gap={1} marginTop={2}>
                            <ul className="list-outside list-disc px-3 xl:px-0">
                                <li className="text-primaryColor mb-2">
                                    <p className="text-[#acd7ff] font-light xl:text-[1.1rem] 2xl:text-[1.5rem]">
                                        Collaborated with cross-functional teams, including designers, testers, 
                                        and backend developers, to deliver high-quality features on tight timelines
                                    </p>
                                </li>
                                <li className="text-primaryColor mb-2">
                                    <p className="text-[#acd7ff] font-light xl:text-[1.1rem] 2xl:text-[1.5rem]">
                                        Developed and maintained micro-frontends using React, Next and others state managment 
                                        like Redux, Zustand.
                                    </p>
                                </li>
                                <li className="text-primaryColor mb-2">
                                    <p className="text-[#acd7ff] font-light xl:text-[1.1rem] 2xl:text-[1.5rem]">
                                        Implemented responsive design strategies and mobile-first development approach to ensure 
                                        seamless user experiences across all devices
                                    </p>
                                </li>
                                <li className="text-primaryColor mb-2">
                                    <p className="text-[#acd7ff] font-light xl:text-[1.1rem] 2xl:text-[1.5rem]">
                                        Worked alongside with five front-end developers for developing eCommerce service platforms
                                        for variety of seller, retailer, and vendor.
                                    </p>
                                </li>
                                <li className="text-primaryColor mb-2">
                                    <p className="text-[#acd7ff] font-light xl:text-[1.1rem] 2xl:text-[1.5rem]">
                                        Implemented and shipped the front-end of Aya Zay multi-seller web app for Aya Bank 
                                        whichs let users can buy various kinds of products at Aya Pay application.
                                    </p>
                                </li>
                            </ul>
                        </Stack>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography fontSize={"1.2rem"} color={"#acd7ff"} fontWeight={500}>
                            Junior Full-Stack Developer at <span className="text-primaryColor italic">Tee Htwin</span>
                        </Typography>
                        <Typography color={"#acd7ff"} fontSize={"1rem"} marginTop={1}>
                            November 2022 - Present
                        </Typography>
                        <Stack direction={"column"} gap={1} marginTop={2}>
                            <p className="text-[#acd7ff] font-light xl:text-[1.1rem] 2xl:text-[1.5rem]">
                                Implementing
                            </p>
                            <p className="text-[#acd7ff] xl:text-[1.1rem] 2xl:text-[1.5rem]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eligendi, vitae error harum, iusto corporis sint soluta, quod quas laudantium velit odio minus mollitia voluptate rem! Quis necessitatibus dolor vero!
                            </p>
                            <p className="text-[#acd7ff] xl:text-[1.1rem] 2xl:text-[1.5rem]">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse illo dolorum inventore?
                            </p>
                        </Stack> 
                    </TabPanel>
                </Box>
            </div>
        </section>
    );
}

export default ExpSection;