import React from "react";
import Navbar2 from "../../src/components/appBar/Navbar2";
import {
  BoxImage2,
  BoxTitle,
  BoxContainer,
  BoxLittleTitle,
  Dividers,
} from "../routes/routeStyle/SimpulJaringanStyle";
import "../routes/routeStyle/SimpulJaringanCSS.css";
import { CustomizedTables, CustomizedTables2 } from "./routeStyle/DataAPIStyle";
import Footer from "../components/footer";

const DataAPI = () => {
  return (
    <>
      <Navbar2 />
      {/* <BoxImage1 src="/images/menuPeta/Rectangle_1.png" /> */}
      <BoxImage2 src="/images/menuPeta/bentuk.png" />
      <BoxContainer>
        <BoxTitle>Data API</BoxTitle>
        <Dividers />
        <BoxLittleTitle>
          Memberikan informasi list service data berupa web map service dan web
          feature service yang terdapat pada Webgis Jakarta Satu.
        </BoxLittleTitle>

        <BoxTitle>Tabel Data API Web Feature Service (WFS)</BoxTitle>

        <CustomizedTables />

        <BoxTitle>Tabel Data API Web Map Service (WMS)</BoxTitle>

        <CustomizedTables2 />
      </BoxContainer>
      <Footer />
    </>
  );
};

export default DataAPI;
