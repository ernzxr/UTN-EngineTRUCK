'use client';

import React, { useState, useEffect } from 'react'
import { Button, Label, Modal, TextInput, Select, ToggleSwitch, FileInput } from 'flowbite-react'
import { addEngine, fetchEngines } from '@/lib/redux/features/enginesSlice';
import { ErrorInputs } from '@/app/components/Errors';
import { EngineCreate } from '@/lib/services/interfaces/engines';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { useFormik } from 'formik';
import { ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';
import { BrandResponse } from '@/lib/services/interfaces/brands';
import { MediaCreate } from '@/lib/services/interfaces/media';
import { createMedia } from '@/lib/services/modules/media';
import { fetchBrands } from '@/lib/redux/features/brandsSlice';
import { fetchManufacturers } from '@/lib/redux/features/manufacturersSlice';

const EngineCreateModal = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, enginesList, error, updateState, response } = useSelector((state: any) => state.enginesReducers);
    const { brandsList } = useSelector((state: any) => state.brandsReducers);
    const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);

    useEffect(() => {
        dispatch(fetchEngines());
        dispatch(fetchBrands());
        dispatch(fetchManufacturers());
    }, [dispatch]);

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.model) {
            errors.model = 'El modelo es requerido'
        }
        else if (!values.manufacturer_id) {
            errors.manufacturer_id = 'El fabricante es requerido'
        }
        else if (!values.brand_id) {
            errors.brand_id = 'La marca es requerida'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            model: '',
            hidden: 0,
            available: 0,
            brand_id: 0,
            manufacturer_id: 0,
            media_type: 1,
            file: null
        },
        validate,
        onSubmit: async (values) => {
            const engineId: number = await handleCreateEngine(values);
            handleCreateMedia({ media_type: values.media_type, engine_id: engineId, file: values.file });
            setHiddenToggle(0);
            setAvailableToggle(0);
            formik.resetForm();
        }
    });

    const [createModal, setCreateModal] = useState(false);
    const [hiddenToggle, setHiddenToggle] = useState(0);
    const [availableToggle, setAvailableToggle] = useState(0);

    const handleCreateEngine = async (values: EngineCreate) => {
        try {
            const data: any = await dispatch(addEngine(values));
            const engineId = data.payload.id;
            return engineId;
        }
        catch (e) {
            console.log(e);
        }
    };

    const handleCreateMedia = async (values: MediaCreate) => {
        try {
            const formData = new FormData();
            formData.append('file', values.file as Blob);
            formData.append('media_type', String(values.media_type));
            formData.append('engine_id', String(values.engine_id));
            await createMedia(formData);
        }
        catch (error) {
            console.error(error);
        }
    };

    const openCreateModal = () => {
        setHiddenToggle(0);
        setAvailableToggle(0);
        setCreateModal(true);
    };

    const closeCreateModal = () => {
        setCreateModal(false);
    };

    const handleHiddenToggleChange = () => {
        setHiddenToggle((prevToggle) => (prevToggle ? 0 : 1));
        formik.setFieldValue('hidden', !hiddenToggle ? 1 : 0);
    };

    const handleAvailableToggleChange = () => {
        setAvailableToggle((prevToggle) => (prevToggle ? 0 : 1));
        formik.setFieldValue('available', !availableToggle ? 1 : 0);
    };

    return (
        <>
            <Button onClick={openCreateModal}>Crear</Button>
            <Modal show={createModal} size="md" onClose={closeCreateModal} popup>
                <Modal.Header />
                <Modal.Body className="max-h-[80vh] overflow-y-auto">
                    <form className="space-y-6" onSubmit={formik.handleSubmit}>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Crear Motor</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="model" value="Modelo del Motor" />
                            </div>
                            <TextInput id="model" type="text" placeholder='Ingrese el Modelo del Motor' onChange={formik.handleChange} value={formik.values.model} />
                            {formik.errors.model ? <ErrorInputs type={'failure'} message={formik.errors.model} title={undefined} /> : null}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="default-file-upload" value="Imagen" />
                            </div>
                            <FileInput id="default-file-upload" onChange={(e) => { formik.setFieldValue('file', e.currentTarget.files?.[0]); }} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="brand_id" value="Marca" />
                            </div>
                            <Select id="brand_id" name="brand_id" required onChange={formik.handleChange} value={formik.values.brand_id}>
                                {formik.errors.brand_id ? <ErrorInputs type={'failure'} message={formik.errors.brand_id} title={undefined} /> : null}
                                <option value="">Seleccione Marca</option>
                                {brandsList.map((object: BrandResponse) => (
                                    <option key={object.id} value={object.id}>{object.brand}</option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="manufacturer_id" value="Fabricante" />
                            </div>
                            <Select id="manufacturer_id" name="manufacturer_id" required onChange={formik.handleChange} value={formik.values.manufacturer_id}>
                                {formik.errors.manufacturer_id ? <ErrorInputs type={'failure'} message={formik.errors.manufacturer_id} title={undefined} /> : null}
                                <option value="">Seleccione Fabricante</option>
                                {manufacturersList.map((object: ManufacturerResponse) => (
                                    <option key={object.id} value={object.id}>{object.manufacturer}</option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="available" value="Disponibilidad" />
                                <ToggleSwitch id="available" checked={availableToggle ? true : false} label={availableToggle === 0 ? "No disponible" : "Disponible"} onChange={handleAvailableToggleChange} />
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="hidden" value="Visibilidad" />
                                <ToggleSwitch id="hidden" checked={hiddenToggle ? true : false} label={!hiddenToggle ? "Oculto" : "Visible"} onChange={handleHiddenToggleChange} />
                            </div>
                        </div>
                        <div className="w-full flex justify-between">
                            <Button type="submit">Crear</Button>
                            <Button type="button" color="failure" onClick={closeCreateModal}>Salir</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EngineCreateModal