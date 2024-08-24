import React from 'react'
import { VscCode } from "react-icons/vsc";
import { Button } from "@/components/ui/button"
import Link from 'next/link';




const Logo = () => {
  return (
    <div>
        <Button size='icon' asChild>
            <Link href='/'>

      <VscCode/>
            </Link>
        </Button>
    </div>
  )
}

export default Logo
