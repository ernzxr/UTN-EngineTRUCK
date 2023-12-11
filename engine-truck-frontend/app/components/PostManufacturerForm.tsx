'use client';

import { useFormik } from 'formik';
import { Button, Label, TextInput } from 'flowbite-react';
import { ErrorInputs } from '@/app/components/Errors';
import { createManufacturer } from '@/lib/services/modules/manufacturers';
import { Manufacturer } from '@/lib/services/interfaces/manufacturers';

export const PostManufacturerForm = () => {
    const validate = (values:any) => {
        const errors:any = {};
        if(!values.manufacturer) {
            errors.manufacturer = 'El fabricante es requerido'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            manufacturer:'',
        },
        validate,
        onSubmit: values => {
          postManufacturer(values);
        }
    });

    const postManufacturer = (values:Manufacturer) => {
        createManufacturer(values).then((data) => {
            formik.resetForm();
        }).catch((err) => {
            console.log(err)
        });
    };

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={formik.handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="manufacturer" value="Crear fabricante" />
        </div>
        <TextInput id="manufacturer" type="text" placeholder="Ingrese el fabricante" required onChange={formik.handleChange} value={formik.values.manufacturer}/>
        {formik.errors.manufacturer ? <ErrorInputs type={'failure'} title={'Mensaje'} message={formik.errors.manufacturer}/> : null }
      </div>
      <Button type="submit">Crear</Button>
    </form>
    )
}