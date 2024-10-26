import React from 'react'
import Link from "next/link"

export default function navbar() {
  return (
    <div>
        <nav>
        <ul className='flex justify-center gap-12 bg-black h-14 text-xl items-center'>

    <li className='hover:bg-white hover:text-black text-2xl text-yellow-400 px-5 fixed left-0 hover:rounded-lg'>Portfolio</li>
    <li className='hover:bg-white hover:text-black  text-yellow-400 px-2 hover:rounded-lg'><Link href="/">Home</Link></li>
    <li className='hover:bg-white hover:text-black  text-yellow-400 px-2 hover:rounded-lg'><Link href="/about">About</Link></li>
    <li className='hover:bg-white hover:text-black  text-yellow-400 px-2 hover:rounded-lg'><Link href="/contact">Contact</Link></li>
        </ul>
        </nav>
    </div>
  )
}
