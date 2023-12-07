"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {

  const router = useRouter();

  useEffect(() => {
    if(!localStorage.getItem('token')) {
      router.push('/admin');
    }
  }, [router]);

  return (
    <main className="relative dark:bg-gray-700">
      <table className="flex flex-col w-[1200px] h-full m-auto mt-[100px] border-2 border-black">
        <thead>
          <tr className="flex flex-row gap-8 list-none justify-around border-b-2 border-black my-[10px]">
            <th>Numero</th>
            <th>Motor</th>
            <th>Nombre</th>
            <th>Potencia</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
        <tr className="flex flex-row list-none border-b justify-around">
        <th>1</th>
        <th>Imagen de Motor</th>
        <th>MotorRePro</th>
        <th>230-450</th>
        <th>45 Disponibles</th>
        </tr>
        </tbody>
      </table>
      <table className="flex flex-col w-[1200px] h-full m-auto mt-[100px] border-2 border-black">
        <thead>
          <tr className="flex flex-row gap-8 list-none justify-around border-b-2 border-black my-[10px]">
            <th>Numero</th>
            <th>Motor</th>
            <th>Nombre</th>
            <th>Potencia</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
        <tr className="flex flex-row gap-8 list-none justify-around border-b">
        <th>Numero</th>
        <th>Motor</th>
        <th>Nombre</th>
        <th>Potencia</th>
        <th>Stock</th>
        </tr>
        </tbody>
      </table>
    </main>
  );
}
