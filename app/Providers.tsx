import React from 'react'
import { ThemeProvider } from './ThemeProvider'

const Providers = ({children}:{children:React.ReactNode}) => {
  return(
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
      <div>{children}</div>
      </ThemeProvider>
    ) 
    }

export default Providers
