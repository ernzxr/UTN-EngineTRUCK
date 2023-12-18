

import { Table, TableCell, Button, Modal, TextInput, Label } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchBrands, modifiedBrand, removeBrand } from '@/lib/redux/features/brandsSlice';
import { BrandResponse } from '@/lib/services/interfaces/brands';
import { AppDispatch } from '@/lib/redux/store';
import { BrandCreateForm } from './BrandCreateForm'

export const BrandCRUD = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { brandsList } = useSelector((state: any) => state.brandsReducers);

  const [brandName, setBrandName] = useState('');
  const [modalStates, setModalStates] = useState<{ [key: number]: boolean }>({});

  const onCloseModal = () => {
    setModalStates({});
    setBrandName('');
  }

  const handleDelete = (id: number) => {
    dispatch(removeBrand(id));
  }

  const handleUpdate = (data: BrandResponse) => {
    dispatch(modifiedBrand(data));
    setModalStates({});
  }

  const handleEditClick = (object: BrandResponse) => {
    setModalStates((prevStates) => ({ ...prevStates, [object.id]: true }));
    setBrandName(object.brand);
  };


  return (
    <>
      <Table className='w-[50%]'>
        <Table.Head>
          <Table.HeadCell>Marca</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Editar</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Borrar</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {brandsList.map((object: BrandResponse) => (
            <Table.Row key={object.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {object.brand}
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
                        <TextInput id="name" type="text" value={brandName} onChange={(e) => { setBrandName(e.target.value) }} />
                      </div>
                      <div className="w-full">
                        <Button onClick={() => {
                          if (brandName !== object.brand) {
                            const updatedObject = { ...object, brand: brandName }
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
      <div>
        <BrandCreateForm />
      </div>
    </>
  )
}

export default BrandCRUD