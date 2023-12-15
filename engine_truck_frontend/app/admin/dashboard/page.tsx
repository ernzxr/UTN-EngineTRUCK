'use client';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AdminHeader from '@/app/components/dashboard/AdminHeader';
import { ManufacturerPanel } from '@/app/components/dashboard/manufacturersCRUD/ManufacturerPanel';

ManufacturerPanel
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
      </Tabs.Item>
      <Tabs.Item title="Components" icon={HiAdjustments}>
      </Tabs.Item>
      <Tabs.Item title="Manufacturers" icon={MdDashboard}>
        <ManufacturerPanel />
      </Tabs.Item>
      <Tabs.Item title="Brands" icon={HiClipboardList}>
      </Tabs.Item>
    </Tabs>
    </>
  );
}