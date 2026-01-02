import { borrowing_Facility } from "@/lib/service";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CommonLayout } from "@/components/common-layout";
import { BookOpen, Users, Calendar, FileText, Disc, Library } from "lucide-react";

const iconMap: Record<string, any> = {
    "Text Books": BookOpen,
    "General Books": FileText,
    "Reference Books: Competition & Rare Books": Library,
    "Periodicals (Back)": Calendar,
    "CDs/DVDs": Disc,
    "Book Bank": Users,
};

const categoryColors: Record<string, string> = {
    "U.G. Students": "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
    "P.G. Students": "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
    "Ph.D": "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
    "Faculty": "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
    "Staff": "bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800",
};

export default function BorrowingFacilityPage() {
    return (
        <CommonLayout>
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <div className="bg-primary text-primary-foreground py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <BookOpen className="w-16 h-16 mx-auto mb-4" />
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Borrowing Facility</h1>
                            <p className="text-xl opacity-90 max-w-2xl mx-auto">
                                Access our extensive collection with flexible borrowing options
                            </p>
                        </div>
                    </div>
                </div>
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Header with gradient */}
                <div className="mb-12 text-center">
                    {/* <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
                        <Library className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-primary">Library Services</span>
                    </div> */}
                    <h1 className="text-5xl p-3 font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        {borrowing_Facility.title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {borrowing_Facility.introduction}
                    </p>
                </div>

                {/* Registration Process with enhanced styling */}
                <Card className="mb-10 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                        <div className="flex items-center gap-2">
                            <Users className="w-6 h-6 text-primary" />
                            <CardTitle className="text-2xl">Registration Process</CardTitle>
                        </div>
                        <CardDescription className="text-base">How to become a library member</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-4">
                            {borrowing_Facility.registrationProcess.map((step, index) => (
                                <li key={index} className="flex gap-4 items-start group">
                                    <Badge 
                                        className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-200"
                                    >
                                        {index + 1}
                                    </Badge>
                                    <span className="text-base leading-relaxed pt-1">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Circulation System with enhanced table */}
                <Card className="border-2 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-primary" />
                            <CardTitle className="text-2xl">{borrowing_Facility.circulationSystem.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">Member categories and their entitlements</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="overflow-x-auto rounded-lg border">
                            <Table className="min-w-[1000px]">
                                <TableHeader>
                                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                                        <TableHead className="font-bold whitespace-nowrap text-base">Category</TableHead>
                                        <TableHead className="font-bold whitespace-nowrap text-base">Text Books</TableHead>
                                        <TableHead className="font-bold whitespace-nowrap text-base">General Books</TableHead>
                                        <TableHead className="font-bold w-[200px] text-base">Reference Books</TableHead>
                                        <TableHead className="font-bold w-[200px] text-base">Periodicals</TableHead>
                                        <TableHead className="font-bold whitespace-nowrap text-base">CDs/DVDs</TableHead>
                                        <TableHead className="font-bold w-[150px] text-base">Book Bank</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {borrowing_Facility.circulationSystem.categories.map((cat, index) => (
                                        <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                                            <TableCell className="font-semibold whitespace-nowrap">
                                                <Badge variant="outline" className={`${categoryColors[cat.category]} px-3 py-1`}>
                                                    {cat.category}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="whitespace-nowrap">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-semibold text-primary">📚 {cat.textBooks.limit} books</span>
                                                    <span className="text-sm text-muted-foreground">
                                                        ⏱️ {cat.textBooks.days} days
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="whitespace-nowrap">
                                                <span className="text-sm font-medium">📖 {cat.generalBooks.days}</span>
                                            </TableCell>
                                            <TableCell className="text-xs leading-relaxed">
                                                {cat.referenceBooks}
                                            </TableCell>
                                            <TableCell className="text-xs leading-relaxed">
                                                {cat.periodicals}
                                            </TableCell>
                                            <TableCell className="text-sm whitespace-nowrap font-medium">
                                                💿 {cat.cdsDvds}
                                            </TableCell>
                                            <TableCell className="text-sm">
                                                {cat.bookBank}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        {/* Book Types Information with icons */}
                        <div className="mt-10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <FileText className="w-6 h-6 text-primary" />
                                Book Types & Policies
                            </h3>
                            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {borrowing_Facility.circulationSystem.bookTypes.map((bookType, index) => {
                                    const Icon = iconMap[bookType.type] || BookOpen;
                                    return (
                                        <Card 
                                            key={index} 
                                            className="border-2 hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
                                        >
                                            <CardHeader>
                                                <div className="flex items-start gap-3">
                                                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                        <Icon className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <CardTitle className="text-base leading-tight flex-1">{bookType.type}</CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{bookType.description}</p>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            </div>
        </CommonLayout>
    );
}
