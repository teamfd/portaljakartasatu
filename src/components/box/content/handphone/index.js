import React from "react";
// import { useTheme } from "@mui/material/styles";
import { Box, Divider, Typography } from "@mui/material";
import {
  HandphoneContainer,
  HandphoneContent,
  HandphoneDescription,
  HandphoneImage,
  HandphoneTitle,
  GetInGoogle,
  dividerStyle,
  subtitleStyle,
} from "../../../../styles/handphone";

function Handphone() {
  //const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HandphoneContainer>
      <Box
        position="absolute"
        top="-130px"
        backgroundColor="white"
        borderRadius="50%"
        width="100%"
        height="250px">
      </Box>


      <HandphoneImage src="/images/handphone/Group_1.png" />

      <HandphoneContent>
        <HandphoneTitle variant="h6">Jakarta Satu Mobile Apps</HandphoneTitle>
        <Typography
          variant="h6"
          paddingBottom="20px"
          fontWeight="bold"
          sx={subtitleStyle}>
          Satu Platform untuk beragam kebutuhan Data Spasial di Jakarta
        </Typography>
        <HandphoneDescription variant="subtitle2">
          Memudahkan kita dalam mencari informasi terkait geospasial di DKI Jakarta dimanapun anda berada
        </HandphoneDescription>
        <Divider
          sx={dividerStyle}
        />

        <Typography
          variant="h6"
          paddingBottom="20px"
          fontWeight="bold"
          sx={subtitleStyle}>
          Fitur Tematik
        </Typography>
        <HandphoneDescription variant="subtitle2">
          Dengan fitur tematik lengkap, memastikan penggunaannya mudah mengakses lebih cepat, efektif dan efisien
        </HandphoneDescription>


        <Divider
          sx={dividerStyle} />

        <Typography
          variant="h6"
          paddingBottom="20px"
          fontWeight="bold"
          sx={subtitleStyle}>
          Unduh
        </Typography>
        <HandphoneDescription variant="subtitle2">
          Dapatkan beragam informasi dengan mudah terkait data spasial, seperti peta seluruh Jakarta meupun per-Kelurahan. Data tersebut dapat diunduh sesuai kebutuhan dalam format ZIP dan PDF
        </HandphoneDescription>


        <Divider
          sx={dividerStyle} />

        <GetInGoogle
          src="/images/handphone/googleplay.png"
        />
      </HandphoneContent>
    </HandphoneContainer>



  );
}

export default Handphone;
