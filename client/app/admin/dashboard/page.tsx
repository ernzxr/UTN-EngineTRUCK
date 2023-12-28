'use client'
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { ManufacturerCRUD } from '@/app/components/manufacturers/ManufacturerCRUD';
import Header from '../../components/AdminHeader';
import BrandCRUD from '@/app/components/brands/BrandCRUD';
import EngineCRUD from '@/app/components/engines/EngineCRUD';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchBrands } from '@/lib/redux/features/brandsSlice';
import { fetchManufacturers } from '@/lib/redux/features/manufacturersSlice';
import { fetchEngines } from '@/lib/redux/features/enginesSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { fetchMedias } from '@/lib/redux/features/mediaSlice';

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchEngines());
    dispatch(fetchBrands());
    dispatch(fetchManufacturers());
    dispatch(fetchMedias());
  }, [dispatch]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/admin');
    }
  }, [router]);

  return (
    <>
      <Header />
      <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="Engines" icon={HiClipboardList}>
          <EngineCRUD />
        </Tabs.Item>
        <Tabs.Item title="Components" icon={HiClipboardList}>
        </Tabs.Item>
        <Tabs.Item title="Manufacturers" icon={HiClipboardList}>
          <ManufacturerCRUD />
        </Tabs.Item>
        <Tabs.Item title="Brands" icon={HiClipboardList}>
          <BrandCRUD />
        </Tabs.Item>
      </Tabs>
    </>
  );
}