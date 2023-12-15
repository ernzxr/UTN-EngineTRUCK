'use client';

import { useFormik } from 'formik';
import { Button, Label, TextInput } from 'flowbite-react';
import { ErrorInputs } from '@/app/components/Errors';
import { ManufacturerCreate } from '@/lib/services/interfaces/manufacturers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addManufacturer, fetchManufacturers } from '@/lib/redux/features/manufacturersSlice';
import { AppDispatch } from '@/lib/redux/store';

export const ManufacturerCreateForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, manufacturersList, error, updateState, response } = useSelector((state: any) => state.manufacturersReducers);

    useEffect(() => {
        dispatch(fetchManufacturers());
    }, [dispatch]);

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.manufacturer) {
            errors.manufacturer = 'El fabricante es requerido'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            manufacturer: '',
        },
        validate,
        onSubmit: (values) => {
            handleCreateManufacturer(values);
        }
    });

    const handleCreateManufacturer = (values: ManufacturerCreate) => {
        dispatch(addManufacturer(values));
    };

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={formik.handleSubmit}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="manufacturer" value="Crear fabricante" />
                </div>
                <TextInput id="manufacturer" type="text" placeholder="Ingrese el fabricante" onChange={formik.handleChange} value={formik.values.manufacturer} />
                {formik.errors.manufacturer ? <ErrorInputs type={'failure'} message={formik.errors.manufacturer} title={undefined} /> : null}
            </div>
            <Button type="submit">Crear</Button>
        </form>
    )
}