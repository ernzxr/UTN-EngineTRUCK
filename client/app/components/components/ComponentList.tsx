'use client';
import { Table } from 'flowbite-react'
import { ComponentResponse } from '@/lib/services/interfaces/components';
import ComponentUpdateModal from './ComponentUpdateModal';
import { useSelector } from 'react-redux';
import ComponentDeleteButton from './ComponentDeleteButton';
import ComponentHiddenToggle from './ComponentHiddenToggle';
import ComponentAvailableToggle from './ComponentAvailableToggle';

const ComponentList = () => {
    const { componentsList } = useSelector((state: any) => state.componentsReducers);

    return (
        <>
            {componentsList.map((object: ComponentResponse) => (
            <Table.Row key={object.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {object.component}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {object.description}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <ComponentAvailableToggle object={object} />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <ComponentHiddenToggle object={object}/>
              </Table.Cell>
              <Table.Cell>
                <ComponentUpdateModal object={object}/>
              </Table.Cell>
              <Table.Cell>
                <ComponentDeleteButton object={object}/>
              </Table.Cell>
            </Table.Row>
          ))}
        </>
    )
}

export default ComponentList