import React from 'react'
import hero1 from'@/public/Images/hero1.jpg'
import hero2 from'@/public/Images/hero2.jpg'
import hero4 from'@/public/Images/hero4.jpg'
import hero3 from'@/public/Images/hero3.jpg'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const carouselImage =[hero1,hero2,hero3,hero4];
const HeroCarousel = () => {
  
  return (
    <div className='hidden lg:block'>
      <Carousel>
        
        <CarouselContent>

        
          {carouselImage.map((image,index)=>{
            return<CarouselItem key={index}>
              <Card>
                <CardContent className='p-2'>
                  <Image src={image} alt='hero' className='w-full h-[24rem] rounded-md object-cover rounded-md object-cover'></Image>
                </CardContent>
              </Card>
            </CarouselItem>
          })}
       
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
      </Carousel>
      
    </div>
  )
}

export default HeroCarousel
