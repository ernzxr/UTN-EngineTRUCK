import React, { useState, useEffect } from "react";


const NavCard = (props: any) => {
  const [cardHover, setCardHover] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url("${props.imagen}")` }}
      className="flex w-full h-full items-center justify-center shadow-lg bg-cover bg-center dark:text-white hover:brightness-50 hover:duration-300 cursor-pointer rounded-[10px] "
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      {cardHover ? (
        <>
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-2" >{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </>
      ) : (
        <h2></h2>
      )}
    </div>
  );
};

export default NavCard;
