import { Table, TableCell, Button, Modal, TextInput, Label, ToggleSwitch } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchEngines, modifiedEngine, removeEngine } from '@/lib/redux/features/enginesSlice';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { AppDispatch } from '@/lib/redux/store';
import EngineCreateModal from './EngineCreateModal';

export const EngineCRUD = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { enginesList } = useSelector((state: any) => state.enginesReducers);

  const [engineName, setEngineName] = useState('');
  const [modalStates, setModalStates] = useState<{ [key: number]: boolean }>({});
  const [switchAvailable, setSwitchAvailable] = useState(false);
  const [switchHidden, setSwitchHidden] = useState(false);

  const ToggleOnHidden = () => {
    setSwitchHidden(true);
  }
  
  const ToggleOfHidden = () => {
    setSwitchHidden(false);
  }

  useEffect(() => {
    dispatch(fetchEngines());
  }, [dispatch]);

  const onCloseModal = () => {
    setModalStates({});
    setEngineName('');
  }

  const handleDelete = (id: number) => {
    dispatch(removeEngine(id));
  }

  const handleUpdate = (data: EngineResponse) => {
    dispatch(modifiedEngine(data));
    setModalStates({});
  }

  const handleEditClick = (object: EngineResponse) => {
    setModalStates((prevStates) => ({ ...prevStates, [object.id]: true }));
    setEngineName(object.model);
  };


  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Modelo</Table.HeadCell>
          <Table.HeadCell>Marca</Table.HeadCell>
          <Table.HeadCell>Fabricante</Table.HeadCell>
          <Table.HeadCell>Disponible</Table.HeadCell>
          <Table.HeadCell>Visible</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {enginesList.map((object: EngineResponse) => (
            <Table.Row key={object.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {object.model}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {object.brand.brand}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {object.manufacturer.manufacturer}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <ToggleSwitch checked={object.available} onChange={(checked) => { (checked === 1 ? setSwitchAvailable(true) : setSwitchAvailable(false));
                  }} />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <ToggleSwitch checked={object.hidden} onChange={(checked) => {(checked === 1 ? ToggleOnHidden() : ToggleOfHidden());
                  }}  />
              </Table.Cell>
              <Table.Cell>
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
                          <Label htmlFor="name" value="Marca" />
                        </div>
                        <TextInput id="name" type="text" value={engineName} onChange={(e) => { setEngineName(e.target.value) }} />
                      </div>
                      <div className="w-full">
                        <Button onClick={() => {
                          if (engineName !== object.model) {
                            const updatedObject = { ...object, engine: engineName }
                            handleUpdate(updatedObject);
                          }
                          else {
                            console.log('Sin cambios')
                          }
                        }}>Actualizar</Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </Table.Cell>
              <Table.Cell>
                <Button color="failure" onClick={() => {
                  handleDelete(object.id);
                }}>Borrar</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}

export default EngineCRUD