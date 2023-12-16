'use client';

import React, { useState, useEffect } from 'react'
import { Button, Label, Modal, TextInput, Select, ToggleSwitch } from 'flowbite-react'
import { addEngine, fetchEngines } from '@/lib/redux/features/enginesSlice';
import { fetchBrands } from '@/lib/redux/features/brandsSlice';
import { fetchManufacturers } from '@/lib/redux/features/manufacturersSlice';
import { ErrorInputs } from '../../Errors';
import { EngineCreate, EngineResponse } from '@/lib/services/interfaces/engines';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { useFormik } from 'formik';

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

    console.log(enginesList);

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.model) {
            errors.model = 'El modelo es requerido'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            model: '',
            hidden: 0,
            available: 0,
            brand_id: 0,
            manufacturer_id: 0
        },
        validate,
        onSubmit: (values) => {
            handleCreateEngine(values);
            console.log(enginesList);
            formik.resetForm();
        }
    });

    const handleCreateEngine = (values: EngineCreate) => {
        dispatch(addEngine(values));
    };

    const [createModal, setCreateModal] = useState(false);
    
    const openCreateModal = () => {
        setCreateModal(true);
      };
      
      const closeCreateModal = () => {
        setCreateModal(false);
      };

      const [hiddenToggle, setHiddenToggle] = useState(0);

      const handleHiddenToggleChange = () => {
        setHiddenToggle((prevToggle) => (prevToggle === 0 ? 1 : 0));
        formik.setFieldValue('hidden', hiddenToggle === 0 ? 1 : 0);
    };

    const [availableToggle, setAvailableToggle] = useState(0);

    const handleAvailableToggleChange = () => {
        setAvailableToggle((prevToggle) => (prevToggle === 0 ? 1 : 0));
        formik.setFieldValue('available', availableToggle === 0 ? 1 : 0);
    };



    return (
    <>
     <Button onClick={openCreateModal}>Crear</Button><Modal show={createModal} size="md" onClose={closeCreateModal} popup>
        <Modal.Header />
            <Modal.Body>
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Crear Motor</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="model" value="Ingrese Modelo de Motor:"/>
                        </div>
                        <TextInput id="model" type="text" placeholder='Ingrese el Modelo del Motor' onChange={formik.handleChange} value={formik.values.model}/>
                        {formik.errors.model ? <ErrorInputs type={'failure'} message={formik.errors.model} title={undefined} /> : null}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="brand_id" value="Seleccione Marca:"/>
                        </div>
                        <Select id="brands" name="brand_id" required onChange={formik.handleChange} value={formik.values.brand_id}>
                        {brandsList.map((object: EngineResponse) => (
                            <option key={object.id} value={object.id}>{object.brand}</option>
                        ))}
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="manufacturer_id" value="Seleccione Fabricante:"/>
                        </div>
                        <Select id="manufacturer" name="manufacturer_id" required onChange={formik.handleChange} value={formik.values.manufacturer_id}>
                        {manufacturersList.map((object: EngineResponse) => (
                            <option key={object.id} value={object.id}>{object.manufacturer}</option>
                        ))}
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="avalaible" value="Disponibilidad:"/>
                            <ToggleSwitch checked={hiddenToggle === 1} label={hiddenToggle === 0 ? "No disponible" : "Disponible"} onChange={handleHiddenToggleChange} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="hidden" value="Visibilidad:"/>
                            <ToggleSwitch checked={availableToggle === 1} label={availableToggle === 0 ? "No visible" : "Visible"} onChange={handleAvailableToggleChange} />
                        </div>
                    </div>
                    <div className="w-full">
                        <Button type="submit">Crear</Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default EngineCreateModal