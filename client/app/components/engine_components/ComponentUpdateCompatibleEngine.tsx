'use client';

import React, { useState } from 'react'
import { Table, ToggleSwitch } from 'flowbite-react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { addCompatibleComponent, removeCompatibleComponent } from '@/lib/redux/features/compatibleComponentsSlice';

const ComponentCompatibleEngineToggle = ({ component, engineId }) => {
    const dispatch = useDispatch<AppDispatch>();

    let initialValue = 0;

    if(component.compatibles_engines.length > 0) {
        const compatibleComponent = component.compatibles_engines.find(e => e.id === engineId);
        initialValue = compatibleComponent.compatible_component_id;
    }

    const [compatible, setCompatible] = useState(initialValue ? 1 : 0);
    const [compatibleId, setCompatibleId] = useState(initialValue);

    const handleCompatibleEngine = async () => {
        try {
            if (!compatible) {
                const payload = {
                    component_id: component.id,
                    engine_id: engineId
                }
                const data = await dispatch(addCompatibleComponent(payload));
                setCompatibleId(data.payload.id);
            }
            else {
                dispatch(removeCompatibleComponent(compatibleId))
            }
            compatible ? setCompatible(0) : setCompatible(1);
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <ToggleSwitch checked={compatible ? true : false} onChange={handleCompatibleEngine} />
            </Table.Cell>
        </ >
    )
}

export default ComponentCompatibleEngineToggle