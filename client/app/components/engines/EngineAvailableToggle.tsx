import { modifiedEngine } from "@/lib/redux/features/enginesSlice";
import { AppDispatch } from "@/lib/redux/store";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EngineAvailableToggle = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [availableToggle, setAvailableToggle] = useState(object.available);

    const handleAvailableToggleChange = (object: EngineResponse) => {
        const { id } = object;
        let updatedObject: any = { id: id };

        updatedObject.available = availableToggle ? 0 : 1;
        dispatch(modifiedEngine(updatedObject));

        availableToggle ? setAvailableToggle(0) : setAvailableToggle(1);
    };

    return (
        <ToggleSwitch checked={availableToggle ? true : false} onChange={() => {
            (handleAvailableToggleChange(object));
        }} />
    )
}

export default EngineAvailableToggle