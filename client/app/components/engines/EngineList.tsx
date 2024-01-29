'use client';
import { Table } from 'flowbite-react'
import { EngineResponse } from '@/lib/services/interfaces/engines';
import EngineUpdateModal from './EngineUpdateModal';
import { useSelector } from 'react-redux';
import EngineDeleteButton from './EngineDeleteButton';
import EngineHiddenToggle from './EngineHiddenToggle';
import EngineAvailableToggle from './EngineAvailableToggle';

const EngineList = () => {
    const { enginesList } = useSelector((state: any) => state.enginesReducers);
    console.log(enginesList);
    return (
        <>
            {enginesList.map((object: EngineResponse) => (
            <Table.Row key={object.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {object.model}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {object.brand.name}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {object.manufacturer.name}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <EngineAvailableToggle object={object} />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <EngineHiddenToggle object={object}/>
              </Table.Cell>
              <Table.Cell>
                <EngineUpdateModal object={object}/>
              </Table.Cell>
              <Table.Cell>
                <EngineDeleteButton object={object}/>
              </Table.Cell>
            </Table.Row>
          ))}
        </>
    )
}

export default EngineList