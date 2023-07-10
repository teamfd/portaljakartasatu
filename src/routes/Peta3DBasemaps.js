import React from 'react'
import Navbar2 from "../components/appBar/Navbar2";
// import Navbar from "../../src/components/appBar/Navbar";

const Peta3DBasemaps = () => {
    return (
        <>
            {/* <Navbar2 /> */}
            <embed height="100%" width="100%" style={{ position: "fixed"  }} src='https://jakartagis.maps.arcgis.com/apps/webappviewer3d/index.html?id=5e243a6293154d3280607f3424c7c4dd' />
        </>
    );
};

export default Peta3DBasemaps;