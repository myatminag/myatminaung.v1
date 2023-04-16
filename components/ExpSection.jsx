
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

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
        <section ref={expRef} className="pt-[4rem] lg:pt-0 lg:px-[15%]">
            <div className="max-w-[600px] 2xl:max-w-[900px] lg:min-h-[100vh] lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <Box sx={{ width: "100%" }}>
                    <header className="mb-4 text-[1.6rem] font-[600] text-primaryColor">
                        {"Where I've worked..."}
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
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <p className="text-[1.2rem] text-[#acd7ff] font-[500]">
                            Junior Front-End Developer
                        </p>
                        <p className="text-[#acd7ff] mt-[6px]">
                            January 2023 - Present | <span className="text-primaryColor italic">Shopdoora</span>
                        </p>
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
                                        Developed and maintained micro-frontends using React, Next and state managment libraries
                                        like Redux and Zustand.
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
                                        which let users can buy various kinds of products at Aya Pay application.
                                    </p>
                                </li>
                            </ul>
                        </Stack>
                    </TabPanel>
                </Box>
            </div>
        </section>
    );
}

export default ExpSection;