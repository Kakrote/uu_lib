"use client"
import { CommonLayout } from "@/components/common-layout"

export default function Overview() {
  return (
    <CommonLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#2A2A2F] mb-8">Overview</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to the Learning Resource Centre at Bennett University.
          </p>
          {/* Add your overview content here */}
        </div>
      </div>
    </CommonLayout>
  )
}
