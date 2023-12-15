'use client';

import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { ManufacturerAdd } from './ManufacturerAdd';
import { ManufacturerRUD } from './ManufacturerRUD';

export const ManufacturerPanel = () => {
    return (
        <div className="overflow-x-auto">
          <Tabs aria-label="Full width tabs" style="fullWidth">
            <Tabs.Item active title="Administrar Fabricantes" icon={HiUserCircle}>
                <ManufacturerRUD />
            </Tabs.Item>
            <Tabs.Item title="Agregar Fabricante" icon={MdDashboard}>
                <ManufacturerAdd />
            </Tabs.Item>
          </Tabs>
        </div>
      );
}