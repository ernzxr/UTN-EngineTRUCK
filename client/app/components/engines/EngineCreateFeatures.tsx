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

const EngineCreateFeatures = ({ engineId, onNext, onCancel }: any) => {
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
        else if (!values.cilinder) {
            errors.cilinder = 'La cantidad de cilindros es requerida'
        }
        else if (!values.weight) {
            errors.weight = 'El peso es requerido'
        }
        else if (!values.bearing) {
            errors.bearing = 'La cantidad de cojinetes es requerido'
        }
        else if (!values.valves) {
            errors.valves = 'La cantidad de valvulas es requerida'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            power: '',
            consumption: '',
            cilinder: 0,
            weight: '',
            bearing: 0,
            valves: 0,
        },
        validate,
        onSubmit: async (values) => {
            const featuresIds: any = await handleCreateFeature(values);
            await handleLinkFeatures(engineId, featuresIds, values);
            onNext();
            formik.resetForm();
        }
    });

    const handleCreateFeature = async (values: FeatureCreate) => {
        try {
            const featuresIds: FeatureIds = {};
            const features = ['Potencia', 'Consumo', 'Cilindros', 'Peso', 'Cojinetes', 'Valvulas']
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
            const dispatchPromises = [];
            for (const feature in values) {
                const value = values[feature];
                const featureId = featuresIds[feature];
                const payload = {
                    engine_id: engineId,
                    feature_id: featureId,
                    feature_value: value
                }
                dispatchPromises.push(dispatch(addFeatureDetail(payload)));
            }
            await Promise.all(dispatchPromises);
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
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="cilinder" value="Cilindros" />
                </div>
                <TextInput id="cilinder" type="text" placeholder='Ingrese la Cantidad de Cilindros' onChange={formik.handleChange} value={formik.values.cilinder} />
                {formik.errors.cilinder ? <ErrorInputs type={'failure'} message={formik.errors.cilinder} title={undefined} /> : null}
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="weight" value="Peso" />
                </div>
                <TextInput id="weight" type="text" placeholder='Ingrese el Peso del Motor' onChange={formik.handleChange} value={formik.values.weight} />
                {formik.errors.weight ? <ErrorInputs type={'failure'} message={formik.errors.weight} title={undefined} /> : null}
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="bearing" value="Cojinetes" />
                </div>
                <TextInput id="bearing" type="text" placeholder='Ingrese la Cantidad de Cojinetes' onChange={formik.handleChange} value={formik.values.bearing} />
                {formik.errors.bearing ? <ErrorInputs type={'failure'} message={formik.errors.bearing} title={undefined} /> : null}
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="valves" value="Valvulas" />
                </div>
                <TextInput id="valves" type="text" placeholder='Ingrese la Cantidad de Valvulas' onChange={formik.handleChange} value={formik.values.valves} />
                {formik.errors.valves ? <ErrorInputs type={'failure'} message={formik.errors.valves} title={undefined} /> : null}
            </div>
            <div className="w-full flex justify-between">
                <Button type="button" color="failure" onClick={handleCancel}>Cancelar</Button>
                <Button type="submit">Siguiente</Button>
            </div>
        </form>
    )
}

export default EngineCreateFeatures