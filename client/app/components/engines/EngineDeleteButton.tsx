'use client';

import { removeEngine } from "@/lib/redux/features/enginesSlice";
import { removeMedia } from "@/lib/redux/features/mediaSlice";
import { AppDispatch } from "@/lib/redux/store";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { MediaResponse } from "@/lib/services/interfaces/media";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

const EngineDeleteButton = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { mediaList } = useSelector((state: any) => state.mediaReducers);

    const handleDelete = async (id: number) => {
        const removeMediaPromises: any = [];

        mediaList.forEach((media: MediaResponse) => {
            if (media.engine_id === id) {
                removeMediaPromises.push(dispatch(removeMedia(media.id)));
            }
        });

        await Promise.all(removeMediaPromises);

        dispatch(removeEngine(id));
    }

    return (
        <Button color="failure" onClick={() => {
            handleDelete(object.id);
        }}>Borrar</Button>
    )
}

export default EngineDeleteButton