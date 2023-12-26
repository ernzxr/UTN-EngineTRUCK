import { Table, Button, ToggleSwitch, Modal, Label, TextInput, Select } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchEngines, modifiedEngine, removeEngine } from '@/lib/redux/features/enginesSlice';
import { EngineResponse } from '@/lib/services/interfaces/engines';
import { AppDispatch } from '@/lib/redux/store';
import EngineUpdateModal from './EngineUpdateModal';
import { Brand, BrandResponse } from '@/lib/services/interfaces/brands';
import { Manufacturer, ManufacturerResponse } from '@/lib/services/interfaces/manufacturers';

export const EngineCRUD = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { enginesList } = useSelector((state: any) => state.enginesReducers);
  const { brandsList } = useSelector((state: any) => state.brandsReducers);
  const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);
  const [switchAvailable, setSwitchAvailable] = useState(false);
  const [switchHidden, setSwitchHidden] = useState(false);
  const [modalStates, setModalStates] = useState<{ [key: number]: boolean }>({});
  const [updateModal, setUpdateModal] = useState(false);
  const [engineModel, setEngineModel] = useState('');
  const [engineBrand, setEngineBrand] = useState('');
  const [engineManufacturer, setEngineManufacturer] = useState('');

  const handleDelete = (id: number) => {
    dispatch(removeEngine(id));
  }

  const handleUpdate = (data: EngineResponse) => {
    dispatch(modifiedEngine(data));
    setModalStates({});
  }

  const handleEditClick = (object: EngineResponse) => {
    setModalStates((prevStates) => ({ ...prevStates, [object.id]: true }));
    setEngineModel(object.model);
    setEngineBrand(object.brand.brand);
    setEngineManufacturer(object.manufacturer.manufacturer);
    setHiddenToggle(object.hidden);
    setAvailableToggle(object.available);
  };


  const onCloseModal = () => {
    setModalStates({});
    setEngineModel('');
    setEngineBrand('');
    setEngineManufacturer('');
    setHiddenToggle(0);
    setAvailableToggle(0);
  }

  const [hiddenToggle, setHiddenToggle] = useState(0);
  const [availableToggle, setAvailableToggle] = useState(0);

    const handleAvailableToggleChange = (object: any) => {
        setAvailableToggle((prevToggle) => (prevToggle ? 0 : 1));
    };

    const handleHiddenToggleChange = () => {
        setHiddenToggle((prevToggle) => (prevToggle ? 0 : 1));
    };

  const handlePutClick = (object: any, engineModel: any, engineBrand: any, engineManufacturer: any, engineHidden: any, engineAvailable: any) => {
    const manufacturerFilterId = manufacturersList.filter((item: any) => {
      if(item.manufacturer === engineManufacturer) {
        return item.id
      }
    })

    const brandFilterId = brandsList.filter((item: any) => {
      if(item.brand === engineBrand) {
        return item.id
      }
    })

    const brandId = brandFilterId[0].id;
    const manufacturerId = manufacturerFilterId[0].id

    if (engineModel !== object.model || engineBrand !== object.brand.brand || engineManufacturer !== object.manufacturer.manufacturer || engineHidden !== object.hidden || engineAvailable !== object.available) {
      const updatedObject: any = { model: engineModel, brand_id: brandId, manufacturer_id: manufacturerId, id : object.id, available: engineAvailable, hidden: engineHidden}
      handleUpdate(updatedObject);
    }
    else {
      console.log('Sin cambios')
    }
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
                {brandsList.find((objectBrand: Brand) => objectBrand.id === object.brand_id)?.brand}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {manufacturersList.find((objectManufacturer: Manufacturer) => objectManufacturer.id === object.manufacturer_id)?.manufacturer}
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
                          <Label htmlFor="model" value="Ingrese Modelo de Motor:" />
                        </div>
                        <TextInput id="model" type="text" placeholder='Ingrese el Modelo del Motor' value={engineModel} onChange={(e) => { setEngineModel(e.target.value) }} />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="brand_id" value="Seleccione Marca:" />
                        </div>
                        <Select id="brand_id" name="brand_id" value={engineBrand} onChange={(e) => { setEngineBrand(e.target.value) }}>
                          {brandsList.map((object: BrandResponse) => (
                            <option key={object.id} >{object.brand}</option>
                          ))}
                        </Select>
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="manufacturer_id" value="Seleccione Fabricante:" />
                        </div>
                        <Select id="manufacturer_id" name="manufacturer_id" value={engineManufacturer} onChange={(e) => { setEngineManufacturer(e.target.value) }}>
                          {manufacturersList.map((object: ManufacturerResponse) => (
                            <option key={object.id}>{object.manufacturer}</option>
                          ))}
                        </Select>
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="available" value="Disponibilidad:" />
                          <ToggleSwitch id="available" checked={availableToggle ? true : false} label={availableToggle === 0 ? "No disponible" : "Disponible"} onChange={handleAvailableToggleChange} />
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="hidden" value="Visibilidad:" />
                          <ToggleSwitch id="hidden" checked={hiddenToggle ? true : false} label={hiddenToggle === 0 ? "No visible" : "Visible"} onChange={handleHiddenToggleChange} />
                        </div>
                      </div>
                      <div className="w-full">
                        <Button onClick={() => {
                          handlePutClick(object, engineModel, engineBrand, engineManufacturer, hiddenToggle, availableToggle)
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