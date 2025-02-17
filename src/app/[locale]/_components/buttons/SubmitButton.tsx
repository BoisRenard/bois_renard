'use client'

import { SymbolIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'




export const SubmitButton = ({ children }: { children: ReactNode }) => {

    const { pending } = useFormStatus()
    return (
      
      <Button type="submit" disabled={pending} variant='ghost'>
        {pending ? <SymbolIcon className="animate-spin" /> : children}
      </Button>
     
    )
  }