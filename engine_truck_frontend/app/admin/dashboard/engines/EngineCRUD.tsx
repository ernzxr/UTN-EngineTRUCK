import { Table, Button, ToggleSwitch } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchEngines, removeEngine } from '@/lib/redux/features/enginesSlice';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { AppDispatch } from '@/lib/redux/store';
import EngineUpdateModal from './EngineUpdateModal';

export const EngineCRUD = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { enginesList } = useSelector((state: any) => state.enginesReducers);
  const [switchAvailable, setSwitchAvailable] = useState(false);
  const [switchHidden, setSwitchHidden] = useState(false);

  const handleDelete = (id: number) => {
    dispatch(removeEngine(id));
  }

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
                {object.brand?.brand}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {object.manufacturer?.manufacturer}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <ToggleSwitch checked={object.available ? true : false} onChange={(checked) => {
                  (setSwitchAvailable(checked));
                }} />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <ToggleSwitch checked={object.hidden ? true : false} onChange={(checked) => { setSwitchHidden(checked); }} />
              </Table.Cell>
              <Table.Cell>
                <EngineUpdateModal />
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