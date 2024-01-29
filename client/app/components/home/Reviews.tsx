'use client';

import { Blockquote } from 'flowbite-react';
import { FC } from 'react';

const Reviews: FC<Record<string, never>> = function () {
  return (
    <figure className="mx-auto max-w-screen-md text-center">
      <svg
        className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Blockquote>
        <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
          "Muy buena predisposición por parte de la empresa, buena atención. Gracias!"
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center justify-center space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 mb-16">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Joaqui Correa</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Conductor</cite>
        </div>
      </figcaption>
      <Blockquote>
        <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
          "Me pasaron el precio super rápido y me explicaron todo. Muy conforme con mi semiarmado. Gracias por todo!"
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center justify-center space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 mb-16">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Mario Rojas</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Dueño de camiones</cite>
        </div>
      </figcaption>
      <Blockquote>
        <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
          "Gracias por la atención. Muy buena onda!"
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center justify-center space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 mb-16">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Javi Rojas</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Conductor</cite>
        </div>
      </figcaption>
      <Blockquote>
        <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
          "Rápidos en responder, muy conforme con el producto. Gracias!"
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center justify-center space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 ">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Miguel Salinas</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Conductor</cite>
        </div>
      </figcaption>
    </figure>
    
  );
}

export default Reviews;