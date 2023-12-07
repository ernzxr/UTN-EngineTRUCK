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
      <table className="flex flex-col w-[1200px] h-full m-auto mt-[100px] border-2 border-black justify-center text-center">
        <thead>
          <tr className="flex flex-row list-none border-b-2 border-black my-[10px] justify-evenly text-center items-center">
            <th className="w-[20%]">Numero</th>
            <th className="w-[20%]">Motor</th>
            <th className="w-[20%]">Nombre</th>
            <th className="w-[20%]">Potencia</th>
            <th className="w-[20%]">Stock</th>
          </tr>
        </thead>
        <tbody className="text-center">
        <tr className="flex flex-row list-none border-b justify-evenly text-center items-center">
        <th className="w-[20%]">1</th>
        <th className="w-[20%]">Imagen de Motor</th>
        <th className="w-[20%]">MotorRePro</th>
        <th className="w-[20%]">230-450</th>
        <th className="w-[20%]">45 Disponibles</th>
        </tr>
        </tbody>
      </table>
      
    </main>
  );
}
