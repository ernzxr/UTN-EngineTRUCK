import { modifiedComponent } from "@/lib/redux/features/componentsSlice";
import { AppDispatch } from "@/lib/redux/store";
import { ComponentResponse } from "@/lib/services/interfaces/components";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ComponentHiddenToggle = ({ object }: { object: ComponentResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [hiddenToggle, setHiddenToggle] = useState(object.hidden);

    const handleHiddenToggleChange = (object: ComponentResponse) => {
        const { id } = object;
        let updatedObject: any = { id: id };

        updatedObject.hidden = hiddenToggle ? 0 : 1;
        dispatch(modifiedComponent(updatedObject));
        
        hiddenToggle ? setHiddenToggle(0) : setHiddenToggle(1);
    };

    return (
        <ToggleSwitch checked={hiddenToggle ? false : true} onChange={() => { handleHiddenToggleChange(object) }} />
    )
}

export default ComponentHiddenToggle