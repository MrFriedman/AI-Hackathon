import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4">
        <h2 className="text-3xl text-black font-bold mb-6">
          Login Form
        </h2>
        <div className="mb-8">
          <p className="mb-4 text-black">
            Please enter your login details here
          </p>
          <form className="mb-4">
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                User Full Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your full name" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                User Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter password" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Consent
              </label>
              <input className="mr-2 leading-tight" id="consent" type="checkbox" />
              <span className="text-sm text-black">
                I consent to the sharing of video footage to Resembler.AI
              </span>
            </div>
            <Link href="/dashboard" className="w-40 flex justify-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page