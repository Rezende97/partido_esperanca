"use client";

import * as React from "react";
import Image from "next/image";

const Banner = () => {
    return (
        <Image
            src='/images/banner.jpg'
            alt="Descrição da imagem"
            width={1920} 
            height={1080} 
            layout="responsive"
            priority 
        />
    )
}

export default Banner