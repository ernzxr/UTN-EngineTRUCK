'use client'
import { FC } from "react";
import { Card } from "flowbite-react";

const TripleLayout: FC<Record<string, never>> = function () {
    return (
        <>
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/images/blog/image-1.jpg"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    MOTORES
                </h5>
            </Card>
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/images/blog/image-1.jpg"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    REPUESTOS
                </h5>
            </Card>
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/images/blog/image-1.jpg"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    CONTACTO
                </h5>
            </Card>
        </>
    );
};

export default TripleLayout;