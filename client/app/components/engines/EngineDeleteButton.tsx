'use client';

import { removeEngine } from "@/lib/redux/features/enginesSlice";
import { AppDispatch } from "@/lib/redux/store";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";

const EngineDeleteButton = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = (id: number) => {
        dispatch(removeEngine(id));
    }

    return (
        <Button color="failure" onClick={() => {
            handleDelete(object.id);
        }}>Borrar</Button>
    )
}

export default EngineDeleteButton