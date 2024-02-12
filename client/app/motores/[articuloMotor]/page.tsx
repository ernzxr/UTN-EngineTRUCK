/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/FooterReact";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { fetchEngines } from "@/lib/redux/features/enginesSlice";
import { Card } from 'flowbite-react';

import { useEffect } from "react";

export default function Page({params}: any) {
 
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEngines());
  }, [])

  const { enginesList } = useSelector((state: any) => state.enginesReducers);
  const model = parseInt(params.articuloMotor, 10);
  
  const motorSeleccionado = enginesList.find((motor: EngineResponse) => motor.id === model);  

  if(motorSeleccionado) {
    return (
      <>
      <main className="relative dark:bg-gray-700">
      <Header />
      <section className="flex flex-col items-center justify-center mt-10 mb-10 xl:mt-[8%] xl:mb-[8%]">
        <Card className="w-full xl:max-w-[80%] sm:max-w-[90%] p-8 mb-8 bg-blue-100 rounded-lg shadow-lg"> 
        <div className="flex flex-col md:flex-row items-center">
        <img
          src="/mot_t2.jpg"
          alt="Motor"
          className="w-full md:w-[70%] h-[300px] md:h-auto rounded-lg object-cover mb-4 md:mb-0 md:mr-8"
        />
       <div className="flex flex-col flex-grow">
                <h2 className="xl:text-3xl text-xl font-raleway font-semibold mb-4">{motorSeleccionado.model}</h2>
                <p className="xl:text-lg text-l font-raleway mb-6">Descripción del producto, ya semiarmados o repuestos. Dependiendo de que producto sea la 
                descripcion va a variar. Esque texto es un relleno para visualizar como se vera el espacio segun la catidad de descripcion que posea el articulo en cuestion.</p>
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