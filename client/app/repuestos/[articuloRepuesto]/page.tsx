/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/FooterReact";
import { ComponentResponse } from "@/lib/services/interfaces/components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { fetchComponents } from "@/lib/redux/features/componentsSlice";
import { Card } from 'flowbite-react';

import { useEffect } from "react";

export default function Page({params}: any) {
 
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchComponents());
  }, [])

  const { componentsList } = useSelector((state: any) => state.componentsReducers);
  const model = parseInt(params.articuloRepuesto, 10);
  
  const componenteSeleccionado = componentsList.find((componente: ComponentResponse) => componente.id === model);  
  const backendURL = "http://localhost:5500/";

  if(componenteSeleccionado) {
    return (
      <>
      <main className="relative dark:bg-gray-700">
      <Header />
      <section className="flex flex-col items-center justify-center mt-10 mb-10 xl:mt-[8%] xl:mb-[8%]">
        <Card className="w-full xl:max-w-[80%] sm:max-w-[90%] p-8 mb-8 bg-blue-100 rounded-lg shadow-lg"> 
        <div className="flex flex-col md:flex-row items-center">
        <img
          src={`${backendURL}${componenteSeleccionado.media[0]?.file}`}
          alt="Motor"
          className="w-full md:w-[70%] h-[300px] md:h-auto rounded-lg object-cover mb-4 md:mb-0 md:mr-8"
        />
       <div className="flex flex-col flex-grow">
                <h2 className="xl:text-3xl text-xl font-raleway font-semibold mb-4">{componenteSeleccionado.component}</h2>
                <p className="xl:text-lg text-l font-raleway mb-6">{componenteSeleccionado.description}</p>
                <div className="flex justify-end">
                  <button className="px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mr-4">
                    Volver
                  </button>
                  <button className="px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Consultar
                  </button>
                </div>
              </div>
        </div>
        </Card>
      </section>
      <footer className="w-full ">
        <Footer />
      </footer>
    </main>
    </>
    )
  }
 
  else {
    return (
      <p>Motor No Encontrado</p>
    )
  }
}