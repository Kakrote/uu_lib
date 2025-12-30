import { CommonLayout } from '@/components/common-layout'
import React from 'react'
import { infrastructure } from '@/lib/about'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, Maximize2, LibraryBig } from 'lucide-react'

const Infrastructure = () => {
    return (
        <CommonLayout>
            <main className="container mx-auto px-4 pb-16">
                <header className='relative mt-10 p-16'>
                    {/* <div className="inline-flex items-center justify-center p-3 bg-[#152eb9]/10 rounded-full mb-4 mx-auto block w-fit">
                        <Building2 className="w-8 h-8 text-[#152eb9]" />
                    </div> */}
                    <h1 className='relative font-bold text-6xl text-[#152eb9] uppercase p-2 text-center'>Infrastructure</h1>
                    <div className='h-2.5 w-64 mx-auto rounded-xl border bg-[#6d092a]' />
                    <p className="text-center text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
                        State-of-the-art facilities across multiple libraries serving our academic community
                    </p>
                </header>
                
                <div className="max-w-7xl mx-auto space-y-12">
                    {/* Summary Statistics */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-gradient-to-br from-[#152eb9]/5 to-[#152eb9]/10 border-[#152eb9]/20">
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Total Seating Capacity</p>
                                        <p className="text-5xl font-bold text-[#152eb9]">
                                            {infrastructure.seating_space.totals.total_seating}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-2">Across All Libraries</p>
                                    </div>
                                    <div className="p-4 bg-[#152eb9] rounded-full">
                                        <Users className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-[#6d092a]/5 to-[#6d092a]/10 border-[#6d092a]/20">
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Total Area</p>
                                        <p className="text-5xl font-bold text-[#6d092a]">
                                            {infrastructure.seating_space.totals.total_area.toLocaleString()}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            {infrastructure.seating_space.totals.area_unit}
                                        </p>
                                    </div>
                                    <div className="p-4 bg-[#6d092a] rounded-full">
                                        <Maximize2 className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Individual Libraries */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <LibraryBig className="w-6 h-6 text-[#152eb9]" />
                            <h2 className="text-3xl font-bold text-[#152eb9]">Seating Capacity by Library</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {infrastructure.seating_space.libraries.map((library, index) => (
                                <Card 
                                    key={index} 
                                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4"
                                    style={{ borderLeftColor: index === 0 ? '#152eb9' : '#6d092a' }}
                                >
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <div className="p-2 bg-gradient-to-br from-[#152eb9]/10 to-[#6d092a]/10 rounded-lg">
                                                <Building2 className="w-5 h-5 text-[#152eb9]" />
                                            </div>
                                            {library.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold bg-gradient-to-r from-[#152eb9] to-[#6d092a] bg-clip-text text-transparent">
                                                {library.seating}
                                            </span>
                                            <span className="text-sm text-muted-foreground">seats</span>
                                        </div>
                                        <div className="mt-4 bg-muted/50 rounded-full h-2 overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-[#152eb9] to-[#6d092a] rounded-full transition-all duration-1000"
                                                style={{ 
                                                    width: `${(library.seating / infrastructure.seating_space.totals.total_seating) * 100}%` 
                                                }}
                                            />
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-2">
                                            {((library.seating / infrastructure.seating_space.totals.total_seating) * 100).toFixed(1)}% of total capacity
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Info Banner */}
                    <Card className="bg-gradient-to-r from-[#152eb9]/5 via-[#6d092a]/5 to-transparent border-[#152eb9]/30">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gradient-to-br from-[#152eb9] to-[#6d092a] rounded-lg shrink-0">
                                    <LibraryBig className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">World-Class Learning Environment</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Our libraries provide spacious, well-equipped study areas designed to enhance learning and research. 
                                        With {infrastructure.seating_space.totals.total_seating} seats across {infrastructure.seating_space.libraries.length} specialized 
                                        libraries spanning {infrastructure.seating_space.totals.total_area.toLocaleString()} square feet, 
                                        we ensure every student has access to a comfortable and conducive learning space.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </CommonLayout>
    )
}

export default Infrastructure
