/* eslint-disable @next/next/no-img-element */
import { Http2ServerRequest } from "http2";
import React, { useState } from "react";

const NavCard = (props: any) => {
  const [cardHover, setCardHover] = useState(false);

  return (
    <div
      className="flex w-full h-full items-center justify-center shadow-lg bg-center dark:text-white cursor-pointer rounded-[10px] relative"
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <img
        alt={props.title}
        src={cardHover ? props.imagen2 : props.imagen}
        className={cardHover ? "w-full h-full rounded-[10px] object-cover brightness-50 hover:duration-300" : "w-full h-full rounded-[10px] object-cover"}
      />
      {cardHover ? (<div className="absolute text-center text-white">{props.description}</div>) : (<h2></h2>)}
    </div>
  );
};

export default NavCard;