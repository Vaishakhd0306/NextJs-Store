import React, { Suspense } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Hero from '@/components/home/Hero'
import FeaturedProduct from '@/components/home/FeaturedProduct'
import HeroCarousel from '@/components/home/HeroCarousel'
import LoadingContainer from '@/components/global/LoadingContainer'


const Home = () => {
  return (
    <div className='text-3xl text-muted-foreground'>
     <Hero/>
   <Suspense fallback={<LoadingContainer/>}>

    <FeaturedProduct/>
   </Suspense>
    </div>
  )
}

export default Home
