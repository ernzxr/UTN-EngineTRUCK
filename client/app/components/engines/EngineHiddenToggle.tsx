import { modifiedEngine } from "@/lib/redux/features/enginesSlice";
import { AppDispatch } from "@/lib/redux/store";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EngineHiddenToggle = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [hiddenToggle, setHiddenToggle] = useState(0);
    const [switchHidden, setSwitchHidden] = useState(false);

    const handleHiddenToggleChange = (object: EngineResponse, checked: boolean) => {
        const { id } = object;
        let updatedObject: any = { id: id };

        setHiddenToggle((prevToggle) => (prevToggle ? 0 : 1));
        updatedObject.hidden = hiddenToggle;

        dispatch(modifiedEngine(updatedObject));
    };

    return (
        <ToggleSwitch checked={object.hidden ? false : true} onChange={(checked) => { handleHiddenToggleChange(object, checked); }} />
    )
}

export default EngineHiddenToggle