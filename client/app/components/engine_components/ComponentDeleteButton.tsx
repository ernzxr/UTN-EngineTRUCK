'use client';

import { removeCompatibleComponent } from "@/lib/redux/features/compatibleComponentsSlice";
import { removeComponent } from "@/lib/redux/features/componentsSlice";
import { removeMedia } from "@/lib/redux/features/mediaSlice";
import { AppDispatch } from "@/lib/redux/store";
import { CompatibleEngine } from "@/lib/services/interfaces/compatibleComponents";
import { ComponentResponse } from "@/lib/services/interfaces/components";
import { MediaResponse } from "@/lib/services/interfaces/media";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";

const ComponentDeleteButton = ({ object }: { object: ComponentResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = async (object: ComponentResponse) => {
        const removeMediaPromises: any = [];
        const removeCompatibleComponentsPromises: any = [];

        if (object.media.length) {
            object.media.forEach((media: MediaResponse) => {
                removeMediaPromises.push(dispatch(removeMedia(media.id)));
            });
        }

        if (object.compatibles_engines != undefined) {
            if (object.compatibles_engines.length) {
                object.compatibles_engines.forEach((compatible_component: CompatibleEngine) => {
                    removeMediaPromises.push(dispatch(removeCompatibleComponent(compatible_component.compatible_component_id)));
                });
            }
        }

        await Promise.all(removeMediaPromises);
        await Promise.all(removeCompatibleComponentsPromises);

        dispatch(removeComponent(object.id));
    }

    return (
        <Button color="failure" onClick={() => {
            handleDelete(object);
        }}>Borrar</Button>
    )
}

export default ComponentDeleteButton