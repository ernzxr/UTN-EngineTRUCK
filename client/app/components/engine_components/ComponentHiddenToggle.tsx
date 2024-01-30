import { modifiedComponent } from "@/lib/redux/features/componentsSlice";
import { AppDispatch } from "@/lib/redux/store";
import { ComponentResponse } from "@/lib/services/interfaces/components";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ComponentHiddenToggle = ({ object }: { object: ComponentResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [hiddenToggle, setHiddenToggle] = useState(0);

    const handleHiddenToggleChange = (object: ComponentResponse, checked: boolean) => {
        const { id } = object;
        let updatedObject: any = { id: id };

        setHiddenToggle((prevToggle) => (prevToggle ? 0 : 1));
        updatedObject.hidden = hiddenToggle;

        dispatch(modifiedComponent(updatedObject));
    };

    return (
        <ToggleSwitch checked={object.hidden ? false : true} onChange={(checked) => { handleHiddenToggleChange(object, checked); }} />
    )
}

export default ComponentHiddenToggle