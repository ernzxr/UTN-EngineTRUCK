'use client';

import React, { useState, useEffect } from 'react'
import { Button, Label, Modal, TextInput, Select } from 'flowbite-react'
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
    return (
    <>
     <Button onClick={openCreateModal}>Crear</Button><Modal show={createModal} size="md" onClose={closeCreateModal} popup>
        <Modal.Header />
            <Modal.Body>
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Crear Motor</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="model" value="Ingrese Modelo de Motor"/>
                        </div>
                        <TextInput id="model" type="text" placeholder='Ingrese el Modelo del Motor' onChange={formik.handleChange} value={formik.values.model}/>
                        {formik.errors.model ? <ErrorInputs type={'failure'} message={formik.errors.model} title={undefined} /> : null}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="brand_id" value="Seleccione Marca"/>
                        </div>
                        <Select id="brands" required onChange={formik.handleChange} value={formik.values.brand_id}>
                        {brandsList.map((object: EngineResponse) => (
                            <option key={object.id} value={object.id}>{object.brand}</option>
                        ))}
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="manufacturer_id" value="Seleccione Fabricante"/>
                        </div>
                        <Select id="manufacturer" required onChange={formik.handleChange} value={formik.values.manufacturer_id}>
                        {manufacturersList.map((object: EngineResponse) => (
                            <option key={object.id} value={object.id}>{object.manufacturer}</option>
                        ))}
                        </Select>
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