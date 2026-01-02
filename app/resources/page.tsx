import { CommonLayout } from '@/components/common-layout'
import { newspapers, journals } from '@/lib/resources'
import { Newspaper, BookOpen, GraduationCap, Pill, Globe, TrendingUp, Award, Library } from 'lucide-react'
import React from 'react'

const Resources = () => {
    const totalJournals = 
        journals.management.length + 
        journals.nursing.length + 
        journals.pharmacy.length + 
        journals.international.length;

    return (
        <CommonLayout>
            <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-pulse">
                                <Library className="w-10 h-10" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Library Resources</h1>
                            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-light">
                                Explore our extensive collection of newspapers and academic journals
                            </p>
                            <div className="mt-8 flex items-center justify-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5" />
                                    <span>Premium Access</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    <span>Updated Daily</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <main className="container mx-auto px-4 -mt-8 relative z-20">
                    <div className="max-w-7xl mx-auto space-y-12">
                        
                        {/* Overview Stats with improved design */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                                <div className="relative">
                                    <Newspaper className="w-8 h-8 mb-4 opacity-90" />
                                    <div className="text-sm font-medium opacity-90 mb-1">Newspapers</div>
                                    <div className="text-4xl font-bold">{newspapers.length}</div>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                                <div className="relative">
                                    <GraduationCap className="w-8 h-8 mb-4 opacity-90" />
                                    <div className="text-sm font-medium opacity-90 mb-1">Management Journals</div>
                                    <div className="text-4xl font-bold">{journals.management.length}</div>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                                <div className="relative">
                                    <Pill className="w-8 h-8 mb-4 opacity-90" />
                                    <div className="text-sm font-medium opacity-90 mb-1">Medical Journals</div>
                                    <div className="text-4xl font-bold">{journals.nursing.length + journals.pharmacy.length}</div>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                                <div className="relative">
                                    <Globe className="w-8 h-8 mb-4 opacity-90" />
                                    <div className="text-sm font-medium opacity-90 mb-1">Total Resources</div>
                                    <div className="text-4xl font-bold">{newspapers.length + totalJournals}</div>
                                </div>
                            </div>
                        </div>

                        {/* Newspapers Section */}
                        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border/50">
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-950/30 rounded-full">
                                    <Newspaper className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Daily Updates</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                                    Available Newspapers
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Stay informed with our daily collection of newspapers in Hindi and English
                                </p>
                            </div>

                            <div className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10">
                                                <th className="px-6 py-4 text-left text-sm font-bold text-blue-900 dark:text-blue-100">S.No.</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-blue-900 dark:text-blue-100">News Paper Name</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-blue-900 dark:text-blue-100">Language</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/30">
                                            {newspapers.map((newspaper, index) => (
                                                <tr key={index} className="hover:bg-blue-50/50 dark:hover:bg-blue-950/10 transition-colors group">
                                                    <td className="px-6 py-4 text-sm font-semibold text-muted-foreground group-hover:text-foreground">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                        {newspaper.paper}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm ${
                                                            newspaper.language === 'Hindi' 
                                                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                                                                : 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                                                        }`}>
                                                            {newspaper.language}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Management Journals Section */}
                        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border/50">
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-purple-100 dark:bg-purple-950/30 rounded-full">
                                    <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Management & Business</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">
                                    Subscribed Journals
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Management and business research journals from leading publications
                                </p>
                            </div>

                            <div className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b bg-gradient-to-r from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10">
                                                <th className="px-6 py-4 text-left text-sm font-bold text-purple-900 dark:text-purple-100">S.No.</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-purple-900 dark:text-purple-100">TITLE</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-purple-900 dark:text-purple-100">Periodicity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/30">
                                            {journals.management.map((journal, index) => (
                                                <tr key={index} className="hover:bg-purple-50/50 dark:hover:bg-purple-950/10 transition-colors group">
                                                    <td className="px-6 py-4 text-sm font-semibold text-muted-foreground group-hover:text-foreground">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                        {journal.title}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm">
                                                            {journal.periodicity}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Nursing Journals Section */}
                        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border/50">
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-rose-100 dark:bg-rose-950/30 rounded-full">
                                    <BookOpen className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                                    <span className="text-sm font-semibold text-rose-600 dark:text-rose-400">Healthcare & Nursing</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 bg-clip-text text-transparent">
                                    Uttaranchal College of Nursing
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Nursing and healthcare research journals
                                </p>
                            </div>

                            <div className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b bg-gradient-to-r from-rose-50 to-rose-100/50 dark:from-rose-950/20 dark:to-rose-900/10">
                                                <th className="px-6 py-4 text-left text-sm font-bold text-rose-900 dark:text-rose-100">S.No.</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-rose-900 dark:text-rose-100">TITLE</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-rose-900 dark:text-rose-100">Periodicity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/30">
                                            {journals.nursing.map((journal, index) => (
                                                <tr key={index} className="hover:bg-rose-50/50 dark:hover:bg-rose-950/10 transition-colors group">
                                                    <td className="px-6 py-4 text-sm font-semibold text-muted-foreground group-hover:text-foreground">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                                        {journal.title}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-sm">
                                                            {journal.periodicity}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Pharmacy Journals Section */}
                        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border/50">
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-950/30 rounded-full">
                                    <Pill className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Pharmaceutical Sciences</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                                    Pharmacy Journals 2025
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Pharmaceutical and pharmacology research journals
                                </p>
                            </div>

                            <div className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10">
                                                <th className="px-6 py-4 text-left text-sm font-bold text-blue-900 dark:text-blue-100">S.No.</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-blue-900 dark:text-blue-100">Title</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-blue-900 dark:text-blue-100">Periodicity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/30">
                                            {journals.pharmacy.map((journal, index) => (
                                                <tr key={index} className="hover:bg-blue-50/50 dark:hover:bg-blue-950/10 transition-colors group">
                                                    <td className="px-6 py-4 text-sm font-semibold text-muted-foreground group-hover:text-foreground">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                        {journal.title}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm">
                                                            {journal.periodicity}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* International Journals Section */}
                        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border/50 mb-12">
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-950/30 rounded-full">
                                    <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Global Research</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
                                    International Journals
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    International research publications
                                </p>
                            </div>

                            <div className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b bg-gradient-to-r from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-900/10">
                                                <th className="px-6 py-4 text-left text-sm font-bold text-emerald-900 dark:text-emerald-100">S.No.</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-emerald-900 dark:text-emerald-100">Title</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/30">
                                            {journals.international.map((journal, index) => (
                                                <tr key={index} className="hover:bg-emerald-50/50 dark:hover:bg-emerald-950/10 transition-colors group">
                                                    <td className="px-6 py-4 text-sm font-semibold text-muted-foreground group-hover:text-foreground">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                                        {journal.title}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </CommonLayout>
    )
}

export default Resources
