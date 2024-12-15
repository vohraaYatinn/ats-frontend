"use client";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer3";
import React from 'react'
import '../../index2/style.css'
import Home2BannerPackgeList from '@/components/banner/Home2BannerPackageList'
import ExclusiveDealsCarousel from '../../../components/package-list/ExclusiveDealsCarousel'
import PopularDestinations from '@/components/package-list/PopularDestinations';
import PackagesList from '@/components/package-list/PackageList';
import '../../../components/stylebook/Footer.css'

const page = () => {
  return (
    <>
        <Header/>
        <Home2BannerPackgeList/>
        <div
          style={{padding: "0 50px"}}
        >
          <ExclusiveDealsCarousel/>
        </div>
        <PopularDestinations/>
        <PackagesList/>
        <hr/>
        <Footer/>
    </>
  )
}

export default page