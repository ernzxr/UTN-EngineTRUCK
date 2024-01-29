import React from 'react';
import Link from 'next/link';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { useSelector } from 'react-redux';

const EngineCard = () => {
  const { enginesList } = useSelector((state: any) => state.enginesReducers);
  <>
  return (
    <Link href="/motores/articuloMotor" className="flex flex-col items-center w-[300px] h-[450px] shadow-lg bg-white m-[4%] rounded-[10px] cursor-pointer hover:shadow-2xl hover:shadow-blue-900 duration-300 dark:hover:shadow-2xl dark:hover:shadow-blue-200 hover:scale-105">
        <div className="flex w-[70%] h-[45%] mt-16">
          <img src="/prueba_motor_card.jpg" alt="" className='rounded-[10px]'/>
        </div>
        <div className="mt-16 dark:text-white">OM 366 Mercedes-Benz</div> 
        <div className="mt-auto ml-4 px-4 py-2 mb-7 bg-blue-400 text-white rounded-md">Mas Info</div>
    </Link>
    
  );
  </>
};

export default EngineCard;