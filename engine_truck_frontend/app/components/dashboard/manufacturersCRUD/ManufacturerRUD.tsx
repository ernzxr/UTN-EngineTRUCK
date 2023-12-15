'use client';

import { Table, Button, Label, Modal, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchManufacturers, modifiedManufacturer, removeManufacturer } from '@/lib/redux/features/manufacturersSlice';
import { Manufacturer, ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';
import { AppDispatch } from '@/lib/redux/store';

export const ManufacturerRUD = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);

    const [openModal, setOpenModal] = useState(false);
    const [manufacturerName, setManufacturerName] = useState('');

    useEffect(() => {
        dispatch(fetchManufacturers());
    }, [dispatch]);

    const onCloseModal = () => {
        setOpenModal(false);
        setManufacturerName('');
    }

    const handleDelete = (id: number) => {
        dispatch(removeManufacturer(id));
    }

    const handleUpdate = (data: Manufacturer) => {
        dispatch(modifiedManufacturer(data));
    }

    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    <Table.HeadCell>Fabricante</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Delete</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {manufacturersList.map((manufacturer: Manufacturer) => (
                        <Table.Row key={manufacturer.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {manufacturer.manufacturer}
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="blue" onClick={() => {
                                    setOpenModal(true);
                                    setManufacturerName(manufacturer.manufacturer);
                                }}>Editar</Button>
                                <Modal show={openModal} size="md" onClose={onCloseModal} popup>
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
                                                    handleUpdate(manufacturer);
                                                }}>Actualizar</Button>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="failure" onClick={() => {
                                    handleDelete(manufacturer.id);
                                }}>Borrar</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}