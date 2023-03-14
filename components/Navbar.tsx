import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo2 from '../public/Logo2.png'

const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between w-full h-20 py-12 shadow-xl">
        
        <div className="flex items-center justify-between w-full h-full px-4 2xl:px-16">
       <Link href='/'>
        <Image
        src={Logo2}
        alt="logo"
        width="150"
        height="75"
        className="cursor-pointer"
        priority
        />
        </Link>  
        <div>
            <ul className="hidden sm:flex">
                <Link href="/about">
                <li className="ml-10 text-xl uppercase hover:border-b">About Us</li>
                </Link>
                <Link href="/contact">
                <li className="ml-10 text-xl uppercase hover:border-b "> Contact Us</li>
                </Link>
                <Link href="/services">
                <li className="ml-10 text-xl uppercase hover:border-b "> Our Services</li>
                </Link>
                <Link href="/Donate">
                <li className="ml-10 text-xl uppercase hover:border-b "> Donate</li>
                </Link>

            </ul>

        </div>
    </div>
    </nav>
  )
}

export default Navbar