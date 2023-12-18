'use client';

import React, { useState, useEffect } from 'react'
import { Button, Label, Modal, TextInput, Select, ToggleSwitch } from 'flowbite-react'
import { addEngine } from '@/lib/redux/features/enginesSlice';
import { ErrorInputs } from '../../Errors';
import { EngineCreate } from '@/lib/services/interfaces/engines';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { useFormik } from 'formik';
import { ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';
import { BrandResponse } from '@/lib/services/interfaces/brands';

interface EngineCreateModalProps {
    manufacturersList: ManufacturerResponse[];
    brandsList: BrandResponse[];
  }

const EngineCreateModal: React.FC<EngineCreateModalProps> = ({manufacturersList, brandsList}) => {

    const dispatch = useDispatch<AppDispatch>();
    /*const { brandsList } = useSelector((state: any) => state.brandsReducers);
    const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);*/

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
            manufacturer_id: 0
        },
        validate,
        onSubmit: (values) => {
            handleCreateEngine(values);
            setHiddenToggle(0);
            setAvailableToggle(0);
            formik.resetForm();
        }
    });

    const handleCreateEngine = (values: EngineCreate) => {
        dispatch(addEngine(values));
    };

    const [createModal, setCreateModal] = useState(false);
    const [hiddenToggle, setHiddenToggle] = useState(0);
    const [availableToggle, setAvailableToggle] = useState(0);
    
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
                            <Label htmlFor="manufacturer_id" value="Seleccione Fabricante:"/>
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
                            <Label htmlFor="available" value="Disponibilidad:"/>
                            <ToggleSwitch id="available" checked={availableToggle ? true : false} label={!availableToggle ? "No disponible" : "Disponible"} onChange={handleAvailableToggleChange} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="hidden" value="Visibilidad:"/>
                            <ToggleSwitch id="hidden" checked={hiddenToggle ? true : false} label={!hiddenToggle ? "Oculto" : "Visible"} onChange={handleHiddenToggleChange} />
                        </div>
                    </div>
                    <div className="w-full">
                        <Button type="submit">Crear</Button>
                    </div>
                    <div className="w-full absolute left-[75%] bottom-[5%]">
                        <Button type="submit" onClick={closeCreateModal}>Salir</Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default EngineCreateModal