'use client';

import { useFormik } from 'formik';
import { Button, FileInput, Label, Select, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { MediaCreate } from '@/lib/services/interfaces/media';
import { addMedia } from '@/lib/redux/features/mediaSlice';
import { createMedia } from '@/lib/services/modules/media';

export const UploadImage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { enginesList } = useSelector((state: any) => state.enginesReducers);

    const formik = useFormik({
        initialValues: {
            file: null,
            media_type: 1,
            engine_id: 0,
        },
        onSubmit: async (values) => {
            await handleCreateMedia(values);
            formik.resetForm();
        }
    });

    const handleCreateMedia = async (values: MediaCreate) => {
        try {
            const formData = new FormData();
            formData.append('file', values.file as Blob);
            formData.append('media_type', String(values.media_type));
            formData.append('engine_id', String(values.engine_id));
            await dispatch(addMedia(formData));
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={formik.handleSubmit}>
            <div>
                <div className="mb-2">
                    <div>
                        <Label htmlFor="default-file-upload" value="Default size file input" />
                    </div>
                    <FileInput id="default-file-upload" onChange={(e) => {formik.setFieldValue('file', e.currentTarget.files?.[0]);}}/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="engine_id" value="Seleccione Motor" />
                    <Select id="engine_id" name="engine_id" required onChange={formik.handleChange} value={formik.values.engine_id}>
                        <option value="">Seleccione Motor</option>
                        {enginesList.map((object: EngineResponse) => (
                            <option key={object.id} value={object.id}>{object.model}</option>
                        ))}
                    </Select>
                </div>
            </div>
            <Button type="submit">Crear</Button>
        </form>
    )
}