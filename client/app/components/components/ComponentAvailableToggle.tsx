import { modifiedComponent } from "@/lib/redux/features/componentsSlice";
import { AppDispatch } from "@/lib/redux/store";
import { ComponentResponse } from "@/lib/services/interfaces/components";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ComponentAvailableToggle = ({ object }: { object: ComponentResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [availableToggle, setAvailableToggle] = useState(0);
    const [switchAvailable, setSwitchAvailable] = useState(false);

    const handleAvailableToggleChange = (object: ComponentResponse, checked: boolean) => {
        const { id } = object;
        let updatedObject: any = { id: id };

        setAvailableToggle((prevToggle) => (prevToggle ? 0 : 1));
        updatedObject.available = availableToggle;

        dispatch(modifiedComponent(updatedObject));
    };

    return (
        <ToggleSwitch checked={object.available ? true : false} onChange={(checked) => {
            (handleAvailableToggleChange(object, checked));
        }} />
    )
}

export default ComponentAvailableToggle