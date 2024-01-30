'use client';

import React, { useEffect, useState } from 'react'
import { Table, ToggleSwitch } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { addCompatibleComponent, removeCompatibleComponent } from '@/lib/redux/features/compatibleComponentsSlice';

const ComponentCompatibleEngineToggle = ({ componentId, engineId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { compatibleComponentsList } = useSelector((state: any) => state.compatibleComponentsReducers);

    let initialId: number | undefined = undefined;

    useEffect(() => {
        initialId = compatibleComponentsList.find((item: { id: number; component_id: number; engine_id: number; }) => {
            return item.component_id === componentId && item.engine_id === engineId;
        })?.id;
    }, []);

    const [compatible, setCompatible] = useState(() => initialId ? 1 : 0);
    const [compatibleId, setCompatibleId] = useState(initialId);

    const handleCompatibleEngine = async () => {
        try {
            if (!compatible) {
                const payload = {
                    component_id: componentId,
                    engine_id: engineId
                }
                const data = await dispatch(addCompatibleComponent(payload));
                setCompatibleId(data.payload.id);
            }
            else {
                await dispatch(removeCompatibleComponent(compatibleId))
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