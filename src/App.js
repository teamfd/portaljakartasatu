import { useEffect } from "react";
import ScrollTop from "./components/ScrollTop";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Interaktif from '../src/routes/Interaktif';
import Tematik from '../src/routes/Tematik';
import SimpulJaringan from '../src/routes/SimpulJaringan';
import IRK from '../src/routes/IRK';
import Unduh from '../src/routes/Unduh';
import Beranda from '../src/routes/Beranda';
import Peta3DBasemaps from '../src/routes/Peta3DBasemaps';
import Peta3DTransitOrientied from '../src/routes/Peta3DTransitOrientied';
import Berita from '../src/routes/Berita';
import DetailBerita from '../src/routes/DetailBerita';
import PanduanJakartaSatu from '../src/routes/PanduanJakartaSatu';
import DataAPI from "./routes/DataAPI";
import IntegrasiSistem from "./routes/IntegrasiSistem";
import Publikasi from "./routes/Publikasi";
// import Footer from './components/footer/index';
import { Container, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "Jakarta Satu (Satu Peta, Satu Data, Satu Kebijakan)";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{ 
          background: "#ffff",
           }}>
          
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/peta-3d-basemaps" element={<Peta3DBasemaps />} />
            <Route path="/peta-3d-transit-orientied" element={<Peta3DTransitOrientied />} />
            <Route path="/interaktif" element={<Interaktif />} />
            <Route path="/tematik" element={<Tematik />} />
            <Route path="/IRK" element={<IRK />} />
            <Route path="/Unduh" element={<Unduh />} />
            <Route path="/simpul-jaringan" element={<SimpulJaringan />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/detail-berita" element={<DetailBerita />} />
            <Route path="/panduan-jakarta-satu" element={<PanduanJakartaSatu />} />
            <Route path="/data-api" element={<DataAPI />} />
            <Route path="/integrasi-sistem" element={<IntegrasiSistem />} />
            <Route path="/Publikasi" element={<Publikasi />} />
          </Routes>
          {/* <Footer /> */}
          <ScrollTop />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
