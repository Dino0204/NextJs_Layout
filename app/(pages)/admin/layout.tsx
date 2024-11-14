import React from 'react'

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className='flex'>
      <aside className=' bg-gray-300 p-4'>
        AdminSide
      </aside>
      <div>
        {children}
      </div>
    </div>
  )
}

