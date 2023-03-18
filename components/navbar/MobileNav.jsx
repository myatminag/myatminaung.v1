import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from "@mui/material/Paper";

import HomeIcon from '../icons/HomeIcon';
import AboutIcon from '../icons/AboutIcon';
import ProjectIcon from '../icons/ProjectIcon';
import ContactIcon from '../icons/ContactIcon';

const MobileNav = ({ homeRef, aboutRef, projectRef, contactRef }) => {

    const navigation = [
        { id: 1, label: "Home", icon: <HomeIcon />, ref: homeRef },
        { id: 2, label: "About", icon: <AboutIcon />, ref: aboutRef },
        { id: 3, label: "Project", icon: <ProjectIcon />, ref: projectRef },
        { id: 4, label: "Contact", icon: <ContactIcon />, ref: contactRef },
    ]

    const [value, setValue] = useState(0);

    const handleScroll = (e, newValue) => {
        setValue(newValue);
        window.scrollTo({
            top: navigation[newValue].ref.current.offsetTop,
            behavior: "smooth"
        })
    };

    return (
        <Paper elevation={1} sx={{
            position: "fixed",
            bottom: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: '10',
            display: { md: "block", lg: "none" },
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={handleScroll}
                sx={{
                    '& .MuiBottomNavigationAction-label': {
                        fontWeight: 500,
                        color: '#FFFFFF',
                        marginTop: "3px"
                    },
                    height: "55px",
                    backgroundColor: "#2D3142",
                    backdropFilter: "blur(5px)"
                }}
            >
                {navigation.map(data => (
                    <BottomNavigationAction key={data.id} label={data.label} icon={data.icon} />
                ))}
            </BottomNavigation>
        </Paper>
    );
}

export default MobileNav;