import { FC } from "react";
import { Card } from "flowbite-react";

const TripleLayout: FC<Record<string, never>> = function () {
    return (
        <div className="flex flex-wrap justify-center xl:justify-between xl:mx-[15%] sm:justify-start mb-[20%] mt-[5%] xl:mt-[5%] xl:mb-[10%]">
            <Card
                className="w-full sm:w-[45%] md:w-[30%] lg:w-[25%] xl:w-[300px] m-2 text-center shadow-sm "
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="MOT_CARD.jpg"
                href={"/motores"}

            >
                <h5 className="text-2xl font-raleway font-bold centerw tracking-tight text-gray-900 dark:text-white ">
                    MOTORES
                </h5>
            </Card>
            <Card
                className="w-full sm:w-[45%] md:w-[30%] lg:w-[25%] xl:w-[300px] sm:mt-3 m-2 text-center shadow-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="REP_CARD.jpg"
                href={"/repuestos"}
            >
                <h5 className="text-2xl font-raleway font-bold tracking-tight text-gray-900 dark:text-white">
                    REPUESTOS
                </h5>
            </Card>
            <Card
                className="w-full sm:w-[45%] md:w-[30%] lg:w-[25%] xl:w-[300px] sm:mt-3 m-2 text-center shadow-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="CONT_CARD.jpg"
                href={"/contacto"}
            >
                <h5 className="text-2xl font-raleway font-bold tracking-tight text-gray-900 dark:text-white">
                    CONTACTO
                </h5>
            </Card>
        </div>
    );
};

export default TripleLayout;
