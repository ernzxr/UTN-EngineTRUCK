/* eslint-disable @next/next/no-img-element */
import { Http2ServerRequest } from "http2";
import React, { useState } from "react";
import Link from "next/link";

const NavCard = (props: any) => {
  const [cardHover, setCardHover] = useState(false);

  return (
    <Link href={`/${props.title.toLowerCase()}`} passHref>
    <div
      className="flex w-full h-full items-center justify-center shadow-lg bg-center dark:text-white cursor-pointer rounded-[10px] relative"
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <img
        alt={props.title}
        src={cardHover ? props.imagenFlip : props.imagen}
        className={
          cardHover
            ? "w-full h-full rounded-[10px] object-cover brightness-50 duration-500"
            : "w-full h-full rounded-[10px] object-cover duration-500"
        }
      />
      {cardHover ? (
        <>
          <div className="absolute pb-[60px] text-center text-white text-5xl font-semibold">{props.title}</div>
          <div className="absolute pt-[40px] text-center text-white text-xl font-semibold">
            {props.description}
          </div>
        </>
      ) : (
        <h2></h2>
      )}
    </div>
    </Link>
  );
};

export default NavCard;
