import React from 'react'
import Link from 'next/link'

function Menu() {
  return (
    <div className="flex justify-center mb-8 border border-white gap-5">
      <h2 className="text-3xl text-black font-bold mb-6">
          ActiveGuard
      </h2>
      <Link href="/" className="bg-gray-300 text-black font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline">
        Home
      </Link>
      <Link href="/account" className="bg-gray-300 text-black font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline">
        Manage Account
      </Link>
      <Link href="/notifications" className="bg-gray-300 text-black font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline">
        Notifications
      </Link>
    </div>
  )
}

export default Menu