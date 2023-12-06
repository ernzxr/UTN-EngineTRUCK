'use client';

import { PostEngineForm } from "@/app/components/PostEngineForm";
import { PostBrandForm } from "@/app/components/PostBrandForm";
import { PostManufacturerForm } from "@/app/components/PostManufacturerForm";

export default function page() {
  return (
    <div>
      <PostBrandForm/>
      <PostManufacturerForm/>
      <PostEngineForm/>
    </div>
  )
}