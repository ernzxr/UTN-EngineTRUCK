'use client';
import { Button, Modal, Table } from 'flowbite-react'
import { ComponentResponse } from '@/lib/services/interfaces/components';
import ComponentUpdateModal from './ComponentUpdateModal';
import { useSelector } from 'react-redux';
import ComponentDeleteButton from './ComponentDeleteButton';
import ComponentHiddenToggle from './ComponentHiddenToggle';
import ComponentAvailableToggle from './ComponentAvailableToggle';
import ComponentCompatibleUpdate from './ComponentCompatibleUpdate';
import { useState } from 'react';

const ComponentList = () => {
  const { componentsList } = useSelector((state: any) => state.componentsReducers);

  const [openModal, setOpenModal] = useState(false);

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
            <Button onClick={() => setOpenModal(true)}>Compatibles</Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
              <Modal.Header />
              <Modal.Body className="max-h-[80vh] overflow-y-auto">
                <ComponentCompatibleUpdate componentId={object.id} />
              </Modal.Body>
            </Modal>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <ComponentAvailableToggle object={object} />
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <ComponentHiddenToggle object={object} />
          </Table.Cell>
          <Table.Cell>
            <ComponentUpdateModal object={object} />
          </Table.Cell>
          <Table.Cell>
            <ComponentDeleteButton object={object} />
          </Table.Cell>
        </Table.Row>
      ))}
    </>
  )
}

export default ComponentList