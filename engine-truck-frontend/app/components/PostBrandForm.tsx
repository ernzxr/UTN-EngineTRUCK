'use client';

import { useFormik } from 'formik';
import { Button, Label, TextInput } from 'flowbite-react';
import { ErrorInputs } from '@/app/components/Errors';
import { createBrand } from '@/app/services/modules/brands';
import { Brand } from '@/app/services/interfaces/brands';

export const PostBrandForm = () => {
    const validate = (values:any) => {
        const errors:any = {};
        if(!values.brand) {
            errors.brand = 'La marca es requerida'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            brand:'',
        },
        validate,
        onSubmit: values => {
          postBrand(values);
        }
    });

    const postBrand = (values:Brand) => {
        createBrand(values).then((data) => {
            formik.resetForm();
        }).catch((err) => {
            console.log(err)
        });
    };

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={formik.handleSubmit}>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="brand" value="Crear marca" />
                </div>
                <TextInput id="brand" type="text" placeholder="Ingrese la marca" required onChange={formik.handleChange} value={formik.values.brand}/>
                {formik.errors.brand ? <ErrorInputs type={'failure'} title={'Mensaje'} message={formik.errors.brand}/> : null }
            </div>
            <Button type="submit">Crear</Button>
        </form>
    )
}