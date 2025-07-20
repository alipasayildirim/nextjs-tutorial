
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-myprimarycolor text-white py-6'>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left space-y-4">
       <Link href="/" className="text-white text-2xl font-bold">
          Logo
        </Link>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, quod?</p>
        </div>
        <nav className='md:mt-0 mt-8 space-x-4'>
           <Link
            href="/"
            className="text-white px-4 py-2 hover:underline font-bold"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-white px-4 py-2 hover:underline font-bold"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-white px-4 py-2 hover:underline font-bold"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-white px-4 py-2 hover:underline font-bold"
          >
            Contact
          </Link>
        </nav>

        <div className='md:mt-0 mt-8 space-x-4'>
          <Button variant={"secondary"}  size={"icon"}>
            <Facebook/>
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <Instagram />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <Linkedin />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Footer