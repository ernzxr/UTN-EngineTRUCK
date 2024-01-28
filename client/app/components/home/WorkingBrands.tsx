'use client';

import { FC } from 'react';
import LogoCard from '../LogoCard';

const WorkingBrands: FC<Record<string, never>> = function () {
  return (
    <div className="flex justify-around items-center">
    <LogoCard imagen="/la_serenisima_logo.jpg" />
    <LogoCard imagen="/puma_logo.jpg" />
    <LogoCard imagen="/tempranera_logo.jpg" />
    <LogoCard imagen="/valagro_logo.jpg" />
  </div>
  );
}

export default WorkingBrands;