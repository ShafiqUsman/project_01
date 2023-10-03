import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-800 text-slate-200 flex justify-between text-2xl px-4 py-2'>
        <h1>Mini Projects</h1>
        <Link href={'/'}>Home Page</Link>
    </div>
  )
}

export default Header