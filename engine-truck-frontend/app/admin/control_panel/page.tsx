'use client';

import { PostEngineForm } from "@/app/components/PostEngineForm";
import { PostBrandForm } from "@/app/components/PostBrandForm";
import { PostManufacturerForm } from "@/app/components/PostManufacturerForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/admin');
    }
  }, [router]);
  return (
    <div>
      <PostBrandForm />
      <PostManufacturerForm />
      <PostEngineForm />
    </div>
  )
}