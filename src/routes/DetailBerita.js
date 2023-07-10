import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  ThemeProvider,
  Divider,
} from "@mui/material";
import Navbar2 from "../../src/components/appBar/Navbar2";
import Footer from "../../src/components/footer/index";

import axios from "axios";

import theme from "../styles/theme/theme2";

import { BoxContainer } from "./routeStyle/DetailBeritaStyle";

const DetailBerita = () => {
  const [newsLatest, setnewsLatest] = useState([]);
  const getLatestList = async () => {
    const response = await axios.get(
      "https://jakartasatu.jakarta.go.id/apimobile/app/v4/news/f2618537-5929-11ec-8d63-00090ffe0001"
    );
    const newsLatest = response.data.data;
    setnewsLatest(newsLatest);
  };

  const [newsList, setNewsList] = useState([]);
  const getNewsList = async () => {
    const response = await axios.get(
      "https://jakartasatu.jakarta.go.id/apimobile/app/v4/news/"
    );
    const beritaTerbaru = response.data.data.items;
    const beritaTerbaruBaru = beritaTerbaru.slice(0, 3);

    setNewsList(beritaTerbaruBaru);
  };
  useEffect(() => {
    getNewsList();
    getLatestList();
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar2 />
        <BoxContainer>
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={8}>
              <Box sx={{ textAlign: "left", marginTop: "-40px" }}>
                <Typography
                  sx={{
                    fontSize: "1em",
                    color: "rgba(0, 0, 0, 0.40)",
                    mb: 2,
                  }}
                >
                  {newsLatest.created_at}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2em",
                    color: "rgba(0, 0, 0, 0.80)",
                  }}
                >
                  {newsLatest.title}
                </Typography>
              </Box>
              <CardMedia>
                <img
                  style={{
                    marginTop: "30px",
                    marginBottom: "30px",
                    width: "100%",
                    boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.1)",
                    backgroundColor: "grey",
                  }}
                  src={newsLatest.source_image}
                  alt=""
                />
              </CardMedia>
              {/* <Typography sx={{
                            fontSize: "1.1em",
                            color: "rgba(0, 0, 0, 0.80)",
                            textAlign: "justify",
                            lineHeight: "195.3%"
                        }}
                            dangerouslySetInnerHTML={{ __html: "<div style=”text-align:justify”>Pemerintah Provinsi (Pemprov) DKI Jakarta kini telah menyediakan akses Wi-Fi gratis kepada masyarakat DKI Jakarta. Semenjak adanya pandemi COVID-19, seluruh kegiatan maupun aktivitas baik pemerintahan, perkantoran, bahkan pendidikan dilakukan di rumah secara daring. <br><br>Masyarakat kini sangat membutuhkan koneksi jaringan internet agar aktivitas tetap berlanjut meskipun adanya pembatasan interaksi fisik. Hal ini menyebabkan terjadinya lonjakan kebutuhan jaringan internet di masyarakat khususnya di DKI Jakarta. <br><br>Pemprov DKI Jakarta menyadari bahwa belum semua masyarakat di DKI Jakarta memiliki akses internet yang memadai bahkan masih adanya beberapa wilayah yang tidak terjangkau konektivitas jaringan internet, seperti wilayah perkampungan padat penduduk. <br><br>Bahkan seringkali terjadinya hambatan jaringan internet yang juga dirasakan oleh beberapa pelajar di DKI Jakarta. Maka dari itu, diluncurkanlah sebuah program yang dikenal sebagai JakWifi oleh Pemprov DKI Jakarta pada 28 Agustus 2020 sebagai suatu kebijakan inovatif dalam wujud internet untuk semua. JakWifi merupakan program penyediaan Wi-Fi gratis di daerah-daerah yang tidak terjangkau layanan internet. Masyarakat dapat memanfaatkan JakWifi untuk menunjang berbagai aktivitas. <br><br>Kini, persebaran Wi-Fi gratis juga dapat ditemukan melalui situs Jakarta Satu. Persebaran Wi-Fi gratis di wilayah DKI Jakarta dapat dilihat dengan mengakses situs Jakarta Satu pada bagian Galeri Peta Tematik. <br><br>Informasi persebaran Wi-Fi ditampilkan dalam bentuk peta sebaran Wi-Fi per wilayah di DKI Jakarta dalam bentuk. Akses JakWifi diharapkan tidak hanya dinikmati oleh pelajar melainkan juga warga yang memiliki usaha.</div>\r\n" }}></Typography> */}
              <Typography
                sx={{
                  fontSize: "1.2em",
                  color: "rgba(0, 0, 0, 0.80)",
                  textAlign: "justify",
                  lineHeight: "195.3%",
                }}
              >
                {newsLatest.content}
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Divider orientation="vertical" />
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  display: "grid",
                  gap: 4,
                }}
              >
                {newsList.map((news) => (
                  <Card key={news.id} elevation={0} square={true}>
                    <CardActionArea>
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
            </Grid>
          </Grid>
        </BoxContainer>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default DetailBerita;
