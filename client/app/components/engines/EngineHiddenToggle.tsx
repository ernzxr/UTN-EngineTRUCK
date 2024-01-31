import { modifiedEngine } from "@/lib/redux/features/enginesSlice";
import { AppDispatch } from "@/lib/redux/store";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EngineHiddenToggle = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [hiddenToggle, setHiddenToggle] = useState(object.hidden);

    const handleHiddenToggleChange = (object: EngineResponse) => {
        const { id } = object;
        let updatedObject: any = { id: id };

        updatedObject.hidden = hiddenToggle ? 0 : 1;
        dispatch(modifiedEngine(updatedObject));
        
        hiddenToggle ? setHiddenToggle(0) : setHiddenToggle(1);
    };

    return (
        <ToggleSwitch checked={hiddenToggle ? false : true} onChange={() => { handleHiddenToggleChange(object) }} />
    )
}

export default EngineHiddenToggle