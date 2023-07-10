import React, { useState } from "react";
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom'
import {
    Drawer,
    IconButton,
    List,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import '../../App.css';
// import Switch from '@mui/material/Switch';
// import { styled } from '@mui/material/styles';
// import FormControlLabel from '@mui/material/FormControlLabel';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import ThreeDRotationRoundedIcon from '@mui/icons-material/ThreeDRotationRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ImageSearchRoundedIcon from '@mui/icons-material/ImageSearchRounded';
// import GTranslateRoundedIcon from '@mui/icons-material/GTranslateRounded';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CollectionsIcon from '@mui/icons-material/Collections';
import NextWeekRoundedIcon from '@mui/icons-material/NextWeekRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import IntegrationInstructionsRoundedIcon from '@mui/icons-material/IntegrationInstructionsRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import SwipeVerticalRoundedIcon from '@mui/icons-material/SwipeVerticalRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';

const useStyles = makeStyles(() => ({
    '@global': {
        '::-webkit-scrollbar': {
            width: '0.6em',
            display: 'block',
        },
        '::-webkit-scrollbar-button': {
            width: '2%',
            height: '2%',
            background: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            borderRadius: '30px',

        }
    },
    list: {
        "&:hover": {
            borderRadius: "30px"
        },
    },
    drawerPaper: {
        marginLeft: "-15px",
        borderRadius: "10px",
        backdropFilter: "blur(20px)",
        background: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.1)",
        width: "320px",
        height: "100%",
        padding: "10px",
    }
}));

// const MaterialUISwitch = styled(Switch)(({ theme }) => ({
//     width: 62,
//     height: 34,
//     padding: 7,
//     '& .MuiSwitch-switchBase': {
//       margin: 1,
//       padding: 0,
//       transform: 'translateX(6px)',
//       '&.Mui-checked': {
//         color: '#fff',
//         transform: 'translateX(22px)',
//         '& .MuiSwitch-thumb:before': {
//           backgroundImage: `url('/images/translate/IndonesiaFix.png')`
//         },
//         '& + .MuiSwitch-track': {
//           opacity: 1,
//           backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//         },
//       },
//     },
//     '& .MuiSwitch-thumb': {
//       backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
//       width: 32,
//       height: 32,
//       '&:before': {
//         content: "''",
//         position: 'absolute',
//         borderRadius: '50%',
//         width: '100%',
//         height: '100%',
//         left: 0,
//         top: 0,
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundImage: `url('/images/translate/InggrisFix.png')`
//       },
//     },
//     '& .MuiSwitch-track': {
//       opacity: 1,
//       backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//       borderRadius: 20 / 2,
//     },
//   }));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    const [openPeta, setOpenPeta] = React.useState(true);
    const handleClickPeta = () => {
        setOpenPeta(!openPeta);
    };
    const [openPeta3D, setOpenPeta3D] = React.useState(true);
    const handleClickPeta3D = () => {
        setOpenPeta3D(!openPeta3D);
    };
    const [openSubMenu, setOpenSubMenu] = React.useState(true);
    const handleClickSubMenu = () => {
        setOpenSubMenu(!openSubMenu);
    };
    const [openInformasi, setOpenInformasi] = React.useState(true);
    const handleClickInformasi = () => {
        setOpenInformasi(!openInformasi);
    };

    return (
        <>
            <Drawer
                classes={{ paper: classes.drawerPaper }}
                className={classes.listScroll}
                elevation={"0"}
                anchor={"left"}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <a href="/" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <img style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto', }} src="/images/navbar/navbar-orange.png" alt="" />
                </a>
                <Divider />
                <List>
                    <ListItemButton href="/" className={classes.list}>
                        <HomeRoundedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Beranda" />
                    </ListItemButton>
                    <ListItemButton className={classes.list} onClick={handleClickPeta}>
                        <MapRoundedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Peta" />
                        {openPeta ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openPeta} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton href="/interaktif" className={classes.list} sx={{ pl: 4 }}>
                                <SwipeVerticalRoundedIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Interaktif" />
                            </ListItemButton>
                            <ListItemButton href="/tematik" className={classes.list} sx={{ pl: 4 }}>
                                <BrushRoundedIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Tematik" />
                            </ListItemButton>
                            <ListItemButton className={classes.list} sx={{ pl: 4 }} onClick={handleClickPeta3D}>
                                <ViewInArRoundedIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="3D" />
                                {openPeta3D ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openPeta3D} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton className={classes.list} sx={{ pl: 6 }}>
                                        <PublicRoundedIcon style={{ marginRight: "10px" }} />
                                        <ListItemText primary="3D Basemaps" />
                                    </ListItemButton>
                                    <ListItemButton className={classes.list} sx={{ pl: 6 }}>
                                        <ThreeDRotationRoundedIcon style={{ marginRight: "10px" }} />
                                        <ListItemText primary="3D Transit Orientied" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>
                    <ListItemButton href="/IRK" className={classes.list}>
                        <HomeRoundedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="IRK" />
                    </ListItemButton>
                    <ListItemButton className={classes.list} onClick={handleClickSubMenu}>
                        <DownloadRoundedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Unduh" />
                        {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton className={classes.list} sx={{ pl: 4 }}>
                                <DownloadingRoundedIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Peta Jakarta" />
                            </ListItemButton>
                            <ListItemButton className={classes.list} sx={{ pl: 4 }}>
                                <LocalPrintshopRoundedIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Cetak Peta Kelurahan" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton className={classes.list} onClick={handleClickInformasi}>
                        <InfoRoundedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Informasi" />
                        {openInformasi ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openInformasi} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component={RouterLink} to="/berita" className={classes.list} sx={{ pl: 4 }}>
                                <NewspaperIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Berita" />
                            </ListItemButton>
                            <ListItemButton className={classes.list} sx={{ pl: 4 }}>
                                <MenuBookRoundedIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Panduan Jakarta Satu" />
                            </ListItemButton>
                            <ListItemButton className={classes.list} sx={{ pl: 4 }}>
                                <NextWeekRoundedIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Publikasi" />
                            </ListItemButton>
                            <ListItemButton className={classes.list} sx={{ pl: 4 }}>
                                <CollectionsIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Galeri" />
                            </ListItemButton>
                            <ListItemButton className={classes.list} sx={{ pl: 4 }}>
                                <EmojiEventsIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Penghargaan" />
                            </ListItemButton>
                            <ListItemButton className={classes.list} sx={{ pl: 4 }}>
                                <IntegrationInstructionsRoundedIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Integrasi Sistem" />
                            </ListItemButton>
                            <ListItemButton className={classes.list} sx={{ pl: 4 }}>
                                <AccountTreeRoundedIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="Data API" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton className={classes.list}>
                        <ImageSearchRoundedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Research" />
                    </ListItemButton>
                    <ListItemButton className={classes.list}>
                        {/* <GTranslateRoundedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="ID | ENG" />
                        <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />} /> */}
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default DrawerComponent;
