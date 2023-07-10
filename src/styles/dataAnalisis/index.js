import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  paddingBottom: "50px",
  //background: Colors.light_gray,
  [theme.breakpoints.down(1043)]: {
    flexDirection: "column",
    alignItems: "center",
  },
})); 

export const BoxImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "500px",
  [theme.breakpoints.down(1443)]: {
    width: "34vw",
    height: "auto",
  },
  [theme.breakpoints.down(1043)]: {
    width: "55vw",
  },
}));

export const BoxContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  maxWidth: 450,
  padding: "20px",
  paddingLeft: "20px",
  marginLeft: "50px",
  [theme.breakpoints.down(1440)]: {
    marginLeft: "4vw",
  },
  [theme.breakpoints.down(1043)]: {
    marginLeft: 0,
    paddingBottom: "1vw",
  },
}));

export const BoxContent2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  //maxWidth: 800,
  padding: "30px",
  alignItems: "center",
}));


export const BoxTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.1,
  fontSize: "46px",
  textAlign: "center",
  marginBottom: "30px",
  maxWidth: 800,
  color: "#004581",
  [theme.breakpoints.down(1440)]: {
    fontSize: "3.2vw",
    marginBottom: "2vw",
  },
  [theme.breakpoints.down(1043)]: {
    maxWidth: "78vw",
    fontSize: "6vw",
    marginBottom: "4vw",
  },
  [theme.breakpoints.down(600)]: {
    marginBottom: "7vw",
  },
  [theme.breakpoints.down(315)]: {
    maxWidth: "100%",
    fontSize: "6vw",
    marginBottom: "4vw",
  },
}));

export const BoxDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 2,
  marginBottom: "3em",
  textAlign: "center",
  maxWidth: 480,
  [theme.breakpoints.down(1440)]: {
    marginBottom: "2vw",
  },
  [theme.breakpoints.down(1043)]: {
    maxWidth: "65vw",
    fontSize: "2vw",
    marginBottom: "5vw",
  },
  [theme.breakpoints.down(600)]: {
    maxWidth: "75vw",
    fontSize: "2.5vw",
  },
}));


export const boxDefault = {
  //height: 100,
  //border: "1px solid black",
  padding: 2,
  m: 1,
  display: "flex",
};


// StyleButtonPilihan

export const iconButtonStyles = {
  height: "143px",
  width: "130px",
  fontSize: "10px",
  backgroundColor: "rgb(101, 158, 188, 0.2)",
  borderRadius: 8,
  textTransform: "none",
  margin: "20px",
  "&:hover": {
    //border: "1px solid #00FF00",
    //color: "gray",
    backgroundColor: "rgb(101, 158, 188, 0.6)",
    //opacity: "70%",
  },
  "@media (max-width: 1400px)": {
    width: "9vw",
    height: "10vw",
    margin: "0.3vw",
    borderRadius: "2vw",
  },
  "@media (max-width: 1042px)": {
    width: "15vw",
    height: "17vw",
    margin: "2vw",
  },
}

export const iconButtonStyles2 = {
  height: "143px",
  width: "130px",
  fontSize: "10px",
  backgroundColor: "rgb(214, 255, 182, 0.5)",
  borderRadius: 8,
  textTransform: "none",
  margin: "20px",
  "&:hover": {
    //border: "1px solid #00FF00",
    //color: "gray",
    backgroundColor: "rgb(214, 255, 182, 4)",
    //opacity: "70%",
  },
  "@media (max-width: 1400px)": {
    width: "9vw",
    height: "10vw",
    borderRadius: "2vw",
  },
  "@media (max-width: 1042px)": {
    width: "15vw",
    height: "17vw",
  },
}

export const iconButtonStyles3 = {
  height: "65px",
  width: "200px",
  fontSize: "18px",
  backgroundColor: "#ED783E",
  borderRadius: 8,
  textTransform: "none",
  margin: "70px",
  boxShadow: "3px 3px 8px 1px rgba(0, 0, 0, 0.25)",
  "&:hover": {
    //border: "1px solid #00FF00",
    //color: "gray",
    backgroundColor: "white",
    color: "#ED783E",
    border: "2px solid #ED783E",
    //opacity: "70%",
  },
  "@media (max-width: 1440px)": {
    margin: "3.5vw",
    height: "4.5vw",
    width: "14vw",
    fontSize: "1.3vw"
  },
  "@media (max-width: 1042px)": {
    margin: "8vw",
    height: "7vw",
    width: "21vw",
    fontSize: "2vw"
  },
  "@media (max-width: 600px)": {
    margin: "8vw",
    height: "9vw",
    width: "35vw",
    fontSize: "2.5vw"
  },

}


export const BoxImage2 = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "60px",
  [theme.breakpoints.down(1440)]: {
    width: "4vw"
  },
  [theme.breakpoints.down(1043)]: {
    width: "7vw"
  },
  [theme.breakpoints.down(600)]: {
    width: "9vw",
    marginLeft: "2%",
    marginRight: "5vw"
  },
}));

export const judulButton = {
  color: "black",
  "@media (max-width: 1440px)": {
    fontSize: "1.1vw"
  },
  "@media (max-width: 1042px)": {
    fontSize: "2vw"
  },
  "@media (max-width: 600px)": {
    fontSize: "4vw",
  },
}

export const button600px = {
  "@media (max-width: 600px)": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  }, //merubah posisi icon dan judul
}