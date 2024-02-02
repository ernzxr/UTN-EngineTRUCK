import { AppDispatch } from '@/lib/redux/store';
import { Button, Modal, Label, TextInput, Select } from 'flowbite-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { modifiedEngine } from '@/lib/redux/features/enginesSlice';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { BrandResponse } from '@/lib/services/interfaces/brands';
import { ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';
import { modifiedFeatureDetail } from '@/lib/redux/features/featureDetailsSlice';
import { update } from '@/lib/services/config';

const EngineUpdateModal = ({ object }: { object: EngineResponse }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { brandsList } = useSelector((state: any) => state.brandsReducers);
    const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);

    const [modalStates, setModalStates] = useState<{ [key: number]: boolean }>({});
    const [engineModel, setEngineModel] = useState('');
    const [brandId, setBrandId] = useState(0);
    const [manufacturerId, setManufacturerId] = useState(0);
    const [power, setPower] = useState('');
    const [consumption, setConsumption] = useState('');

    const onCloseModal = () => {
        setModalStates({});
        setEngineModel('');
        setConsumption('');
        setPower('');
        setBrandId(0);
        setManufacturerId(0);
    }

    const handleEditClick = (object: EngineResponse) => {
        setModalStates((prevStates) => ({ ...prevStates, [object.id]: true }));
        setEngineModel(object.model);
        setManufacturerId(object.manufacturer.id);
        setBrandId(object.brand.id);
        setPower(object.features_details[0].value);
        setConsumption(object.features_details[1].value);
    };

    const handlePutClick = (object: EngineResponse, engineModel: string, brandId: number, manufacturerId: number, consumption: string, power: string) => {
        const { id, model, brand, manufacturer, features_details } = object;
        let updatedObject: any = {};
        let updateFeatureDetailPower: any = {};
        let updateFeatureDetailConsumption: any = {};

        if (engineModel !== model) {
            updatedObject.model = engineModel;    
        }

        if (brandId !== brand.id) {
            updatedObject.brand_id = brandId;
        }

        if (manufacturerId !== manufacturer.id) {
            updatedObject.manufacturer_id = manufacturerId;
        }

        if (power !== features_details[0].value) {
            updateFeatureDetailPower.value = power;
        }

        if (consumption !== features_details[1].value) {
            updateFeatureDetailConsumption.value = consumption;
        }

        if (Object.keys(updateFeatureDetailPower).length > 0) {
            updateFeatureDetailPower.id = features_details[0].id;
            handleUpdateFeature(updateFeatureDetailPower);
        }

        if (Object.keys(updateFeatureDetailConsumption).length > 0) {
            updateFeatureDetailConsumption.id = features_details[1].id;
            handleUpdateFeature(updateFeatureDetailConsumption);
        }

        if (Object.keys(updatedObject).length > 0) {
            updatedObject.id = id;
            handleUpdateEngine(updatedObject);
        }
    }

    const handleUpdateEngine = (data: EngineResponse) => {
        dispatch(modifiedEngine(data));
        setModalStates({});
    }

    const handleUpdateFeature = (data: any) => {
        dispatch(modifiedFeatureDetail(data));
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
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="power" value="Potencia" />
                            </div>
                            <TextInput id="power" type="text" placeholder='Ingrese el Modelo del Motor' value={power} onChange={(e) => { setPower(e.target.value) }} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="consumption" value="Consumo" />
                            </div>
                            <TextInput id="consumption" type="text" placeholder='Ingrese el Modelo del Motor' value={consumption} onChange={(e) => { setConsumption(e.target.value) }} />
                        </div>
                        <div className="w-full">
                            <Button onClick={() => {
                                handlePutClick(object, engineModel, brandId, manufacturerId, consumption, power)
                            }}>Actualizar</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EngineUpdateModal