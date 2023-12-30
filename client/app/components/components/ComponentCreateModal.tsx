'use client';

import React, { useState } from 'react'
import { Button, Label, Modal, TextInput, ToggleSwitch, FileInput } from 'flowbite-react'
import { addComponent } from '@/lib/redux/features/componentsSlice';
import { ErrorInputs } from '@/app/components/Errors';
import { ComponentCreate } from '@/lib/services/interfaces/components';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { useFormik } from 'formik';
import { MediaCreate } from '@/lib/services/interfaces/media';
import { addMedia } from '@/lib/redux/features/mediaSlice';

const ComponentCreateModal = () => {
    const dispatch = useDispatch<AppDispatch>();

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.component) {
            errors.component = 'El componente es requerido'
        }
        else if (!values.description) {
            errors.description = 'La descripción es requerida'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            component: '',
            description: '',
            hidden: 0,
            available: 0,
            media_type: 1,
            file: null
        },
        validate,
        onSubmit: async (values) => {
            const componentId: number = await handleCreateComponent(values);
            handleCreateMedia({ media_type: values.media_type, component_id: componentId, file: values.file });
            setHiddenToggle(0);
            setAvailableToggle(0);
            formik.resetForm();
        }
    });

    const [createModal, setCreateModal] = useState(false);
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

    const handleCreateMedia = async (values: MediaCreate) => {
        try {
            const formData = new FormData();
            formData.append('file', values.file as Blob);
            formData.append('media_type', String(values.media_type));
            formData.append('component_id', String(values.component_id));
            await dispatch(addMedia(formData));
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
                                <Label htmlFor="component" value="Componente" />
                            </div>
                            <TextInput id="component" type="text" placeholder='Ingrese el nombre del componente' onChange={formik.handleChange} value={formik.values.component} />
                            {formik.errors.component ? <ErrorInputs type={'failure'} message={formik.errors.component} title={undefined} /> : null}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="description" value="Descripción" />
                            </div>
                            <TextInput id="description" type="text" placeholder='Ingrese la descripción del componente' onChange={formik.handleChange} value={formik.values.description} />
                            {formik.errors.description ? <ErrorInputs type={'failure'} message={formik.errors.description} title={undefined} /> : null}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="default-file-upload" value="Imagen" />
                            </div>
                            <FileInput id="default-file-upload" onChange={(e) => { formik.setFieldValue('file', e.currentTarget.files?.[0]); }} />
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

export default ComponentCreateModal