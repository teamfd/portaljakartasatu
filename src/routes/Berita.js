import React, { useEffect, useState } from "react";
import Navbar from "../../src/components/appBar/Navbar";
import Footer from "../../src/components/footer/index";
// import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { Link as RouterLink } from "react-router-dom";

import Paper from "@mui/material/Paper";
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Fab from "@mui/material/Fab";

import axios from "axios";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import {
  BoxContainer,
  // BoxBeritaTerbaru,
  BoxSemuaBerita,
  // BoxImageBeritaTerbaru,
  BoxTitle,
  // BoxTitleBeritaTerbaru,
  // BoxTitleSemuaBerita,
  // DividerTitle,
  // DividerBeritaTerbaru,
  DividerSemuaBeritaKanan,
  DividerSemuaBeritaKiri,
  BoxCarousel,
} from "../routes/routeStyle/BeritaStyle";
import "../routes/routeStyle/BeritaCSS.css";

import { CardActionArea, ThemeProvider } from "@mui/material";
import theme from "../styles/theme/theme2";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//     { imgPath: 'https://jakartasatu.jakarta.go.id/apimobile/app/storage/banner_surveilans.png' },
//     { imgPath: 'https://jakartasatu.jakarta.go.id/apimobile/app/storage/dbdklim.png' },
//     { imgPath: 'https://jakartasatu.jakarta.go.id/apimobile/app/storage/banner8@8x.png' },
//     // { imgPath: 'https://jakartasatu.jakarta.go.id/apimobile/app/storage/banner6@6x.png' },
//     { imgPath: 'https://jakartasatu.jakarta.go.id/apimobile/app/storage/banner7@7x.png' },
// ];

