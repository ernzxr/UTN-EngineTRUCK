"use client";

import React, { useState } from "react";
import Image from "next/image";

import Header from "./components/header";
import Footer from "./components/footer";
import Carousel from "./components/carousel";
import NavCard from "./components/navCard";
import LogoCard from "./components/LogoCard";
import ChatWindow from "./components/chatWindow";


export default function Index(): JSX.Element {
  return (
    <main className="relative dark:bg-gray-700">
      <Header />
      <section className="flex box-border h-[800px] w-full mx-auto my-auto">
        <div className="relative group box-border h-full w-full mx-auto my-auto">
          <Carousel />
        </div>
      </section>
      <section className="relative h-[750px] w-[1440px] m-auto mt-[220px]">
        <div className="absolute top-[50px] left-[70px] w-[800px] h-[300px] rounded-[100px]">
          <NavCard
            title="MOTORES"
            description=" ¡No retifique más! Elija algunas de nuestras opciones de mejor calidad "
            imagen="./mot_t1.jpg"
            imagenFlip = "./mot_t2.jpg"
          />
        </div>
        <div className="absolute top-[400px] left-[70px] w-[800px] h-[300px]">
          <NavCard
            title="REPUESTOS"
            description="Los mejores repuestos para los mejores modelos. Calidad garantizada"
            imagen="./rep_t1.jpg"
            imagenFlip="./rep_t2.jpg"
          
          />
        </div>
        <div className="absolute top-[50px] left-[920px] w-[450px] h-[650px]">
          <NavCard
            title="CONTACTO"
            description="Contacto directo y atención en el momento"
            imagen="./cont_1.jpg"
            imagenFlip="./cont_2.jpg"
       
          />
        </div>
      </section>
      
      <section className=" w-[1440px] h-[400px] border-black border-2 m-auto mt-[180px]">
      <p className="text-center text-4xl font-semibold-raleway mb-[60px] mt-[40px]">PRINCIPALES EMPRESAS QUE CONFIAN EN ENGINETRUCK</p>
       <div className="flex justify-around items-center">
        <LogoCard />
        <LogoCard />
        <LogoCard />
        <LogoCard />
        </div>
      </section>
      <section className="relative h-[840px] w-[1440px] m-auto mt-[180px] bg-blue-100 dark:bg-white rounded-[1%] shadow-lg">
        <div className="text-center pt-[45px] text-4xl font-semibold-raleway mb-[10px] text-blue-900  "> COMENTARIOS DE NUESTROS CLIENTES </div>
        <div className="absolute left-[40px] top-[160px]  bg-white text-blue-900 dark:text-blue-900  dark:bg-blue-100  rounded-[10px]"><ChatWindow review="Muy buena predisposición por parte de la empresa, buena atención. Gracias!"/></div>
        <div className="absolute left-[740px] top-[160px] bg-white text-blue-900 dark:text-blue-900  dark:bg-blue-100  rounded-[10px]"><ChatWindow review="Gracias por la buena atención.Todo llegó en tiempo y forma. Muchas gracias."/></div>
        <div className="absolute left-[40px] top-[380px]  bg-white text-blue-900 dark:text-blue-900  dark:bg-blue-100  rounded-[10px]"><ChatWindow review="Muy buena atención, llegó todo cigueñal y block a tiempo, Muchísimas gracias.-"/></div>
        <div className="absolute left-[740px] top-[590px]  bg-white text-blue-900 dark:text-blue-900  dark:bg-blue-100  rounded-[10px]"><ChatWindow review="Muy buena atención y seriedad. Recibí todos los repuestos en tiempo y forma. Muchas gracias."/></div>
        <div className="absolute left-[40px] top-[590px]  bg-white text-blue-900 dark:text-blue-900  dark:bg-blue-100  rounded-[10px]"><ChatWindow review="Muy atento, gracias por todo."/></div>
        <div className="absolute left-[740px] top-[380px]  bg-white text-blue-900 dark:text-blue-900  dark:bg-blue-100  rounded-[10px]"><ChatWindow review="5 estrellas"/></div>
        </section>
        <footer className="w-full ">
          <Footer />
        </footer>
    </main>
  );
}

