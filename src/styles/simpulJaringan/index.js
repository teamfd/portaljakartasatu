import { Divider, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
//import Carousel from "react-material-ui-carousel";

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingBottom: "100px",
  //background: Colors.light_gray,

}));

export const BoxContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "90%",
  padding: "20px",

}));


// background image 

export const BoxImage2 = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "700px",
  top: "300px",
  left: "-4vh",
  height: "720px",

  position: "absolute"

}));

// ========== Judul dan Deskripsi ===================

// Judul

export const BoxTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "46px",
  textAlign: "center",
  marginBottom: "2%",
  color: "#004581",
  [theme.breakpoints.down(1440)]: {
    fontSize: "3.2vw",
  },
  [theme.breakpoints.down(1043)]: {
    fontSize: "6vw",
  },
}));

// Deskripsi

export const BoxDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 2,
  marginBottom: "3em",
  textAlign: "center",
  paddingLeft: "179px",
  paddingRight: "179px",
  marginTop: "5%",
  [theme.breakpoints.down(1440)]: {
    fontSize: "1.1vw",
    paddingLeft: "15vw",
    paddingRight: "15vw",
  },
  [theme.breakpoints.down(1043)]: {
    fontSize: "2vw",
    paddingLeft: "0vw",
    paddingRight: "0vw",
  }
}));


// Garis

export const Dividers = () => {

  return (
    <div>

      <Divider
        color="#1455A3"
        sx={{
          // marginLeft: '47%',
          // marginRight: '47%',
          height: 3, 
          width: '7%',
          // marginBottom: "50px",
          margin : "auto"
          // "@media (max-width: 1440px)": {
          //   alignItems: "center"
          // },
        }} />

    </div>

  )
}

// ================= end ==================


// ========== button logo dan title ============ 

export const efekHover = {
  width: "80%",
  borderRadius: "15%",
  display: "flex",
  flexDirection: 'column',
  alignItems: "center",
  paddingTop: "10%",
  // padding:"20%",
  "&:hover": {
    boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.1)",
    bgcolor: "white"
  },
  "@media (max-width: 600px)": {
    height : "120%",
    paddingTop: "1%",
  }
}



// Logo

export const BoxImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  height: "80px",
  [theme.breakpoints.down(1400)]: {
    height: "4vw"
  },
  [theme.breakpoints.down(1042)]: {
    height: "9vw"
  },
}));


// Title Logo

export const textButton = {
  fontSize: "15px",
  textTransform: "none",
  height: "100px",
  color: "black",
  paddingTop: "10%",
  margin: "5%",
  textAlign: "center",
  "@media (max-width: 1400px)": {
    fontSize: "1vw",
  },
  "@media (max-width: 1043px)": {
    fontSize: "2vw",
  },
  "@media (max-width: 600px)": {
    height:"30%"
  },
}


// penampung logo dan title

export const items2 = [

  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/0d8843de756f47fb8c17e132912fea9e/data', title: 'Badan Perencanaan Pembangunan Daerah', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/badan-perencanaan-pembangunan-daerah-2' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/3031699e8b0945f19e26d6c319090118/data', title: 'Dinas Bina Marga', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bina-marga' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/8b1ba002c71f45788f99676e2fe0f6a4/data', title: 'Badan Pengelolaan Aset Daerah', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bpad-1' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/f92d9f17cd714659877d214651473df4/data', title: 'Badan Pertanahan Nasional', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/badan-pertanahan-nasional' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/e6680abeecfc4246ae4e3318e0024220/data', title: 'Badan Pendapatan Daerah', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bapenda' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/af6de44269394df3a495b86d13490fb1/data', title: 'Badan Penanggulangan Bencana Daerah', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bpbd' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/8aead6a0d9384c21a16bbc63833d0210/data', title: 'Dinas Penanggulangan Kebakaran dan Penyelamatan', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/damkar-1' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/17689124df454a3384a9192460b2fec6/data', title: 'Dinas Pendidikan', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-pendidikan' },
  
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/e6680abeecfc4246ae4e3318e0024220/data', title: 'Badan Pendapatan Daerah', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bapenda' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/af6de44269394df3a495b86d13490fb1/data', title: 'Badan Penanggulangan Bencana Daerah', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bpbd' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/8aead6a0d9384c21a16bbc63833d0210/data', title: 'Dinas Penanggulangan Kebakaran dan Penyelamatan', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/damkar-1' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/17689124df454a3384a9192460b2fec6/data', title: 'Dinas Pendidikan', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-pendidikan' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/0d8843de756f47fb8c17e132912fea9e/data', title: 'Badan Perencanaan Pembangunan Daerah', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/badan-perencanaan-pembangunan-daerah-2' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/3031699e8b0945f19e26d6c319090118/data', title: 'Dinas Bina Marga', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bina-marga' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/8b1ba002c71f45788f99676e2fe0f6a4/data', title: 'Badan Pengelolaan Aset Daerah', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bpad-1' },
  { imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/f92d9f17cd714659877d214651473df4/data', title: 'Badan Pertanahan Nasional', link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/badan-pertanahan-nasional' },

];

// ===================== end =====================


// ========= button Lihat Semua ==========

export const StyleButton = {
  width: "190px",
  height: "60px",
  borderRadius: 10,
  backgroundColor: "transparent",
  color: "blue",
  margin: "0 auto",
  "&:hover": {
    backgroundColor: "#1455A3",
    color: "white"
  }
}