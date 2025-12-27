import { CommonLayout } from '@/components/common-layout'
import { rules } from '@/lib/about'
import React from 'react'

const Rules = () => {
    return (
        <CommonLayout>
            <main>
                {/* Hero Section */}
                <div className='relative overflow-hidden py-16 px-4'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#201e9b]/5 to-[#6bc533]/5'></div>
                    <div className='relative max-w-4xl mx-auto text-center'>
                        <h1 className='text-5xl lg:text-6xl font-extrabold text-[#122696] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000'>
                            Rules & Regulation
                        </h1>
                        <div className='h-1.5 w-65 bg-[#6bc533] mx-auto rounded-full'></div>
                    </div>
                </div>

                {/* main section */}
                <div className='bg-gradient-to-b p-6 px-4'
                    style={{
                        backgroundImage: 'url("/images/backgrounds/admission-isb.svg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className='max-w-7xl mx-auto space-y-10'>
                        {/* Membership */}
                        <div className='bg-white rounded-xl shadow-lg p-8 border-l-10 border-[#6bc533] hover:shadow-xl transition-shadow duration-300'>
                            <div className='mb-6'>
                                <h2 className='text-3xl font-bold uppercase text-[#122696] mb-2'>Membership</h2>
                                <div className='h-1.5 w-32 bg-[#6bc533] rounded-full'></div>
                            </div>
                            <ul className='space-y-3'>
                                {rules.membership.map((rule, index) => (
                                    <li key={index} className='flex items-start'>
                                        <span className='text-[#6bc533] text-xl mr-3'>•</span>
                                        <span className='text-gray-700 leading-relaxed'>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Circulation */}
                        <div className='bg-white rounded-xl shadow-lg p-8 border-l-10 border-[#6bc533] hover:shadow-xl transition-shadow duration-300'>
                            <div className='mb-6'>
                                <h2 className='text-3xl font-bold uppercase text-[#122696] mb-2'>Circulation</h2>
                                <div className='h-1.5 w-32 bg-[#6bc533] rounded-full'></div>
                            </div>
                            <ul className='space-y-3'>
                                {rules.circulation.map((rule, index) => (
                                    <li key={index} className='flex items-start'>
                                        <span className='text-[#6bc533] text-xl mr-3'>•</span>
                                        <span className='text-gray-700 leading-relaxed'>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Overdue Charges */}
                        <div className='bg-white rounded-xl shadow-lg p-8 border-l-10 border-[#6bc533] hover:shadow-xl transition-shadow duration-300'>
                            <div className='mb-6'>
                                <h2 className='text-3xl font-bold uppercase text-[#122696] mb-2'>Overdue Charges</h2>
                                <div className='h-1.5 w-40 bg-[#6bc533] rounded-full'></div>
                            </div>
                            <ul className='space-y-3'>
                                {rules.overdue_charges.map((rule, index) => (
                                    <li key={index} className='flex items-start'>
                                        <span className='text-[#6bc533] text-xl mr-3'>•</span>
                                        <span className='text-gray-700 leading-relaxed'>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Use of Computers */}
                        <div className='bg-white rounded-xl shadow-lg p-8 border-l-10 border-[#6bc533] hover:shadow-xl transition-shadow duration-300'>
                            <div className='mb-6'>
                                <h2 className='text-3xl font-bold uppercase text-[#122696] mb-2'>Use of Computers</h2>
                                <div className='h-1.5 w-44 bg-[#6bc533] rounded-full'></div>
                            </div>
                            <ul className='space-y-3'>
                                {rules.use_of_computers.map((rule, index) => (
                                    <li key={index} className='flex items-start'>
                                        <span className='text-[#6bc533] text-xl mr-3'>•</span>
                                        <span className='text-gray-700 leading-relaxed'>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* General Reading Hall */}
                        <div className='bg-white rounded-xl shadow-lg p-8 border-l-10 border-[#6bc533] hover:shadow-xl transition-shadow duration-300'>
                            <div className='mb-6'>
                                <h2 className='text-3xl font-bold uppercase text-[#122696] mb-2'>General Reading Hall</h2>
                                <div className='h-1.5 w-48 bg-[#6bc533] rounded-full'></div>
                            </div>
                            <ul className='space-y-3'>
                                {rules.general_Reading_Hall.map((rule, index) => (
                                    <li key={index} className='flex items-start'>
                                        <span className='text-[#6bc533] text-xl mr-3'>•</span>
                                        <span className='text-gray-700 leading-relaxed'>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Civic Sense Norms */}
                        <div className='bg-white rounded-xl shadow-lg p-8 border-l-10 border-[#6bc533] hover:shadow-xl transition-shadow duration-300'>
                            <div className='mb-6'>
                                <h2 className='text-3xl font-bold uppercase text-[#122696] mb-2'>Civic Sense & Norms</h2>
                                <div className='h-1.5 w-48 bg-[#6bc533] rounded-full'></div>
                            </div>
                            <ul className='space-y-3'>
                                {rules.civic_Sense_norms.map((rule, index) => (
                                    <li key={index} className='flex items-start'>
                                        <span className='text-[#6bc533] text-xl mr-3'>•</span>
                                        <span className='text-gray-700 leading-relaxed'>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visitors */}
                        <div className='bg-white rounded-xl shadow-lg p-8 border-l-10 border-[#6bc533] hover:shadow-xl transition-shadow duration-300'>
                            <div className='mb-6'>
                                <h2 className='text-3xl font-bold uppercase text-[#122696] mb-2'>Visitors</h2>
                                <div className='h-1.5 w-24 bg-[#6bc533] rounded-full'></div>
                            </div>
                            <ul className='space-y-3'>
                                {rules.visitors.map((rule, index) => (
                                    <li key={index} className='flex items-start'>
                                        <span className='text-[#6bc533] text-xl mr-3'>•</span>
                                        <span className='text-gray-700 leading-relaxed'>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Note */}
                        <div className='bg-gradient-to-r from-[#122696] to-[#201e9b] rounded-xl shadow-lg p-8'>
                            <div className='mb-4'>
                                <h2 className='text-3xl font-bold uppercase text-white mb-2'>Important Note</h2>
                                <div className='h-1.5 w-40 bg-[#6bc533] rounded-full'></div>
                            </div>
                            <ul className='space-y-3'>
                                {rules.note.map((rule, index) => (
                                    <li key={index} className='flex items-start'>
                                        <span className='text-[#6bc533] text-xl mr-3'>•</span>
                                        <span className='text-white font-medium leading-relaxed'>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </CommonLayout>
    )
}

export default Rules
