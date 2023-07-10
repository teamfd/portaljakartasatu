import React from "react";
import Navbar2 from "../../src/components/appBar/Navbar2";
import App, {
  BoxImage1,
  BoxImage2,
  BoxTitle,
  BoxContainer,
  BoxLittleTitle,
  Dividers,
} from "../routes/routeStyle/IntegrasiSistemStyle";
import "../routes/routeStyle/SimpulJaringanCSS.css";
import Footer from "../components/footer";

const DataAPI = () => {
  return (
    <>
      <Navbar2 />
      <BoxImage1 src="/images/menuPeta/Rectangle_1.png" />
      <BoxImage2 src="/images/menuPeta/bentuk.png" />
      <BoxContainer>
        <BoxTitle>Integrasi Sistem</BoxTitle>
        <Dividers />
        <BoxLittleTitle>
          Petunjuk pelaksanaan pemutakhiran dan pengintegrasikan sistem peta dan
          data dalam sistem informasi geospasial Jakarta Satu ini disusun dalam
          rangka memfasilitasi integrasi spasial dari semua perangkat daerah di
          lingkungan Pemerintah Provinsi DKI Jakarta ataupun instansi lainnya
          agar dapat mewujudkan integrasi informasi gespasial di wilayah DKI
          Jakarta dalam wadah Jakarta Satu untuk meningkatkan kinerja penataan
          dan pembangunan kota.
        </BoxLittleTitle>

        <App />
      </BoxContainer>
      <Footer />
    </>
  );
};

export default DataAPI;
