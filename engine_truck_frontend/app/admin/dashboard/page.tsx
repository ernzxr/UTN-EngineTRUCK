'use client';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ManufacturerCRUD } from '../../components/dashboard/manufacturers/ManufacturerCRUD';
import AdminHeader from '@/app/components/dashboard/AdminHeader';
import BrandCRUD from '@/app/components/dashboard/brands/BrandCRUD';
import EngineCRUD from '@/app/components/dashboard/engines/EngineCRUD';
import EngineCreateModal from '@/app/components/dashboard/engines/EngineCreateModal';
import { fetchManufacturers } from '@/lib/redux/features/manufacturersSlice';
import { fetchBrands } from '@/lib/redux/features/brandsSlice';
import { fetchEngines } from '@/lib/redux/features/enginesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchManufacturers());
    dispatch(fetchBrands());
    dispatch(fetchEngines());
  }, [dispatch]);

  const { enginesList } = useSelector((state: any) => state.enginesReducers);
  const { brandsList } = useSelector((state: any) => state.brandsReducers);
  const { manufacturersList } = useSelector((state: any) => state.manufacturersReducers);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/admin');
    }
  }, [router]);

  return (
    <>
    <AdminHeader />
    <Tabs aria-label="Tabs with icons" style="underline">
      <Tabs.Item active title="Engines" icon={HiUserCircle}>
        <EngineCreateModal manufacturersList={manufacturersList} brandsList={brandsList}/>
        <EngineCRUD manufacturersList={manufacturersList} brandsList={brandsList} enginesList={enginesList}/>
      </Tabs.Item>
      <Tabs.Item title="Components" icon={HiAdjustments}>
      </Tabs.Item>
      <Tabs.Item title="Manufacturers" icon={MdDashboard}>
        <ManufacturerCRUD manufacturersList={manufacturersList}/>
      </Tabs.Item>
      <Tabs.Item title="Brands" icon={HiClipboardList}>
        <BrandCRUD brandsList={brandsList}/>
      </Tabs.Item>
    </Tabs>
    </>
  );
}