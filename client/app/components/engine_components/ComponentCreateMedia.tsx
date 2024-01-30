'use client';

import React from 'react'
import { Button, Label, FileInput } from 'flowbite-react'
import { useFormik } from 'formik';
import { MediaCreate } from '@/lib/services/interfaces/media';
import { addMedia } from '@/lib/redux/features/mediaSlice';
import { AppDispatch } from '@/lib/redux/store';
import { useDispatch } from 'react-redux';

const ComponentCreateMedia = ({ componentId, onFinish }) => {
    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik({
        initialValues: {
            media_type: 1,
            file: null,
            component_id: componentId
        },
        onSubmit: async (values) => {
            handleCreateMedia(values);
            onFinish();
            formik.resetForm();
        }
    });

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

    const handleOmit = () => {
        formik.resetForm();
        onFinish();
    };

    return (
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Imagen</h3>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="default-file-upload" value="Imagen" />
                </div>
                <FileInput id="default-file-upload" onChange={(e) => { formik.setFieldValue('file', e.currentTarget.files?.[0]); }} />
            </div>
            <div className="w-full flex justify-between">
                <Button type="button" color="failure" onClick={handleOmit}>Omitir</Button>
                <Button type="submit">Finalizar</Button>
            </div>
        </form>
    )
}

export default ComponentCreateMedia