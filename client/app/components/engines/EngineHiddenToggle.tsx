import { modifiedEngine } from "@/lib/redux/features/enginesSlice";
import { AppDispatch } from "@/lib/redux/store";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EngineHiddenToggle = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [hiddenToggle, setHiddenToggle] = useState(object.hidden ? 1 : 0);

    const handleHiddenToggleChange = async (object: EngineResponse) => {
        const { id } = object;
        let updatedObject: any = { id: id };

        setHiddenToggle((prevToggle) => (prevToggle ? 0 : 1));

        updatedObject.hidden = hiddenToggle;
        await dispatch(modifiedEngine(updatedObject));
    };

    return (
        <ToggleSwitch checked={hiddenToggle ? false : true} onChange={() => { handleHiddenToggleChange(object) }} />
    )
}

export default EngineHiddenToggle