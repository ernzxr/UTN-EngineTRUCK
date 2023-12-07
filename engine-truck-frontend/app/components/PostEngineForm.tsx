'use client';

import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Button, Label, TextInput, Select } from 'flowbite-react';
import { ErrorInputs } from '@/app/components/Errors';
import { createEngine } from '@/app/services/modules/engines';
import { Engine } from '@/app/services/interfaces/engines';
import { useDispatch, useSelector } from 'react-redux';
import { fetchManufacturers } from '../redux/features/manufacturersSlice';
import { fetchBrands } from '../redux/features/brandsSlice';

export const PostEngineForm = () => {
  const dispatch = useDispatch();

  const brandsList = useSelector((state:any) => state.brands.brandsList);
  const manufacturersList = useSelector((state:any) => state.manufacturers.manufacturersList);

  useEffect(() => {
    dispatch(fetchManufacturers() as any);
    dispatch(fetchBrands() as any);
  }, [dispatch]);

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.model) {
      errors.model = 'El modelo es requerido'
    }
    return errors;
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    formik.setFieldValue(name, checked);
  };

  const formik = useFormik({
    initialValues: {
      model: '',
      manufacturer_id: '',
      brand_id: '',
      hidden: false,
      available: false
    },
    validate,
    onSubmit: (values) => {
      const engineData:any = {
        model: values.model,
        manufacturer_id: values.manufacturer_id,
        brand_id: values.brand_id,
        hidden: values.hidden ? 1 : 0,
        available: values.available ? 1 : 0
      }
      postEngine(engineData);
    },
  });

  const postEngine = (values:Engine) => {
    createEngine(values).then((data) => {
      formik.resetForm();
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={formik.handleSubmit}>
      <div>
        <div className="mb-2 block">
          <h1>Guardar Motor</h1>
          <Label htmlFor="model" value="Modelo" />
        </div>
        <TextInput id="model" type="text" placeholder="Ingrese el modelo" required onChange={formik.handleChange} value={formik.values.model} />
        {formik.errors.model ? <ErrorInputs type={'failure'} title={'Mensaje'} message={formik.errors.model} /> : null}
      </div>

      <div>
        <Label htmlFor="manufacturer_id" value="Selecciona un fabricante:" />
        <Select
          id="manufacturer_id"
          name="manufacturer_id"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.manufacturer_id}
          required
        >
          <option value="" label="Selecciona un fabricante" />
          {manufacturersList.map((manufacturer:any) => (
            <option key={manufacturer.id} value={manufacturer.id}>
              {manufacturer.manufacturer}
            </option>
          ))}
        </Select>
        {formik.touched.manufacturer_id && formik.errors.manufacturer_id ? (
          <ErrorInputs
            type={'failure'}
            title={'Mensaje'}
            message={formik.errors.manufacturer_id}
          />
        ) : null}
      </div>

      <div>
        <Label htmlFor="brand_id" value="Selecciona una marca:" />
        <Select
          id="brand_id"
          name="brand_id"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brand_id}
          required
        >
          <option value="" label="Selecciona una marca" />
          {brandsList.map((brand:any) => (
            <option key={brand.id} value={brand.id}>
              {brand.brand}
            </option>
          ))}
        </Select>
        {formik.touched.brand_id && formik.errors.brand_id ? (
          <ErrorInputs
            type={'failure'}
            title={'Mensaje'}
            message={formik.errors.brand_id}
          />
        ) : null}
      </div>

      <div>
        <Label htmlFor="hidden" value="¿El motor está oculto?" />
        <input
          id="hidden"
          name="hidden"
          type="checkbox"
          onChange={handleCheckboxChange}
          onBlur={formik.handleBlur}
          checked={formik.values.hidden}
        />
      </div>

      <div>
        <Label htmlFor="available" value="¿El motor está disponible?" />
        <input
          id="available"
          name="available"
          type="checkbox"
          onChange={handleCheckboxChange}
          onBlur={formik.handleBlur}
          checked={formik.values.available}
        />
      </div>

      <Button type="submit">Crear</Button>
    </form>
  )
}

