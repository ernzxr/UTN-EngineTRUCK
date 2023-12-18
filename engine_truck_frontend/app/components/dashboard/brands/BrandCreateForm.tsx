'use client';

import { useFormik } from 'formik';
import { Button, Label, TextInput } from 'flowbite-react';
import { ErrorInputs } from '@/app/components/Errors';
import { BrandCreate } from '@/lib/services/interfaces/brands';
import { useDispatch } from 'react-redux';
import { addBrand } from '@/lib/redux/features/brandsSlice';
import { AppDispatch } from '@/lib/redux/store';

export const BrandCreateForm = () => {
    const dispatch = useDispatch<AppDispatch>();

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.brand) {
            errors.brand = 'La marca es requerida'
        }
        else if(values.brand.length > 45) {
          errors.brand = "Maximo 45 caracteres"
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            brand: '',
        },
        validate,
        onSubmit: (values) => {
            handleCreateBrand(values);
            formik.resetForm();
        }
    });

    const handleCreateBrand = (values: BrandCreate) => {
        dispatch(addBrand(values));
    };

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={formik.handleSubmit}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="brand" value="Crear marca" />
                </div>
                <TextInput id="brand" type="text" placeholder="Ingrese la marca" onChange={formik.handleChange} value={formik.values.brand} />
                {formik.errors.brand ? <ErrorInputs type={'failure'} message={formik.errors.brand} title={undefined} /> : null}
            </div>
            <Button type="submit">Crear</Button>
        </form>
    )
}