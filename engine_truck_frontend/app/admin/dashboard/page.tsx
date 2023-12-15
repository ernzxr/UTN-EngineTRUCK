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

export default function Page() {
  const router = useRouter();

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