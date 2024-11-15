import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className='text-[blue] flex gap-4 p-2 bg-slate-500'>
      <Link href='/'>
        Home
      </Link>
      <Link href='/create'>
        Create
      </Link>
      <Link href={`/read`}>
        Read
      </Link>
      <Link href='/update'>
        Update
      </Link>
      <Link href='/delete'>
        Delete
      </Link>
      <Link href='/admin' className='text-[#ff4646]'>
        Admin
      </Link>
    </div>
  )
}

