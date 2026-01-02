import React from 'react'
import { CommonLayout } from '@/components/common-layout'
import { Overview } from '@/lib/about'
import OverviewContent from './components/overview'
import { NewArrivalsSection } from '@/components/library-home'
import { BookOpen } from 'lucide-react'


const OverviewPage = () => {
  return (
    <CommonLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <BookOpen className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Library Overview</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Discover our comprehensive collection and state-of-the-art facilities
              </p>
            </div>
          </div>
        </div>
       <OverviewContent
       content={Overview}
       />
       <NewArrivalsSection/>
      </div>
    </CommonLayout>
  )
}

export default OverviewPage
