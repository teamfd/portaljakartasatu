import React from 'react'
import Navbar2 from "../components/appBar/Navbar2";
// import Navbar from "../../src/components/appBar/Navbar";

const Peta3DTransitOrientied = () => {
    return (
        <>
            {/* <Navbar2 /> */}
            <embed height="100%" width="100%" style={{ position: "fixed" }} src='https://jakartagis.maps.arcgis.com/apps/webappviewer3d/index.html?id=af3419d78077451dbf820a449b9e12db' />
        </>
    );
};

export default Peta3DTransitOrientied;