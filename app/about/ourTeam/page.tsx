'use client'

import { CommonLayout } from '@/components/common-layout'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, GraduationCap, Users } from 'lucide-react'
import { ourTeam } from '@/lib/about'

const OurTeam = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { director, teamMembers, pageContent } = ourTeam

  return (
    <CommonLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageContent.heroTitle}</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {pageContent.heroSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Director Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {pageContent.directorSectionTitle}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <Card className="border shadow-lg">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Director Image - Compact */}
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-48 md:w-60 md:h-72 mx-auto md:mx-0 overflow-hidden rounded-lg border-4 border-primary/20">
                      <Image
                        src={director.image}
                        alt={director.name}
                        width={324}
                        height={324}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Director Info and Message */}
                  <div className="flex-1">
                    {/* Director Details */}
                    <div className="mb-6">
                      <div className="flex items-start mb-3">
                        <GraduationCap className="w-7 h-7 mr-3 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-2xl font-bold text-card-foreground mb-1">{director.name}</h3>
                          <p className="text-primary font-medium">{director.designation}</p>
                        </div>
                      </div>
                      
                      {/* Contact Info - Compact */}
                      <div className="flex flex-wrap gap-4 mt-4 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Mail className="w-4 h-4 mr-2 text-primary" />
                          <span>{director.email}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          <span>{director.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                        <span className="w-1 h-6 bg-primary mr-3"></span>
                        {pageContent.directorMessageTitle}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {director.shortMessage}
                      </p>
                      
                      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                          <Button
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            size="lg"
                          >
                            {pageContent.readMoreButton}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{pageContent.directorMessageTitle}</DialogTitle>
                            <DialogDescription className="text-base">
                              {director.name} - {director.designation}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                              {director.fullMessage}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {pageContent.teamSectionTitle}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {pageContent.teamSectionSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <Card
                  key={member.id}
                  className="group overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-0">
                    <div className="relative bg-muted overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={500}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-5 bg-card">
                      <h3 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {member.designation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  )
}

export default OurTeam
