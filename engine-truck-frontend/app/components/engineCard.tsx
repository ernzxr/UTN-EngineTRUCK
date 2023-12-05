import React from 'react';
import Link from 'next/link';

const EngineCard = () => {
  return (
    <Link href="/motores/articuloMotor" className="flex flex-col items-center w-[300px] h-[450px] border-black border-2 m-[4%] rounded-[10px] cursor-pointer hover:shadow-2xl hover:shadow-blue-900 duration-300 dark:hover:shadow-2xl dark:hover:shadow-blue-200">
        <div className="flex w-[70%] h-[45%] border-black border-2 rounded-[10px] mt-16"></div>
        <div className="mt-16 dark:text-white">NOMBRE DE MOTOR</div> 
    </Link>
  );
};

export default EngineCard;