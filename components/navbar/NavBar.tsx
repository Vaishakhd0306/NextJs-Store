
import React, { Suspense } from 'react'
import Container from '../global/Container'

import { ModeToggle } from './DarkMode'
import LinkDropDown from './LinkDropDown'
import NavSearch from './NavSearch'
import Logo from './Logo'
import CartButton from './CartButton'
 

const NavBar = () => {
  return (
    <nav className='border-b'>
        <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4 '>
<Logo/>
<Suspense>

<NavSearch/>
</Suspense>
    <div className='flex gap-4 items-center'>
<CartButton/>
<ModeToggle/>
<LinkDropDown/>

      
    </div>
        </Container>
    </nav>
  )
}

export default NavBar
