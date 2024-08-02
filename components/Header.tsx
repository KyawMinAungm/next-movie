import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='flex flex-row justify-between items-center border px-4 py-2 border-slate-300 rounded my-4 '>
        <h1 className='font-bold text-lg'>
            <Link href="/">Next Movie</Link>
        </h1>
    </nav>
  )
}

export default Header