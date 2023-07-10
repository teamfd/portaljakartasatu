import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import Carousel from "react-material-ui-carousel";
import {
  Dividers,
  BoxContainer,
  BoxContent,
  BoxTitle,
  BoxImage2,
  //GridLogo1,
  //GridLogo2,
  StyleButton,
  BoxDescription,
  efekHover,
  BoxImage,
  textButton,
  items2,
  //GridLogo3,
  //logos,
} from "../../../../styles/simpulJaringan";


const App = () => {


  /* const items = [
     // { name: <GridLogo1 /> },
     // { name: <GridLogo2 /> },
     // { name: <GridLogo3 /> },
 
     //carousel 1
 
     //carousel 2
     { name: <GridLogo4 /> }
 
   ];
 */

  const isMobile = useMediaQuery("(max-width: 1042px)"); // Menentukan apakah tampilan berada pada layar handphone
  const pageSize = isMobile ? 4 : 8; // Jumlah logo dan judul yang tampil di setiap halaman carousel
  const pages = Math.ceil(items2.length / pageSize); // Jumlah halaman carousel

  // Membagi data logo dan judul ke dalam halaman-halaman
  const carouselPages = [];
  for (let i = 0; i < pages; i++) {
    carouselPages.push(items2.slice(i * pageSize, (i + 1) * pageSize));
  }
  

  return (
    <BoxContainer>
      <BoxContent>
        <BoxImage2 src="/images/simpulJaringan/bentuk.png" />
        <BoxTitle>Simpul Jaringan Spasial</BoxTitle>

        <Dividers />

        <BoxDescription variant="subtitle">
          Integrasi data spasial dari seluruh kumpulan perangkat daerah atau unit kerja, kelembagaan, atau institusi lainnya di lingkungan Pemerintah Provinsi DKI Jakarta
        </BoxDescription>

        <Carousel
          stopAutoPlayOnHover={true}
          navButtonsAlwaysVisible={true}
          swipe={true}
          animation={"slide"}
          IndicatorIcon={false}

          //untuk style indikator
          indicatorProps={{
            style: {
              display: "none"
            }
          }}
          //untuk style button pindah =
          navButtonsProps={{
            style: {
              backgroundColor: "#1455A3",
              transform: isMobile ? "translateY(-50%) scale(0.7)" : "translateY(-50%)"
              
            }
          }}>


          {carouselPages.map((buttonPage, pageIndex) => (
            <Grid
              container spacing={2}
              key={pageIndex}
              sx={{
                flexGrow: 1,
                paddingLeft: "5%",
                paddingRight: "5%",
                // height: "10%"
              }}>

              {buttonPage.map((button, index) => (
                

                <Grid
                  item
                  key={index}
                  xs={6}
                  sm={6}
                  md={isMobile ? 6 : 3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}>

                  <Button
                    sx={efekHover}
                    href={button.link}>

                    <BoxImage src={button.imageSrc} alt={`Button ${index}`} />

                    <Typography variant="h6" sx={textButton}>
                      {button.title}
                    </Typography>

                  </Button>

                </Grid>

              ))}
            </Grid>
          ))}

        </Carousel>

        <Button component={RouterLink} to="/simpul-jaringan" variant="contained" sx={StyleButton}>
          <Typography
            sx={{
              textDecoration: "underline"
            }}>
            Lihat Semua
          </Typography>
        </Button>
      </BoxContent>

    </BoxContainer>
  );
}

export default App

/* bentuk 1

<Carousel
            stopAutoPlayOnHover={true}
            navButtonsAlwaysVisible={true}
            swipe={true}
            animation={"slide"}
            IndicatorIcon={false}
            indicatorProps={{
              style: {
                display: "none"
              }
            }}
            navButtonsProps={{
              style: {
                backgroundColor: "#1455A3",
                transform: 'translateY(-50%)',
              }
            }}>
            
            
            {items2.map((item, i) =>
            (<Item
              key={i} {...item} />
            ))}

          </Carousel>
*/