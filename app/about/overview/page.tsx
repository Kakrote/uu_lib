import React from 'react'
import { CommonLayout } from '@/components/common-layout'
import { Overview } from '@/lib/about'
import OverviewContent from './components/overview'
import { NewArrivalsSection } from '@/components/library-home'


const OverviewPage = () => {
  return (
    <CommonLayout>
       <OverviewContent
       content={Overview}
       />
       <NewArrivalsSection/>
    </CommonLayout>
  )
}

export default OverviewPage