const Berita = () => {
  // const [showMore, setShowMore] = useState(false);
  // const extraContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.';

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const [newsLatest, setnewsLatest] = useState([]);

  const [newsList, setNewsList] = useState([]);
  const getNewsList = async () => {
    const response = await axios.get(
      "https://jakartasatu.jakarta.go.id/apimobile/app/v4/news/"
    );
    // setNewsList(response.data.data.items);
    // console.log(response.data.data.items[0]);

    const beritaTerbaru = response.data.data.items;
    // const coba1 = beritaTerbaru.slice(1, beritaTerbaru.length);

    // setNewsList(coba1);
    setNewsList(beritaTerbaru);

    setnewsLatest(beritaTerbaru[beritaTerbaru.length - 1]);
  };
  useEffect(() => {
    getNewsList();
  });

  const maxSteps = newsList.length;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Card
          square={true}
          sx={{
            width: "100%",
            borderRadius: "none",
            boxShadow: "none",
            textAlign: "center",
          }}
        >
          <CardContent
            sx={{
              top: "25%",
              width: "50%",
              marginLeft: "8%",
              textAlign: "left",
              position: "absolute",
              zIndex: "10",
              color: "white",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.80)",
                mb: 2,
              }}
            >
              {newsLatest.created_at}
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 255)",
                fontSize: "2em",
                lineHeight: "1.2",
                mb: 2,
              }}
            >
              {newsLatest.title}
            </Typography>
            <CardActionArea component={RouterLink} to="/detail-berita">
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.80)",
                  fontSize: "1.1em",
                  textAlign: "justify",
                  mb: 2,
                }}
              >
                {newsLatest.short_content}
              </Typography>
            </CardActionArea>

            {/* <Typography
                        sx={{
                            marginBottom: "2%",
                            fontSize: "1.1em",
                            textAlign: "justify",
                        }}>
                        {showMore ? extraContent : `${extraContent.substring(0, 300)}`}
                        <Typography
                            sx={{
                                // textDecoration: "underline",
                                color: "#2F80ED",
                                cursor: "pointer",
                            }}
                            onClick={() => setShowMore(!showMore)}>
                            {showMore ? "tampilkan sedikit" : "tampilkan lebih"}
                        </Typography>
                    </Typography> */}
          </CardContent>
          <img
            style={{
              width: "100%",
              height: "650px",
              objectFit: "cover",
              filter: "brightness(0.2)",
              backgroundColor: "grey",
            }}
            src={newsLatest.source_image}
            alt=""
          />

          {/* <CardMedia
                    component="img"
                    image="/images/berita/HalamanUtama.png"
                    sx={{
                        position: "relative",
                        filter: "brightness(0.2)"
                    }}
                /> */}
        </Card>
        {/* <BoxImage src='/images/berita/HalamanUtama.png' alt="" /> */}

        <BoxContainer>
          <Paper
            elevation={0}
            sx={{
              margin: "0 auto",
              position: "relative",
              display: "grid",
              alignItems: "center",
              width: 250,
              borderRadius: "40px",
              boxShadow: "0 1px 15px rgb(0 0 0 / 0.2)",
            }}
          >
            <BoxTitle>Highlight</BoxTitle>
          </Paper>
          <BoxCarousel>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {newsList.map((step, index) => (
                <Grid
                  container
                  spacing={10}
                  direction="row"
                  alignItems="stretch"
                  sx={{ overflow: "hidden" }}
                >
                  <Grid item xs={5.5}>
                    <CardMedia>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          component="img"
                          sx={{
                            maxWidth: 550,
                            width: "100%",
                            backgroundColor: "grey",
                            boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.15)",
                          }}
                          src={step.source_image}
                        />
                      ) : null}
                    </CardMedia>
                  </Grid>
                  <Grid item xs={6.5}>
                    <CardActionArea component={RouterLink} to="/detail-berita">
                      <CardContent
                        sx={{
                          textAlign: "left",
                          marginLeft: "-14px",
                          marginRight: "-14px",
                          marginTop: "-17px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "rgba(0, 0, 0, 0.70)",
                            fontSize: "1em",
                            mb: 1,
                          }}
                        >
                          {step.created_at}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "1.4em",
                            lineHeight: "185.5%",
                            mb: 1,
                          }}
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "1em",
                            textAlign: "justify",
                            lineHeight: "195.3%",
                          }}
                        >
                          {step.short_content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Grid>
                </Grid>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              sx={{
                transform: "translateY(-300%)",
                backgroundColor: "transparent",
                marginLeft: "-9%",
                width: "119%",
              }}
              variant="none"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === "rtl" ? (
                    <Fab
                      size="small"
                      color="info"
                      sx={{
                        backgroundColor: "#1455A3",
                        boxShadow: "0px 4px 20px rgba(170, 180, 190, 0.3)",
                      }}
                    >
                      <KeyboardArrowLeft style={{ color: "white" }} />
                    </Fab>
                  ) : (
                    <Fab
                      size="small"
                      color="info"
                      sx={{
                        backgroundColor: "#1455A3",
                        boxShadow: "0px 4px 20px rgba(170, 180, 190, 0.3)",
                      }}
                    >
                      <KeyboardArrowRight style={{ color: "white" }} />
                    </Fab>
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <Fab
                      size="small"
                      color="info"
                      sx={{
                        backgroundColor: "#1455A3",
                        boxShadow: "0px 4px 20px rgba(170, 180, 190, 0.3)",
                      }}
                    >
                      <KeyboardArrowRight style={{ color: "white" }} />
                    </Fab>
                  ) : (
                    <Fab
                      size="small"
                      color="info"
                      sx={{
                        backgroundColor: "#1455A3",
                        boxShadow: "0px 4px 20px rgba(170, 180, 190, 0.3)",
                      }}
                    >
                      <KeyboardArrowLeft style={{ color: "white" }} />
                    </Fab>
                  )}
                </Button>
              }
            />
          </BoxCarousel>
          <BoxSemuaBerita>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {/* <Grid item xs={4}>
                            <DividerSemuaBeritaKiri />
                        </Grid> */}
              <Grid item xs={12}>
                <Paper
                  elevation={0}
                  sx={{
                    margin: "0 auto",
                    position: "relative",
                    display: "grid",
                    alignItems: "center",
                    width: 250,
                    borderRadius: "40px",
                    boxShadow: "0 1px 15px rgb(0 0 0 / 0.2)",
                  }}
                >
                  <BoxTitle>Semua</BoxTitle>
                </Paper>
              </Grid>
              {/* <Grid item xs={4}>
                            <DividerSemuaBeritaKanan />
                        </Grid> */}
            </Grid>
            <Box
              sx={{
                mt: 10,
                display: "grid",
                gridTemplateRows: { md: "1fr 1fr" },
                gridTemplateColumns: { md: "1fr 1fr 1fr" },
                gap: 4,
              }}
            >
              {newsList.map((news) => (
                <Card key={news.id} elevation={0} square={true}>
                  <CardActionArea component={RouterLink} to="/detail-berita">
                    <CardMedia sx={{ mb: -1 }}>
                      {news.source_image && (
                        <img
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            backgroundColor: "grey",
                          }}
                          alt=""
                          src={news.source_image}
                        />
                      )}
                    </CardMedia>
                    <CardContent
                      sx={{
                        textAlign: "left",
                        marginLeft: "-14px",
                        marginRight: "-14px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.4em",
                          lineHeight: "185.5%",
                          mb: 1,
                        }}
                      >
                        {news.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.70)",
                          fontSize: "1.1em",
                          mb: 1,
                        }}
                      >
                        {news.created_at}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "1.1em",
                          textAlign: "justify",
                          lineHeight: "195.3%",
                        }}
                      >
                        {news.short_content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </BoxSemuaBerita>
          <Stack alignItems="center" spacing={2}>
            <Pagination className="pagination" shape="rounded" count={5} />
          </Stack>
        </BoxContainer>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Berita;
