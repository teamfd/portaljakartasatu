import React from 'react'
import Navbar2 from "../../src/components/appBar/Navbar2";
// import Navbar from "../../src/components/appBar/Navbar";

const IRK = () => {
    return (
        <>
            <Navbar2 />
            <embed height="100%" width="100%" style={{ position: "fixed"  }} src='https://jakartasatu.jakarta.go.id/irk/login' />
        </>
    );
};

export default IRK;