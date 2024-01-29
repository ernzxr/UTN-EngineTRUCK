'use client'
import { FC } from "react";
import { Card } from "flowbite-react";

const TripleLayout: FC<Record<string, never>> = function () {
    return (
        <>
            <Card
                className="w-[10px] xl:w-[200px] sm:w-[50px]"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/images/blog/image-1.jpg"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    MOTORES
                </h5>
            </Card>
           
        </>
    );
};

export default TripleLayout;