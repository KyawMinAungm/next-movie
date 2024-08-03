import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { redirect } from 'next/navigation'

const Header = () => {
  async function search(formData ) {
    'use server'
    const q = formData.get("q");
    redirect(`/search?q=${q}`)
  }
  return (
    <nav className='flex flex-row justify-between items-center border px-4 py-2 border-slate-300 rounded my-4 '>
        <h1 className='font-bold text-lg'>
            <Link href="/">Next Movie</Link>
        </h1>
        <form action={search} className='flex gap-4'>
          <Input placeholder='Search Movies' name='q' type='text' />
          <Button type='submit'>Search</Button>
        </form>
    </nav>
  )
}

export default Header