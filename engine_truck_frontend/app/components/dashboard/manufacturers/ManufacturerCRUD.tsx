'use client';

import { Table, Button, Label, Modal, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { modifiedManufacturer, removeManufacturer } from '@/lib/redux/features/manufacturersSlice';
import { ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';
import { AppDispatch } from '@/lib/redux/store';
import { ManufacturerCreateForm } from './ManufacturerCreateForm';

export const ManufacturerCRUD = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);

    const [manufacturerName, setManufacturerName] = useState('');
    const [modalStates, setModalStates] = useState<{ [key: number]: boolean }>({});

    const onCloseModal = () => {
        setModalStates({});
        setManufacturerName('');
    }

    const handleDelete = (id: number) => {
        dispatch(removeManufacturer(id));
    }

    const handleUpdate = (data: ManufacturerResponse) => {
        dispatch(modifiedManufacturer(data));
        setModalStates({});
    }

    const handleEditClick = (object: ManufacturerResponse) => {
        setModalStates((prevStates) => ({ ...prevStates, [object.id]: true }));
        setManufacturerName(object.manufacturer);
    };

    return (
        <>
            <Table className='w-[70%]'>
                <Table.Head>
                    <Table.HeadCell>Fabricante</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Editar</span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Borrar</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {manufacturersList.map((object: ManufacturerResponse) => (
                        <Table.Row key={object.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {object.manufacturer}
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="blue" onClick={() => {
                                    handleEditClick(object);
                                }}>Editar</Button>
                                <Modal show={modalStates[object.id]} size="md" onClose={onCloseModal} popup>
                                    <Modal.Header />
                                    <Modal.Body>
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Editar</h3>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="name" value="Fabricante" />
                                                </div>
                                                <TextInput id="name" type="text" value={manufacturerName} onChange={(e) => { setManufacturerName(e.target.value) }} />
                                            </div>
                                            <div className="w-full">
                                                <Button onClick={() => {
                                                    if (manufacturerName !== object.manufacturer) {
                                                        const updatedObject = { ...object, manufacturer: manufacturerName }
                                                        handleUpdate(updatedObject);
                                                    }
                                                    else {
                                                        console.log('Sin cambios')
                                                    }
                                                }}>Actualizar</Button>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="failure" onClick={() => {
                                    handleDelete(object.id);
                                }}>Borrar</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <div>
                <ManufacturerCreateForm />
            </div>
        </>
    );
}