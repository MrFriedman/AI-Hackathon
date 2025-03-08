import React from 'react';

const ManageAccount = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="bg-gray-900 text-white max-w-xl w-full p-8 rounded-xl shadow-lg border border-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">Manage Account</h1>
        <p className="mb-6 text-gray-400">Update your account details below</p>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block font-medium mb-2">User Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block font-medium mb-2">Change Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter new password"
              className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Consent */}
          <div className="flex items-center text-gray-400">
            <input type="checkbox" id="consent" name="consent" className="mr-2 accent-blue-500" />
            <label htmlFor="consent" className="text-sm">
              I consent to the sharing of video footage with Resemble.AI
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md w-full transition shadow-md hover:shadow-xl"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageAccount;
