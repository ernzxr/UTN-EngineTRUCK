import React, { useState, useEffect} from "react";


const navCard = (props: any) => {
  return (
    <div className="flex w-full h-full bg-gray-500 items-center justify-center">{props.texto}</div>
  )
}

export default navCard

