/* eslint-disable @next/next/no-img-element */
"use client";

import { Card } from 'flowbite-react';
import Header from "@/app/components/Header";
import Footer from "@/app/components/FooterReact";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { fetchEngines } from "@/lib/redux/features/enginesSlice";

import { useEffect } from "react";

export default function Page({params}: any) {
 
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEngines());
  }, [])

  const { enginesList } = useSelector((state: any) => state.enginesReducers);
  const model = parseInt(params.articuloMotor, 10);
  
  const motorSeleccionado = enginesList.find((motor: EngineResponse) => motor.id === model);  

 
    return (///mt-[10px]///
      <>
      <main className="relative dark:bg-gray-700">
      <Header />
      <section className="flex xl:w-[70%] xl:h-[600px] sm:h-[100%] sm:w[100%] m-auto mt-10 mb-10  bg-blue-100 rounded-[30px] shadow-lg">
      <Card className="max-w-sm" imgSrc="MOT_CARD.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
        <div className="absolute top-[80%] left-[20%] m-auto w-[58%] border-blue-300 border-2"></div>
        <button className="absolute top-[74%] left-[20%] mt-auto ml-4 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Volver
        </button>
        <button className="absolute top-[74%] left-[65%] mt-auto ml-4 px-12 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Consultar
        </button>
      </section>
      <footer className="w-full ">
        <Footer />
      </footer>
    </main>
    </>
    )
  
}