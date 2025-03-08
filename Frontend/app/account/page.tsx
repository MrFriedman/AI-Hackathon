import React from 'react';

const ManageAccount = () => {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Manage Account</h1>
      <p className="mb-6">Update your account details below</p>

      <form className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block font-medium mb-2">User Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            className="w-full border border-black p-2 rounded-md"
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
            className="w-full border border-black p-2 rounded-md"
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
            className="w-full border border-black p-2 rounded-md"
          />
        </div>

        {/* Consent */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="mr-2"
          />
          <label htmlFor="consent" className="text-sm">
            I consent to the sharing of video footage to Resemble.AI
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ManageAccount;