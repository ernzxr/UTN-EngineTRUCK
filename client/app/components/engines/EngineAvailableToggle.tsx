import { modifiedEngine } from "@/lib/redux/features/enginesSlice";
import { AppDispatch } from "@/lib/redux/store";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EngineAvailableToggle = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [availableToggle, setAvailableToggle] = useState(object.available ? 1 : 0);

    const handleAvailableToggleChange = (object: EngineResponse) => {
        const { id } = object;
        let updatedObject: any = { id: id };

        setAvailableToggle((prevToggle) => (prevToggle ? 0 : 1));

        updatedObject.available = availableToggle;
        dispatch(modifiedEngine(updatedObject));
    };

    return (
        <ToggleSwitch checked={availableToggle ? true : false} onChange={() => {
            (handleAvailableToggleChange(object));
        }} />
    )
}

export default EngineAvailableToggle