import { CommonLayout } from '@/components/common-layout'
import React from 'react'
import { working_Timing } from '@/lib/about'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Sun, Snowflake, Calendar, Info } from 'lucide-react'


const WorkingHours = () => {
    return (
        <CommonLayout>
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                        <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Library Working Hours
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Your gateway to knowledge, open when you need it most
                    </p>
                </div>

                {/* Timings Table Card */}
                <Card className="mb-8 overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Calendar className="w-6 h-6" />
                            Operating Hours
                        </CardTitle>
                        <CardDescription>
                            Library timings for different user categories across seasons
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b bg-muted/50">
                                        <th className="text-left p-4 font-semibold text-sm">Category</th>
                                        <th className="text-center p-4 font-semibold text-sm">
                                            <div className="flex items-center justify-center gap-2">
                                                <Sun className="w-4 h-4 text-orange-500" />
                                                Summer
                                            </div>
                                        </th>
                                        <th className="text-center p-4 font-semibold text-sm">
                                            <div className="flex items-center justify-center gap-2">
                                                <Snowflake className="w-4 h-4 text-blue-500" />
                                                Winter
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {working_Timing.timings.map((timing, index) => (
                                        <tr 
                                            key={index} 
                                            className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                                        >
                                            <td className="p-4 font-medium text-sm">{timing[0]}</td>
                                            <td className="p-4 text-center">
                                                <Badge variant="outline" className="font-mono">
                                                    {timing[1]}
                                                </Badge>
                                            </td>
                                            <td className="p-4 text-center">
                                                <Badge variant="outline" className="font-mono">
                                                    {timing[2]}
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Additional Information Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {working_Timing.weeklyTiming.map((timing, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                                        <Info className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {timing}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Quick Info Banner */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-lg border border-primary/20">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary rounded-lg">
                            <Clock className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">24/7 Digital Access</h3>
                            <p className="text-sm text-muted-foreground">
                                All online resources are available round the clock for your convenience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </CommonLayout>
    )
}

export default WorkingHours
