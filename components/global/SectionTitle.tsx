import React from 'react'
import { Separator } from "@/components/ui/separator"

type Text = {
  text:string
}
const SectionTitle = ({text}:Text) => {
  return (
    <div>
      <h2 className='text-3xl font-medium tracking-wider capitalize mb-8'>
        {text}
      </h2>
      <Separator/>
    </div>
  )
}

export default SectionTitle
