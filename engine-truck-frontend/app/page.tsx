"use client";

import React, { useState } from "react";
import Image from "next/image";

import Header from "./components/header";
import Carousel from "./components/carousel";
import NavCard from "./components/navCard";
import ChatWindow from "./components/chatWindow";


export default function Index(): JSX.Element {
  return (
    <main className="relative dark:bg-gray-700">
      <Header />
      <section className="flex box-border h-[900px] w-full mx-auto my-auto mt-[20px]">
        <div className="relative group box-border h-full w-full mx-auto my-auto">
          <Carousel />
        </div>
      </section>
      <section className="relative h-[750px] w-[1440px] m-auto mt-[220px]">
        <div className="absolute top-[50px] left-[70px] w-[800px] h-[300px]">
          <NavCard
            title="Motores"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum tenetur excepturi! Mollitia consectetur perspiciatis labore, sit ipsa hic ullam ex laborum libero repudiandae rerum similique accusamus quasi voluptatum accusantium."
            imagen="./motor_2.jpg"
          />
        </div>
        <div className="absolute top-[400px] left-[70px] w-[800px] h-[300px]">
          <NavCard
            title="Repuestos"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum tenetur excepturi! Mollitia consectetur perspiciatis labore, sit ipsa hic ullam ex laborum libero repudiandae rerum similique accusamus quasi voluptatum accusantium."
            imagen="./repuesto_2.jpg"
          />
        </div>
        <div className="absolute top-[50px] left-[920px] w-[450px] h-[650px]">
          <NavCard
            title="Contacto"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum tenetur excepturi! Mollitia consectetur perspiciatis labore, sit ipsa hic ullam ex laborum libero repudiandae rerum similique accusamus quasi voluptatum accusantium."
            imagen="./contacto_1.jpg"
          />
        </div>
      </section>
      <section className="relative h-[750px] w-[1440px] border-2 border-black m-auto"><ChatWindow /></section>
      
    </main>
  );
}
