import { Table, Button, ToggleSwitch } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { removeEngine } from '@/lib/redux/features/enginesSlice';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { AppDispatch } from '@/lib/redux/store';
import EngineUpdateModal from './EngineUpdateModal';
import { BrandResponse } from '@/lib/services/interfaces/brands';
import { ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';

interface EngineCRUDProps {
  manufacturersList: ManufacturerResponse[];
  brandsList: BrandResponse[];
  enginesList: EngineResponse[];
}

export const EngineCRUD: React.FC<EngineCRUDProps> = ({ manufacturersList, brandsList, enginesList}) => {
  const dispatch = useDispatch<AppDispatch>();
  /*const { enginesList } = useSelector((state: any) => state.enginesReducers);
  const { brandsList } = useSelector((state: any) => state.brandsReducers);
  const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);*/

  const [switchAvailable, setSwitchAvailable] = useState(false);
  const [switchHidden, setSwitchHidden] = useState(false);

  const handleDelete = (id: number) => {
    dispatch(removeEngine(id));
  }

  const Mapeado = enginesList.map((object: EngineResponse) => (
    <Table.Row key={object.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {object.model}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {brandsList.find((objectBrand: BrandResponse) => objectBrand.id === object.brand_id)?.brand}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {manufacturersList.find((objectManufacturer: ManufacturerResponse) => objectManufacturer.id === object.manufacturer_id)?.manufacturer}
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
        <EngineUpdateModal manufacturersList={manufacturersList} brandsList={brandsList}/>
      </Table.Cell>
      <Table.Cell>
        <Button color="failure" onClick={() => {
          handleDelete(object.id);
        }}>Borrar</Button>
      </Table.Cell>
    </Table.Row>
  ))

  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Modelo</Table.HeadCell>
          <Table.HeadCell>Marca</Table.HeadCell>
          <Table.HeadCell>Fabricante</Table.HeadCell>
          <Table.HeadCell>Disponible</Table.HeadCell>
          <Table.HeadCell>Visible</Table.HeadCell>
          <Table.HeadCell>Fabricante</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Editar</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Borrar</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {Mapeado}
        </Table.Body>
      </Table>
    </>
  )
}

export default EngineCRUD