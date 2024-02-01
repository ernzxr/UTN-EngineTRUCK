import React, { useEffect } from 'react';
import Link from 'next/link';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEngines } from '@/lib/redux/features/enginesSlice';
import { AppDispatch } from '@/lib/redux/store';

const EngineCard = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEngines());
   
  }, [])
  
  const { enginesList } = useSelector((state: any) => state.enginesReducers);
  const rutaImagen = "/server/uploads/"
  

  return (
    <>
    {enginesList.map((object: EngineResponse) => (
      <Link href={`/motores/${object.id}`} className="flex flex-col items-center w-[300px] h-[450px] shadow-lg bg-white m-[4%] rounded-[10px] cursor-pointer hover:shadow-2xl hover:shadow-blue-900 duration-300 dark:hover:shadow-2xl dark:hover:shadow-blue-200 hover:scale-105">
      <div className="flex w-[70%] h-[45%] mt-16">
        <img src={`/server/uploads/${object.media[0].file}`} alt="" className='rounded-[10px]'/>
      </div>
      <div className="mt-16 dark:text-white">{object.model}</div> 
      <div className="mt-auto ml-4 px-4 py-2 mb-7 bg-blue-400 text-white rounded-md">Mas Info</div>
  </Link>
    ))}
    </>
    
    
  );
};

export default EngineCard;