'use client';

import React, { useState } from 'react'
import { Button, Label, TextInput, Select, ToggleSwitch } from 'flowbite-react'
import { addEngine } from '@/lib/redux/features/enginesSlice';
import { ErrorInputs } from '@/app/components/Errors';
import { EngineCreate } from '@/lib/services/interfaces/engines';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { useFormik } from 'formik';
import { ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';
import { BrandResponse } from '@/lib/services/interfaces/brands';

const EngineCreateEngine = ({ setEngineId, onNext, onCancel }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { brandsList } = useSelector((state: any) => state.brandsReducers);
    const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);

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
            hidden: 1,
            available: 0,
            brand_id: 0,
            manufacturer_id: 0,
        },
        validate,
        onSubmit: async (values) => {
            const engineId: number = await handleCreateEngine(values);
            setEngineId(engineId);
            onNext();
            setHiddenToggle(0);
            setAvailableToggle(0);
            formik.resetForm();
        }
    });

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

    const handleCancel = () => {
        onCancel();
        setHiddenToggle(0);
        setAvailableToggle(0);
        formik.resetForm();
    };

    const handleHiddenToggleChange = () => {
        setHiddenToggle((prevToggle) => (prevToggle ? 0 : 1));
        formik.setFieldValue('hidden', !hiddenToggle ? 0 : 1);
    };

    const handleAvailableToggleChange = () => {
        setAvailableToggle((prevToggle) => (prevToggle ? 0 : 1));
        formik.setFieldValue('available', !availableToggle ? 1 : 0);
    };

    return (
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
                <Button type="button" color="failure" onClick={handleCancel}>Cancelar</Button>
                <Button type="submit">Siguiente</Button>
            </div>
        </form>
    )
}

export default EngineCreateEngine