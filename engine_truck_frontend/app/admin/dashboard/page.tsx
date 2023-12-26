'use client';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ManufacturerCRUD } from './manufacturers/ManufacturerCRUD';
import Header from '../../components/AdminHeader';
import BrandCRUD from './brands/BrandCRUD';
import EngineCRUD from './engines/EngineCRUD';
import EngineCreateModal from './engines/EngineCreateModal';
import { fetchManufacturers } from '@/lib/redux/features/manufacturersSlice';
import { fetchBrands } from '@/lib/redux/features/brandsSlice';
import { fetchEngines } from '@/lib/redux/features/enginesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { enginesList } = useSelector((state: any) => state.enginesReducers);
  const { brandsList } = useSelector((state: any) => state.brandsReducers);
  const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);

  useEffect(() => {
    dispatch(fetchManufacturers());
    dispatch(fetchBrands());
    dispatch(fetchEngines());
  }, []);




  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/admin');
    }
  }, [router]);

 

  return (
    <>
    <Header />
    <Tabs aria-label="Tabs with icons" style="underline">
      <Tabs.Item active title="Engines" icon={HiUserCircle}>
        <EngineCreateModal />
        <EngineCRUD />
      </Tabs.Item>
      <Tabs.Item title="Components" icon={HiAdjustments}>
      </Tabs.Item>
      <Tabs.Item title="Manufacturers" icon={MdDashboard}>
        <ManufacturerCRUD />
      </Tabs.Item>
      <Tabs.Item title="Brands" icon={HiClipboardList}>
        <BrandCRUD />
      </Tabs.Item>
    </Tabs>
    </>
  );
}