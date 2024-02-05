'use client'
import { Table } from 'flowbite-react'
import React from 'react'
import EngineList from './EngineList';
import EngineOpenModal from './EngineOpenModal';

export const EngineCRUD = () => {
  return (
    <>
      <EngineOpenModal />
      <Table>
        <Table.Head>
          <Table.HeadCell>Modelo</Table.HeadCell>
          <Table.HeadCell>Imagen</Table.HeadCell>
          <Table.HeadCell>Marca</Table.HeadCell>
          <Table.HeadCell>Fabricante</Table.HeadCell>
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
          <EngineList />
        </Table.Body>
      </Table>
    </>
  )
}

export default EngineCRUD