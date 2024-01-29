import { FC } from 'react';
import LogoCard from '../LogoCard';

const WorkingBrands: FC<Record<string, never>> = function () {
  return (
    <div className="flex flex-wrap justify-around items-center mb-[50px] mt-[50px] xl:mt-7 xl:mb-20">
      <LogoCard imagen="/la_serenisima_logo.jpg" className="my-4 sm:my-8" />
      <LogoCard imagen="/puma_logo.jpg" className="my-4 sm:my-8" />
      <LogoCard imagen="/tempranera_logo.jpg" className="my-4 sm:my-8" />
      <LogoCard imagen="/valagro_logo.jpg" className="my-4 sm:my-8" />
    </div>
  );
}

export default WorkingBrands;