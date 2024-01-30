'use client';

import { removeComponent } from "@/lib/redux/features/componentsSlice";
import { AppDispatch } from "@/lib/redux/store";
import { ComponentResponse } from "@/lib/services/interfaces/components";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";

const ComponentDeleteButton = ({ object }: { object: ComponentResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = (id: number) => {
        dispatch(removeComponent(id));
    }

    return (
        <Button color="failure" onClick={() => {
            handleDelete(object.id);
        }}>Borrar</Button>
    )
}

export default ComponentDeleteButton