import { Table, TableCell, Button, Modal, TextInput, Label, ToggleSwitch } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchEngines, modifiedEngine, removeEngine } from '@/lib/redux/features/enginesSlice';
import { fetchBrands } from '@/lib/redux/features/brandsSlice';
import { fetchManufacturers } from '@/lib/redux/features/manufacturersSlice';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { AppDispatch } from '@/lib/redux/store';
import EngineCreateModal from './EngineCreateModal';
import EngineUpdateModal from './EngineUpdateModal';
import { BrandResponse } from '@/lib/services/interfaces/brands';
import { ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';

export const EngineCRUD = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { enginesList } = useSelector((state: any) => state.enginesReducers);
  const { brandsList } = useSelector((state: any) => state.brandsReducers);
  const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);

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
              {brandsList.find((objectBrand: BrandResponse) => objectBrand.id === object.brand_id)?.brand || 'marca no encontrada'}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {manufacturersList.find((objectManufacturer: ManufacturerResponse) => objectManufacturer.id === object.manufacturer_id)?.manufacturer || 'fabricante no encontrado'}
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