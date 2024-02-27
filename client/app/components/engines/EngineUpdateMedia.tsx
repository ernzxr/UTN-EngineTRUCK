'use client';

import React, { useState } from 'react'
import { Button, Label, FileInput, Modal } from 'flowbite-react'
import { useFormik } from 'formik';
import { MediaCreate } from '@/lib/services/interfaces/media';
import { modifiedMedia } from '@/lib/redux/features/mediaSlice';
import { AppDispatch } from '@/lib/redux/store';
import { useDispatch } from 'react-redux';
import { EngineResponse } from '@/lib/services/interfaces/engines';

const EngineUpdateMedia = ({ object }: any) => {
    const dispatch = useDispatch<AppDispatch>();

    const [modalStates, setModalStates] = useState<{ [key: number]: boolean }>({});

    const formik = useFormik({
        initialValues: {
            media_type: 1,
            file: null,
            engine_id: object.id,
            id: object.media[0]?.id
        },
        onSubmit: async (values) => {
            handleCreateMedia(values);
            formik.resetForm();
            onCloseModal();
        }
    });

    const handleCreateMedia = async (values: MediaCreate) => {
        try {
            const formData = new FormData();
            formData.append('file', values.file as Blob);
            formData.append('media_type', String(values.media_type));
            formData.append('engine_id', String(values.engine_id));
            const updateObject = {
                id: values.id,
                formData: formData
            }
            await dispatch(modifiedMedia(updateObject));
        }
        catch (error) {
            console.error(error);
        }
    };

    const onCloseModal = () => {
        setModalStates({});
    }

    const handleCancel = () => {
        onCloseModal();
    };

    const handleEditClick = (object: EngineResponse) => {
        setModalStates((prevStates) => ({ ...prevStates, [object.id]: true }));
    }

    const backendURL = "http://localhost:5500/";

    return (
        <>
            <Button color="blue" onClick={() => {
                handleEditClick(object);
            }}>Editar</Button>
            <Modal show={modalStates[object.id]} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form className="space-y-6" onSubmit={formik.handleSubmit}>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Cambiar Imagen</h3>
                        <img src={`${backendURL}${object.media[0]?.file}`} style={{ maxWidth: '100%', maxHeight: '400px' }} width="200px" alt="" className='rounded-[10px]' />
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="default-file-upload" />
                            </div>
                            <FileInput id="default-file-upload" onChange={(e) => {
                                formik.setFieldValue('file', e.currentTarget.files?.[0]);
                                formik.setFieldValue('id', object.media[0].id);
                            }} />
                        </div>
                        <div className="w-full flex justify-between">
                            <Button type="button" color="failure" onClick={handleCancel}>Cancelar</Button>
                            <Button type="submit">Modificar</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal >
        </>
    )
}

export default EngineUpdateMedia