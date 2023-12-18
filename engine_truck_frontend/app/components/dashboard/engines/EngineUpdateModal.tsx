import { AppDispatch } from '@/lib/redux/store';
import { Button, Modal, Label, TextInput, Select, ToggleSwitch } from 'flowbite-react';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEngines, modifiedEngine } from '@/lib/redux/features/enginesSlice';
import { fetchManufacturers } from '@/lib/redux/features/manufacturersSlice';
import { fetchBrands } from '@/lib/redux/features/brandsSlice';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { BrandResponse } from '@/lib/services/interfaces/brands';
import { ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';

const EngineUpdateModal = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { enginesList } = useSelector((state: any) => state.enginesReducers);
    const { brandsList } = useSelector((state: any) => state.brandsReducers);
    const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);

    const [engineName, setEngineName] = useState('');
    const [modalStates, setModalStates] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        dispatch(fetchEngines());
    }, [dispatch]);

    const onCloseModal = () => {
        setModalStates({});
        setEngineName('');
    }

    const handleUpdate = (data: EngineResponse) => {
        dispatch(modifiedEngine(data));
        setModalStates({});
    }

    const handleEditClick = (object: EngineResponse) => {
        setModalStates((prevStates) => ({ ...prevStates, [object.id]: true }));
        setEngineName(object.model);
    };

    const [updateModal, setUpdateModal] = useState(false);

    const openUpdateModal = () => {
        setUpdateModal(true);
    };

    const closeUpdateModal = () => {
        setUpdateModal(false);
    };

    const [hiddenToggle, setHiddenToggle] = useState(0);

    const handleHiddenToggleChange = () => {
        setHiddenToggle((prevToggle) => (prevToggle ? 0 : 1));
    };

    const [availableToggle, setAvailableToggle] = useState(0);

    const handleAvailableToggleChange = () => {
        setAvailableToggle((prevToggle) => (prevToggle ? 0 : 1));
    };

    return (
        <>
            <Button onClick={openUpdateModal}>Editar</Button>
            <Modal show={updateModal} size="md" onClose={closeUpdateModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Crear Motor</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="model" value="Ingrese Modelo de Motor:" />
                            </div>
                            <TextInput id="model" type="text" placeholder='Ingrese el Modelo del Motor' value={engineName} onChange={(e) => { setEngineName(e.target.value) }} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="brand_id" value="Seleccione Marca:" />
                            </div>
                            <Select id="brand_id" name="brand_id">
                                {brandsList.map((object: BrandResponse) => (
                                    <option key={object.id} value={object.id}>{object.brand}</option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="manufacturer_id" value="Seleccione Fabricante:" />
                            </div>
                            <Select id="manufacturer_id" name="manufacturer_id">
                                {manufacturersList.map((object: ManufacturerResponse) => (
                                    <option key={object.id} value={object.id}>{object.manufacturer}</option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="available" value="Disponibilidad:" />
                                <ToggleSwitch id="available" checked={availableToggle ? true : false} label={availableToggle === 0 ? "No disponible" : "Disponible"} onChange={handleAvailableToggleChange} />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="hidden" value="Visibilidad:" />
                            <ToggleSwitch id="hidden" checked={hiddenToggle ? true : false} label={!hiddenToggle ? "Oculto" : "Visible"} onChange={handleHiddenToggleChange} />
                        </div>
                    </div>
                    <div className="w-full">
                        <Button type="submit">Actualizar</Button>
                    </div>
                    <div className="w-full absolute left-[75%] bottom-[5%]">
                        <Button type="submit" onClick={closeUpdateModal}>Salir</Button>
                    </div>
                </Modal.Body>
            </Modal >
        </>
    )
}

export default EngineUpdateModal