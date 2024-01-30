'use client';

import React from 'react'
import { Button, Table } from 'flowbite-react'
import { useSelector } from 'react-redux';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import ComponentCompatibleEngineToggle from './ComponentCompatibleEngineToggle';

const ComponentCompatibleUpdate = ({ componentId }) => {
    const { enginesList } = useSelector((state: any) => state.enginesReducers);

    return (
        <>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Motores Compatibles</h3>
            <Table>
                <Table.Head>
                    <Table.HeadCell>Modelo</Table.HeadCell>
                    <Table.HeadCell>Compatibilidad</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {enginesList?.map((object: EngineResponse) => (
                        <Table.Row key={object.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {object.model}
                            </Table.Cell>
                            <ComponentCompatibleEngineToggle componentId={componentId} engineId={object.id} />
                        </Table.Row>))}
                </Table.Body>
            </Table>
        </ >
    )
}

export default ComponentCompatibleUpdate