'use client';

import React, { useState } from 'react'
import { Button, Modal, Table } from 'flowbite-react'
import { useSelector } from 'react-redux';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import ComponentUpdateCompatibleEngine from './ComponentUpdateCompatibleEngine';

const ComponentCompatibleUpdate = ({ component }) => {
    const { enginesList } = useSelector((state: any) => state.enginesReducers);

    const [openModal, setOpenModal] = useState(false);
    
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Compatibles</Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body className="max-h-[80vh] overflow-y-auto">
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
                                    <ComponentUpdateCompatibleEngine component={component} engineId={object.id} />
                                </Table.Row>))}
                        </Table.Body>
                    </Table>
                </Modal.Body>
            </Modal>
        </ >
    )
}

export default ComponentCompatibleUpdate