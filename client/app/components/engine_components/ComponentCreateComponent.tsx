'use client';

import React, { useState } from 'react'
import { Button, Label, TextInput, Textarea, ToggleSwitch } from 'flowbite-react'
import { addComponent } from '@/lib/redux/features/componentsSlice';
import { ErrorInputs } from '@/app/components/Errors';
import { ComponentCreate } from '@/lib/services/interfaces/components';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { useFormik } from 'formik';

const ComponentCreateComponent = ({ setComponentId, onNext, onCancel }) => {
    const dispatch = useDispatch<AppDispatch>();

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.component) {
            errors.component = 'El nombre es requerido'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            component: '',
            description: '',
            hidden: 1,
            available: 0,
        },
        validate,
        onSubmit: async (values) => {
            const componentId: number = await handleCreateComponent(values);
            setComponentId(componentId);
            onNext();
            setHiddenToggle(0);
            setAvailableToggle(0);
            formik.resetForm();
        }
    });

    const [hiddenToggle, setHiddenToggle] = useState(0);
    const [availableToggle, setAvailableToggle] = useState(0);

    const handleCreateComponent = async (values: ComponentCreate) => {
        try {
            const data: any = await dispatch(addComponent(values));
            const componentId = data.payload.id;
            return componentId;
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
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Crear Componente</h3>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="component" value="Nombre" />
                </div>
                <TextInput id="component" type="text" placeholder='Ingrese el nombre del componente' onChange={formik.handleChange} value={formik.values.component} />
                {formik.errors.component ? <ErrorInputs type={'failure'} message={formik.errors.component} title={undefined} /> : null}
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="description" value="Descripción" />
                </div>
                <Textarea id="description" type="text" placeholder='Ingrese una descripción para el componente' onChange={formik.handleChange} value={formik.values.description} required rows={3}/>
                {formik.errors.description ? <ErrorInputs type={'failure'} message={formik.errors.description} title={undefined} /> : null}
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

export default ComponentCreateComponent