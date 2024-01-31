'use client';

import { Carousel as CarouselReact } from 'flowbite-react';
const Carousel = () => {
  return (
    <div className="h-[90px] sm:h-[260px] xl:h-[300px] 2xl:h-[384px] z-auto">
      <CarouselReact pauseOnHover>
        <img src="img_c1.jpg" alt="img_c1.jpg" />
        <img src="img_c2.jpg" alt="img_c2.jpg" />
        <img src="img_c3.jpg" alt="img_c3.jpg" />
        <img src="img_c4.jpg" alt="img_c4.jpg" />
        <img src="img_c5.jpg" alt="img_c5.jpg" />
      </CarouselReact>
    </div>
  );
};

export default Carousel;
