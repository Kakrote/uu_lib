import { CommonLayout } from '@/components/common-layout'
import { Vission } from '@/lib/about'
import React from 'react'

const VisionMission = () => {
    return (
        <CommonLayout>
            <main className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'>
                {/* Hero Section */}
                <div className='relative overflow-hidden py-16 px-4'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#201e9b]/5 to-[#6bc533]/5'></div>
                    <div className='relative max-w-4xl mx-auto text-center'>
                        <h1 className='text-5xl lg:text-6xl font-extrabold text-[#122696] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000'>
                            Vision & Mission
                        </h1>
                        <div className='h-1.5 w-32 bg-[#6bc533] mx-auto rounded-full'></div>
                    </div>
                </div>

                {/* Cards Section */}
                <div className='container mx-auto px-4 pb-20'>
                    <div
                        className='relative rounded-3xl overflow-hidden shadow-2xl p-1 bg-gradient-to-br from-[#201e9b] via-[#806fdf] to-[#6bc533]'
                        style={{
                            backgroundImage: 'url("/images/backgrounds/admission-isb.svg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className='bg-white backdrop-blur-sm rounded-3xl p-8 lg:p-12'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                                {/* Vision Card */}
                                <div className='group relative'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-[#201e9b] to-[#6bc533] rounded-2xl blur-xl opacity-50 group-hover:opacity-30 transition-opacity'></div>
                                    <div className='relative bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-[#6bc533] transition-all duration-300 transform hover:-translate-y-2'>
                                        <div className='flex items-center gap-3 mb-6'>
                                            <div className='w-12 h-12 bg-gradient-to-br from-[#201e9b] to-[#6bc533] rounded-lg flex items-center justify-center'>
                                                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                                </svg>
                                            </div>
                                            <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-[#201e9b]'>
                                                Vision
                                            </h2>
                                        </div>
                                        <p className='text-gray-700 text-lg leading-relaxed text-justify'>
                                            {Vission[0].vision}
                                        </p>
                                    </div>
                                </div>

                                {/* Mission Card */}
                                <div className='group relative'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-[#6bc533] to-[#201e9b] rounded-2xl blur-xl opacity-50 group-hover:opacity-30 transition-opacity'></div>
                                    <div className='relative bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-[#201e9b] transition-all duration-300 transform hover:-translate-y-2'>
                                        <div className='flex items-center gap-3 mb-6'>
                                            <div className='w-12 h-12 bg-gradient-to-br from-[#6bc533] to-[#201e9b] rounded-lg flex items-center justify-center'>
                                                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                                </svg>
                                            </div>
                                            <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-[#201e9b]'>
                                                Mission
                                            </h2>
                                        </div>
                                        <p className='text-gray-700 text-lg leading-relaxed text-justify'>
                                            {Vission[1].mission}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </CommonLayout>
    )
}

export default VisionMission
