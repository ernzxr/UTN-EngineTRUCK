'use client';

import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import { ErrorInputs } from '@/app/components/Errors';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { useFormik } from 'formik';
import { FeatureCreate } from '@/lib/services/interfaces/features';
import { addFeature } from '@/lib/redux/features/featuresSlice';
import { addFeatureDetail } from '@/lib/redux/features/featureDetailsSlice';

const EngineCreateFeatures = ({ engineId, onNext, onCancel }) => {
    const dispatch = useDispatch<AppDispatch>();

    interface FeatureIds {
        [key: string]: number;
      }

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.power) {
            errors.power = 'La potencia es requerida'
        }
        else if (!values.consumption) {
            errors.consumption = 'El consumo es requerido'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            power: '',
            consumption: '',
        },
        validate,
        onSubmit: async (values) => {
            const featuresIds = await handleCreateFeature(values);
            await handleLinkFeatures(engineId, featuresIds, values);
            onNext();
            formik.resetForm();
        }
    });

    const handleCreateFeature = async (values: FeatureCreate) => {
        try {
            const featuresIds: FeatureIds = {};
            const features = ['Potencia', 'Consumo']
            let i = 0;
            for (const feature in values) {
                const payload = {
                    feature_name: features[i],
                }
                const data: any = await dispatch(addFeature(payload));
                const featureId = data.payload.id;
                featuresIds[feature] = featureId;
                i++;
            }
            return featuresIds;
        }
        catch (e) {
            console.log(e);
        }
    };

    const handleLinkFeatures = async (engineId: number, featuresIds: FeatureIds, values: any) => {
        try {
            for (const feature in values) {
                const value = values[feature];
                const featureId = featuresIds[feature];
                const payload = {
                    engine_id: engineId,
                    feature_id: featureId,
                    feature_value: value
                }
                await dispatch(addFeatureDetail(payload));
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleCancel = () => {
        onCancel();
        formik.resetForm();
    };

    return (
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Características</h3>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="power" value="Potencia" />
                </div>
                <TextInput id="power" type="text" placeholder='Ingrese la Potencia del Motor' onChange={formik.handleChange} value={formik.values.power} />
                {formik.errors.power ? <ErrorInputs type={'failure'} message={formik.errors.power} title={undefined} /> : null}
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="consumption" value="Consumo" />
                </div>
                <TextInput id="consumption" type="text" placeholder='Ingrese el Consumo del Motor' onChange={formik.handleChange} value={formik.values.consumption} />
                {formik.errors.consumption ? <ErrorInputs type={'failure'} message={formik.errors.consumption} title={undefined} /> : null}
            </div>
            <div className="w-full flex justify-between">
                <Button type="button" color="failure" onClick={handleCancel}>Cancelar</Button>
                <Button type="submit">Siguiente</Button>
            </div>
        </form>
    )
}

export default EngineCreateFeatures