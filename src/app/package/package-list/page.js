"use client";

import Header5 from '@/components/header/Header5'
import React from 'react'
import '../../index2/style.css'
import Home2BannerPackgeList from '@/components/banner/Home2BannerPackageList'
import ExclusiveDealsCarousel from '../../../components/package-list/ExclusiveDealsCarousel'
import PopularDestinations from '@/components/package-list/PopularDestinations';
import PackagesList from '@/components/package-list/PackageList';

const page = () => {
  return (
    <>
        <Header5/>
        <Home2BannerPackgeList/>
        <div
          style={{padding: "0 50px"}}
        >
          <ExclusiveDealsCarousel/>
        </div>
        <PopularDestinations/>
        <PackagesList/>
    </>
  )
}

export default page