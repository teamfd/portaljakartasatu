import React, { useState } from "react";
import {
  AppBar,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import DrawerComponent from "./Drawer";
import {
  Nav,
  NavContainer,
  // NavLogo,
  NavItem,
} from '../../styles/appbar/index';
import { menuItems } from '../../menuItems';
import MenuItems from './MenuItems';
import '../../App.css';
// import Switch from '@mui/material/Switch';
// import { styled } from '@mui/material/styles';
// import FormControlLabel from '@mui/material/FormControlLabel';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 400) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  // const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  //   width: 62,
  //   height: 34,
  //   padding: 7,
  //   '& .MuiSwitch-switchBase': {
  //     margin: 1,
  //     padding: 0,
  //     transform: 'translateX(6px)',
  //     '&.Mui-checked': {
  //       color: '#fff',
  //       transform: 'translateX(22px)',
  //       '& .MuiSwitch-thumb:before': {
  //         backgroundImage: `url('/images/translate/IndonesiaFix.png')`
  //       },
  //       '& + .MuiSwitch-track': {
  //         opacity: 1,
  //         backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
  //       },
  //     },
  //   },
  //   '& .MuiSwitch-thumb': {
  //     backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
  //     width: 32,
  //     height: 32,
  //     '&:before': {
  //       content: "''",
  //       position: 'absolute',
  //       borderRadius: '50%',
  //       width: '100%',
  //       height: '100%',
  //       left: 0,
  //       top: 0,
  //       backgroundRepeat: 'no-repeat',
  //       backgroundPosition: 'center',
  //       backgroundSize: 'cover',
  //       backgroundImage: `url('/images/translate/InggrisFix.png')`
  //     },
  //   },
  //   '& .MuiSwitch-track': {
  //     opacity: 1,
  //     backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
  //     borderRadius: 20 / 2,
  //   },
  // }));

  return (
    <AppBar className="navbar" elevation={0}>
      <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <NavContainer>
          <a href="/" style={{ alignItems: "center", display: "flex" }}>
            <img style={{ width: '180px' }} src="/images/navbar/navbar-orange.png" alt="" />
          </a>
          {isMobile ? (<DrawerComponent />) : (
            <NavItem className="menus">
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems
                    items={menu}
                    key={index}
                    depthLevel={depthLevel} />
                );
              })}
              {/* <FormControlLabel style={{ marginLeft: '20px', marginRight: '-10px' }} control={<MaterialUISwitch defaultChecked />} /> */}
            </NavItem>
          )}
        </NavContainer>
      </Nav>
    </AppBar>
  );
}
export default Navbar;
