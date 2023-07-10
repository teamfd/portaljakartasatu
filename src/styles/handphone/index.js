import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";

export const HandphoneContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  paddingBottom: "70px",
  position: "relative",
  background: Colors.white,
  [theme.breakpoints.down(1043)]: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 0,
  },
}));

export const HandphoneImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "47%",
  height: "47%",
  paddingTop: "50px",
  paddingLeft: "100px",
  paddingRight: "50px",
  zIndex: "1",
  [theme.breakpoints.down("md")]: {
    width: "250px",
    height: "auto",
  },
  [theme.breakpoints.down(1043)]: {
    width: "35vw",
    alignItems: "center",
    paddingTop: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
}));

export const HandphoneContent = styled(Box)(() => ({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 1000,
  padding: "50px"
}));

export const HandphoneTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "46px",
  marginBottom: "20px",
  textAlign: "center",
  paddingBottom: "45px",
  color: "#004581",
  zIndex: "1",
  [theme.breakpoints.down(1440)]: {
    fontSize: "3.2vw",
    marginBottom:"2%"
  },
  [theme.breakpoints.down(1043)]: {
    fontSize: "6vw",
  },
}));

export const HandphoneDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  // letterSpacing: 1.25,
  marginBottom: "25px",
  maxWidth: 640,
  [theme.breakpoints.down(1440)]: {
    fontSize:"0.9vw",
    marginBottom: "1.5em",
  },
  [theme.breakpoints.down(1043)]: {
    fontSize:"1.5vw",
    maxWidth: 720,
  },
}));


export const GetInGoogle = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "160px",
  //paddingLeft:"100px",
  //paddingRight:"50px",
  [theme.breakpoints.down(1440)]: {
    width: "10vw",
    height: "auto",
  },
  [theme.breakpoints.down(1043)]: {
    width: "18vw",
    height: "auto",
  },
  
}));

//Divider style
export const dividerStyle = {
  marginLeft: '0%',
  marginRight: '2%',
  border: "0.1px solid black",
  opacity: "30%",
  marginBottom: "40px",
  "@media (max-width: 1440px)": {
    marginBottom: "5%"
  },
} 

// subtitle Style
export const subtitleStyle = {
  "@media (max-width: 1440px)": {
    fontSize:"1.3vw"
  },
  "@media (max-width: 1042px)": {
    fontSize :"2.2vw"
  },
}