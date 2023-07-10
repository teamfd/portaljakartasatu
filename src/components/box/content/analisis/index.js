import React from 'react'
import { Button } from "@mui/material";
import {
  BoxContainer,
  BoxContent,
  BoxContent2,
  //boxDefault,
  BoxDescription,
  BoxImage,
  BoxTitle,
  iconButtonStyles3,
 
} from "../../../../styles/dataAnalisis/index.js";
import { ButtonPilihan } from "./buttonPilihan";
import { Box } from '@mui/system';


function dataAnalisis() {
  return (
    <BoxContainer>

      <BoxContent> 

        <BoxImage src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/cbbf39437984447091f5e1608fc56d70/data" />

      </BoxContent>

      <BoxContent2>
        <BoxTitle variant="h2">
          Unduh Data Spasial Jakarta, dimanapun kamu berada
        </BoxTitle>

        <BoxDescription variant="subtitle">
          Dapatkan sumber informasi data spasial di Jakarta secara realtime, tersedia dalam format pdf dan shp
        </BoxDescription>

        <ButtonPilihan></ButtonPilihan>

        <Box
          justifyContent="center"
          alignItems="center">

          <Button
            //disabled
            sx={iconButtonStyles3}
            variant="contained"
            size="large">
            Lihat Semua
          </Button>

        </Box>

      </BoxContent2>

    </BoxContainer>
  )
}

export default dataAnalisis


/*
     
    

     <Box
       justifyContent="center"
       alignItems="center"
       sx={boxDefault}>
       
       <Button 
         sx={iconButtonStyles} 
         variant="contained"
         size="large"
         color="success"
         startIcon={<Avatar src={'images/dataAnalisis/Apotek1.png'} />}> 
           Apotek
       </Button>

       <Button 
         sx={iconButtonStyles} 
         variant="contained"
         size="large"
         startIcon={<Avatar src={'images/dataAnalisis/Batas_Administrasi.png'} />}> 
           Batas Administrasi
       </Button>

       <Button 
         sx={iconButtonStyles} 
         variant="contained"
         size="large"
         startIcon={<Avatar src={'images/dataAnalisis/Bus_Trans_Jakarta.png'} />}> 
           Transjakarta
       </Button>

       <Button 
         sx={iconButtonStyles} 
         variant="contained"
         size="large"
         startIcon={<Avatar src={'images/dataAnalisis/Halte.png'} />}> 
           Batas Administrasi
       </Button>

     </Box>
     
     <Box
       justifyContent="center"
       alignItems="center"
       sx={boxDefault}>

       <Button 
         sx={iconButtonStyles2}
         variant="contained"
         size="large"> 
           Lihat Semua
       </Button>
       
     </Box>
*/