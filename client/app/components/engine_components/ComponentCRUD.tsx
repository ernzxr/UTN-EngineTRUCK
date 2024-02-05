'use client'
import { Table } from 'flowbite-react'
import React from 'react'
import ComponentOpenModal from './ComponentOpenModal';
import ComponentList from './ComponentList';

export const ComponentCRUD = () => {
  return (
    <>
      <ComponentOpenModal />
      <Table>
        <Table.Head>
          <Table.HeadCell>Componente</Table.HeadCell>
          <Table.HeadCell>Imagen</Table.HeadCell>
          <Table.HeadCell>Descripción</Table.HeadCell>
          <Table.HeadCell>Motores</Table.HeadCell>
          <Table.HeadCell>Disponible</Table.HeadCell>
          <Table.HeadCell>Visible</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Editar</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Borrar</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <ComponentList />
        </Table.Body>
      </Table>
    </>
  )
}

export default ComponentCRUD