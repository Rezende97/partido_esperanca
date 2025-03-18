"use client";

import Header from "../components/layouts/Header";
import Banner from "../banner/banner";
import SobreNos from "../historia/page";
// import Footer from "../components/layouts/footer";


export default function HomePage(){
    return(
        <>
            <Header />
            <Banner />
            <SobreNos />
            {/* <Footer /> */}
        </>
    )
}