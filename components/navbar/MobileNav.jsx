import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from "@mui/material/Paper";

import HomeIcon from '../icons/HomeIcon';
import AboutIcon from '../icons/AboutIcon';
import ProjectIcon from '../icons/ProjectIcon';
import ContactIcon from '../icons/ContactIcon';

const MobileNav = () => {

    const [value, setValue] = useState(0);

    return (
        <Paper elevation={1} sx={{
            position: "fixed",
            bottom: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: '10',
            display: { md: "block", lg: "none" }
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    backgroundColor: "#000000",
                    '& .MuiBottomNavigationAction-label': {
                        fontWeight: 500,
                        color: '#FFFFFF',
                    },
                    height: "55px"
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="About" icon={<AboutIcon />} />
                <BottomNavigationAction label="Projects" icon={<ProjectIcon />} />
                <BottomNavigationAction label="Contact" icon={<ContactIcon />} />
            </BottomNavigation>
        </Paper>
    );
}

export default MobileNav;