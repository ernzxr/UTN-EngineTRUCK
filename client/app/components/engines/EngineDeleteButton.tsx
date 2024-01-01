'use client';

import { removeEngine } from "@/lib/redux/features/enginesSlice";
import { removeMedia } from "@/lib/redux/features/mediaSlice";
import { AppDispatch } from "@/lib/redux/store";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { MediaResponse } from "@/lib/services/interfaces/media";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";

const EngineDeleteButton = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = async (object: EngineResponse) => {
        const removeMediaPromises: any = [];

        if (object.media.length) {
            object.media.forEach((media: MediaResponse) => {
                removeMediaPromises.push(dispatch(removeMedia(media.id)));
            });
        }

        await Promise.all(removeMediaPromises);

        dispatch(removeEngine(object.id));
    }

    return (
        <Button color="failure" onClick={() => {
            handleDelete(object);
        }}>Borrar</Button>
    )
}

export default EngineDeleteButton