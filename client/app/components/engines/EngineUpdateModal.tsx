import { AppDispatch } from '@/lib/redux/store';
import { Button, Modal, Label, TextInput, Select } from 'flowbite-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { modifiedEngine } from '@/lib/redux/features/enginesSlice';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { BrandResponse } from '@/lib/services/interfaces/brands';
import { ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';

const EngineUpdateModal = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { brandsList } = useSelector((state: any) => state.brandsReducers);
    const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);

    const [modalStates, setModalStates] = useState<{ [key: number]: boolean }>({});
    const [updateModal, setUpdateModal] = useState(false);
    const [engineModel, setEngineModel] = useState('');
    const [brandId, setBrandId] = useState(0);
    const [manufacturerId, setManufacturerId] = useState(0);

    const openUpdateModal = () => {
        setUpdateModal(true);
    };

    const closeUpdateModal = () => {
        setUpdateModal(false);
    };

    const onCloseModal = () => {
        setModalStates({});
        setEngineModel('');
        setBrandId(0);
        setManufacturerId(0);
    }

    const handleEditClick = (object: EngineResponse) => {
        setModalStates((prevStates) => ({ ...prevStates, [object.id]: true }));
        setEngineModel(object.model);
        setManufacturerId(object.manufacturer_id);
        setBrandId(object.brand_id);
    };

    const handlePutClick = (object: EngineResponse, engineModel: string, brandId: number, manufacturerId: number) => {
        const { id, model, brand_id, manufacturer_id } = object;
        let updatedObject: any = {};

        if (engineModel !== model) {
            updatedObject.model = engineModel;    
        }

        if (brandId !== brand_id) {
            updatedObject.brand_id = brandId;
        }

        if (manufacturerId !== manufacturer_id) {
            updatedObject.manufacturer_id = manufacturerId;
        }

        if (Object.keys(updatedObject).length > 0) {
            updatedObject.id = id;
            handleUpdate(updatedObject);
        }
        else {
            console.log('Sin cambios')
        }
    }

    const handleUpdate = (data: EngineResponse) => {
        dispatch(modifiedEngine(data));
        setModalStates({});
    }

    return (
        <>
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
                                <Label htmlFor="model" value="Motor" />
                            </div>
                            <TextInput id="model" type="text" placeholder='Ingrese el Modelo del Motor' value={engineModel} onChange={(e) => { setEngineModel(e.target.value) }} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="brand_id" value="Marca" />
                            </div>
                            <Select id="brand_id" name="brand_id" value={brandId} onChange={(e) => { setBrandId(Number(e.target.value)) }}>
                                {brandsList.map((objectBrand: BrandResponse) => (
                                    <option key={objectBrand.id} value={objectBrand.id}>{objectBrand.brand}</option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="manufacturer_id" value="Fabricante" />
                            </div>
                            <Select id="manufacturer_id" name="manufacturer_id" value={manufacturerId} onChange={(e) => { setManufacturerId(Number(e.target.value)) }}>
                                {manufacturersList.map((objectManufacturer: ManufacturerResponse) => (
                                    <option key={objectManufacturer.id} value={objectManufacturer.id}>{objectManufacturer.manufacturer}</option>
                                ))}
                            </Select>
                        </div>
                        <div className="w-full">
                            <Button onClick={() => {
                                handlePutClick(object, engineModel, brandId, manufacturerId)
                            }}>Actualizar</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EngineUpdateModal