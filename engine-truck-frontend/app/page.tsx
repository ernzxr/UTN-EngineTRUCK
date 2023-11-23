"use client";

import React, { useState } from "react";

import Header from "./components/header";
import Carousel from "./components/carousel";


export default function Index(): JSX.Element {
  return (
    <main className="dark:bg-gray-700">
      <Header />
      <section className="flex box-border h-[500px] w-[1440px] border-4 border-black mx-auto my-auto mt-[100px]">
        <div className="relative box-border h-[450px] w-[700px] border-4 border-black mx-auto my-auto">
          <p className="absolute top-[50px] left-[110px] text-[70px]">Engine TRUCK</p>
          <p className= "absolute pt-[240px] px-[15px] text-[22px] text-center">
            Ofreciendo calidad superior en semiarmados con durabilidad y
            confiabilidad excepcionales. Desde 2004, directo al transportista
            nuestro compromiso es brindar soluciones de primera clase
          </p>
        </div>
        <div className="relative group box-border h-[450px] w-[700px] border-4 border-black mx-auto my-auto">
          <Carousel />
        </div>
      </section>
    </main>
  );
}
