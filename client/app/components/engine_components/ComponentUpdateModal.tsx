import { AppDispatch } from '@/lib/redux/store';
import { Button, Modal, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { modifiedComponent } from '@/lib/redux/features/componentsSlice';
import { ComponentResponse } from '@/lib/services/interfaces/components';

const ComponentUpdateModal = ({ object }: { object: ComponentResponse }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [modalStates, setModalStates] = useState<{ [key: number]: boolean }>({});
    const [updateModal, setUpdateModal] = useState(false);
    const [componenteName, setComponenteName] = useState('');
    const [componentDescription, setComponentDescription] = useState('');

    const openUpdateModal = () => {
        setUpdateModal(true);
    };

    const closeUpdateModal = () => {
        setUpdateModal(false);
    };

    const onCloseModal = () => {
        setModalStates({});
        setComponenteName('');
        setComponentDescription('');
    }

    const handleEditClick = (object: ComponentResponse) => {
        setModalStates((prevStates) => ({ ...prevStates, [object.id]: true }));
        setComponenteName(object.component);
        setComponentDescription(object.description)
    };

    const handlePutClick = (object: ComponentResponse, componenteName: string, componentDescription: string) => {
        const { id, component, description } = object;
        let updatedObject: any = {};

        if (componenteName !== component) {
            updatedObject.component = componenteName;    
        }

        if (componentDescription !== description) {
            updatedObject.description = componentDescription;
        }

        if (Object.keys(updatedObject).length > 0) {
            updatedObject.id = id;
            handleUpdate(updatedObject);
        }
        else {
            console.log('Sin cambios')
        }
    }

    const handleUpdate = (data: ComponentResponse) => {
        dispatch(modifiedComponent(data));
        setModalStates({});
    }

    return (
        <>
            <Button color="blue" onClick={() => {
                handleEditClick(object);
            }}>Editar</Button>
            <Modal show={modalStates[object.id]} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Editar</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="component" value="Componente" />
                            </div>
                            <TextInput id="component" type="text" placeholder='Ingrese el nombre del componente' value={componenteName} onChange={(e) => { setComponenteName(e.target.value) }} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="description" value="Descripción" />
                            </div>
                            <TextInput id="description" type="text" placeholder='Ingrese la descripción del componente' value={componentDescription} onChange={(e) => { setComponentDescription(e.target.value) }} />
                        </div>
                        <div className="w-full">
                            <Button onClick={() => {
                                handlePutClick(object, componenteName, componentDescription)
                            }}>Actualizar</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ComponentUpdateModal