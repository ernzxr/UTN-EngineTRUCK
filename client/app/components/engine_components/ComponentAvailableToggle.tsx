import { modifiedComponent } from "@/lib/redux/features/componentsSlice";
import { AppDispatch } from "@/lib/redux/store";
import { ComponentResponse } from "@/lib/services/interfaces/components";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ComponentAvailableToggle = ({ object }: { object: ComponentResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [availableToggle, setAvailableToggle] = useState(object.available);

    const handleAvailableToggleChange = (object: ComponentResponse) => {
        const { id } = object;
        let updatedObject: any = { id: id };

        updatedObject.available = availableToggle ? 0 : 1;
        dispatch(modifiedComponent(updatedObject));

        availableToggle ? setAvailableToggle(0) : setAvailableToggle(1);
    };

    return (
        <ToggleSwitch checked={availableToggle ? true : false} onChange={() => {
            (handleAvailableToggleChange(object));
        }} />
    )
}

export default ComponentAvailableToggle