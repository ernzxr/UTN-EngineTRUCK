import React from 'react'

const Carousel = () => {
    const slides = [
        {
          url: '/SkullGreymon_b.png'
        },
        {
          url: '/infermon.png'
        }
      ]
  
    return (
    <div style={{backgroundImage: `url(${slides[0].url})`}}className="h-full w-full rounded-[100px] mx-3 bg-center bg-cover duration-500"></div>
  )
}

export default Carousel