import { ListItem, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
//import { Colors } from "../theme";

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  paddingBottom: "200px",
  //background: Colors.light_gray,
  [theme.breakpoints.down(1043)]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const DashboarImage = {
  width: "630px",
  height: "430px",
  position: "relative",
  "@media (max-width: 1440px)": {
    width: "35vw",
    height: "25vw"
  },
  "@media (max-width: 1043px)": {
    width: "60vw",
    height: "40vw",
    marginBottom: "5%"
  },
}

// export const DashboardImage = styled("img")(({ src, theme }) => ({
//   src: `url(${src})`,
//   // backgroundImage: `url(${src})`,
//   // backgroundRepeat: "no-repeat",
//   // backgroundPosition: "center",
//   width: "630px",
//   height: "430px",
//   paddingTop: "80px",
//   position: "relative",
//   [theme.breakpoints.down("md")]: {
//     width: "400px",
//     height: "auto",
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: "250px",
//     height: "auto",
//   },
// }));

export const DashboardContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px",
  position: "relative",
  "@media (max-width: 1043px)": {
    maxWidth: "90%"
  },
}));

export const DashboardButtonLihat = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  //maxWidth: 550,
  //padding: "20px",
}));

export const DashboardTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "33px",
  marginBottom: "30px",
  textAlign: "center",
  color: "#004581",
  maxWidth: 630,
  [theme.breakpoints.down(1440)]: {
    fontSize: "2.5vw",
  },
  [theme.breakpoints.down(1230)]: {
    maxWidth: 550,
  },
  [theme.breakpoints.down(1044)]: {
    fontSize: "4.5vw",
    maxWidth: "100%",
    marginBottom: "3%",
  },
}));

export const DashboardDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const StyleButton = {
  width: "210px",
  height: "70px",
  borderRadius: 10,
  backgroundColor: "#ED783E",
  boxShadow: 5
}

//menampung list menu

export const menu = [
  { id: 1, text: 'Dashboard Ruang Terbuka Hijau', imgSrc: '/images/dashboard/tes.png' },
  { id: 2, text: 'Dashboard Luas Zona RDTR 2014', imgSrc: '/images/dashboard/dashboard.png' },
  { id: 3, text: 'Dashboard Penggunaan Lahan Wilayah', imgSrc: '/images/dashboard/dashboard.png' },
  { id: 4, text: 'Dashboard Informasi Banjir', imgSrc: '/images/dashboard/dashboard.png' },
  { id: 5, text: 'Dashboard Aset', imgSrc: '/images/dashboard/dashboard.png' },
  { id: 6, text: 'Dashboard Luas Zona RDTR 2014', imgSrc: '/images/dashboard/dashboard.png' },
  { id: 7, text: 'Dashboard Informasi Banjir', imgSrc: '/images/dashboard/dashboard.png' },
  { id: 8, text: 'Dashboard Ruang Terbuka Hijau', imgSrc: '/images/dashboard/dashboard.png' },
  { id: 9, text: 'Dashboard Penggunaan Lahan Wilayah', imgSrc: '/images/dashboard/dashboard.png' },
  { id: 10, text: 'Dashboard Aset', imgSrc: '/images/dashboard/dashboard.png' },

];

// styling efek & bentuk highlight
export const ListItemStyled = styled(ListItem)` 
    
    transform: translateY(-10%);  
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
    &:focus {
      transform: translateY(0);
      background-color: white;
      padding: 3px 13px;  
      border-radius: 10vw 10vw 10vw 10vw;
      
    }
  `;


//merubah style text didalam list view
export const listTextStyle = {
  fontSize: "20px",
  "@media (max-width: 1440px)": {
    fontSize: "1.5vw",
    height: "2.5vw"
  },
  "@media (max-width: 1043px)": {
    fontSize: "3vw",
    height: "4vw"
  },
  "@media (max-width: 600px)": {
    fontSize: "3vw",
    height: "3vw"
  },
}

//merubah style bentuk dari list
export const listStyle = {
  overflow: "auto",
  height: "400px",
  direction: "rtl",
  "::-webkit-scrollbar": {
    width: "10px",
  },
  "::-webkit-scrollbar-track": {
    background: "white",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#1455A3",
    borderRadius: "5px",
  },
  "::-moz-scrollbar": {
    width: "10px",
  },
  "::-moz-scrollbar-track": {
    background: "white",
  },
  "::-moz-scrollbar-thumb": {
    backgroundColor: "#1455A3",
    borderRadius: "5px",
  },

  "@media (max-width: 1440px)": {
    height: "28vw",
  },

  "@media (max-width: 1043px)": {
    height: "50vw",
  },

  "@media (max-width: 425px)": {
    height: "60vw",
  },

}

//merubah style dari container list
export const listContainer = {
  display: "flex",
  flexDirection: "row",
  padding: "50px",
  paddingTop: "0px",
  alignItems: "center",
  justifyContent: "center",
  // add the following styles for small screens
  "@media (max-width: 1043px)": {
    flexDirection: "column-reverse",
    alignItems: "center",
    padding: "20px",
    gap: "20px",
  },
}