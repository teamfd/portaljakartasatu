import { Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "0px 0px",
  paddingBottom: "100px",
  marginTop: "150px",
  //margin:"70px",
  //background: Colors.light_gray,
  [theme.breakpoints.down(1043)]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down(762)]: {
    marginTop: "10vw"
  },
}));

export const BoxImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "80%",
  position: "relative",
  [theme.breakpoints.down(1440)]: {
    width: "29vw",
  },
  [theme.breakpoints.down(1043)]: {
    width: "55vw",
    marginBottom: "15%"
  },
}));

export const BoxImageLatar = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "43%",
  top: "2%",
  left: "-2%",
  position: "absolute",
  [theme.breakpoints.down("xl")]: {
    width: "43vw",

  },
  [theme.breakpoints.down(1075)]: {
    top: "1vw",
    width: "60vw",
  },

}));


export const BoxContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "600px",
  paddingRight: "60px",
  paddingLeft: "0px",
  paddingBottom: "0px",
  [theme.breakpoints.down(1440)]: {
    width: "40vw",
  },
  [theme.breakpoints.down(1043)]: {
    width: "60vw",
    paddingRight: "0px"
  },
}));

export const BoxContent2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "600px",
  paddingBottom: "0px",
  [theme.breakpoints.down(1440)]: {
    width: "25vw",
  },
  [theme.breakpoints.down(1043)]: {
    width: "55vw",
  },
}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  marginBottom: "20px",
  color: Colors.title,
  position: "relative",
  [theme.breakpoints.down(1440)]: {
    fontSize: "3.3vw",
  },
  [theme.breakpoints.down(1043)]: {
    fontSize: "6.5vw",
  },
}));

export const BoxDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.8,
  marginBottom: "3em",
  maxWidth: "100%",
  position: "relative",
  [theme.breakpoints.down(1043)]: {
    fontSize: "2vw",
  },
}));

//BUTTON

export const BoxImageButton = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "30%",
  //position: "relative",
  padding: "8%",
  marginLeft: "4%",
  marginRight: "4%",
}));

export const ButtonDialog = styled(Button)(({ theme }) => ({
  //height: "100px",
  width: "89%",
  height: "65%",
  fontSize: "27px",
  marginBottom: "50px",
  backgroundColor: "white",
  color: Colors.title,
  justifyContent: "left",
  textTransform: "none",
  "&:hover": {
    //border: "1px solid #00FF00",
    //color: "gray",
    //backgroundColor: "lightblue",

    //opacity: 0,
  },
  [theme.breakpoints.down(1440)]: {
    //width: "10%",
    //height: "auto",
    width: "25vw",
    fontSize: "2vw"
  },
  [theme.breakpoints.down(1043)]: {
    //width: "10%",
    //height: "auto",
    width: "55vw",
    height: "15vw",
    fontSize: "4vw",
    marginBottom: "8vw",
  },
}));

export const iconButtonStyles = {
  borderRadius: 7,
  boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.1)",
  "@media (max-width: 1043px)": {
    borderRadius: "3vw"
  },
}

export const iconButtonStyles2 = {

  width: "100%",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    //border: "1px solid #00FF00",
    //color: "gray",
    backgroundColor: "white",
    //opacity: 0,
  },


}

export const hoverItem = {
  textAlign: "left",
  color: "black",
  fontSize: "15px",
  //paddingRight: "10px",
  textTransform: "none",
  lineHeight: 1.5,
  "@media (max-width: 1440px)": {
    fontSize: "1.1vw",
  },
  "@media (max-width: 1042px)": {
    fontSize: "2.3vw",
  },
  "@media (max-width: 470px)": {
    paddingTop: "2vw",
  },
}

export const TypoHoverTitle = {
  color: Colors.title,
  textTransform: "none",
  fontSize: "20px",
  width: "80px",
  marginRight:"75%",
  "@media (max-width: 1440px)": {
    fontSize: "1.4vw",
  },
  "@media (max-width: 1042px)": {
    fontSize: "3.5vw",
  },
  "@media (max-width: 600px)": {
    fontSize: "3vw",
  },
}

export const TypoHoverTitle2 = {
  color: Colors.title,
  textTransform: "none",
  fontSize: "20px",
  marginLeft: "10px",
  marginBottom:"10px",
  "@media (max-width: 1440px)": {
    fontSize: "1.4vw",
  },
  "@media (max-width: 1042px)": {
    fontSize: "3.5vw",
  },
}

export const ImageButtonHover = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "80px",
  position: "relative",
  marginRight: "10%",
  "@media (max-width: 1440px)": {
    width: "4vw",
  },
  "@media (max-width: 1042px)": {
    width: "15vw",
  },
  "@media (max-width: 600px)": {
    width: "9vw",
  },
}));


//Popover 

export const BoxContainerHover1 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "400px",
  height: "170px",
  padding: "30px",
  [theme.breakpoints.down(1440)]: {
    width: "28vw",
    height: "12vw",
  },
  [theme.breakpoints.down(1043)]: {
    width: "60vw",
    height: "25vw",
    padding: "2vw"
  },
}));

export const BoxContainerHover2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "400px",
  height: "250px",
  padding: "30px",
  [theme.breakpoints.down(1440)]: {
    width: "28vw",
    height: "17vw",
  },
  [theme.breakpoints.down(1043)]: {
    width: "60vw",
    height: "38vw",
    padding: "2vw"
  },
}));

//Settingan konten dialog

export const ContentButtonHover = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  //maxWidth: 460,
  //padding: "55px",
  //paddingTop: "105px",
  //paddingBottom: "150px",
  "@media (max-width: 1440px)": {
    padding:"3%"
  },
  "@media (max-width: 1043px)": {
    paddingLeft: "3%",
    paddingRight: "3%",
    marginLeft:"3%"
  },
  "@media (max-width: 600px)": {
    paddingTop:"1%"
  },
}));

//button dialognya

export const ButtonHoverAction = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: "8%",
  paddingBottom: "3%"
  //maxWidth: 460,
  //padding: "55px",
  //paddingTop: "105px",
  //paddingBottom: "150px",
}));


/*

  <BoxContent2>
                  
                    <Typography>
                      Interaktif
                    </Typography>  

                    <BoxImage3 
                    src="/images/menuPeta/interactive.png" 
                    justifyContent="center"/>
                  </BoxContent2>
                  
                  <BoxContent2>


                  <Typography
                    sx={{
                      fontSize:"14px",
                    }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                    </Typography>  

                  </BoxContent2>

*/