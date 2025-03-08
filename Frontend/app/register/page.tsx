import Link from 'next/link';

export default function Register() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
          Sign Up
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          Create your account below
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="flex items-center">
            <input id="consent" type="checkbox" className="mr-2 w-4 h-4" />
            <label htmlFor="consent" className="text-gray-300 text-sm">
              I agree to the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-300 mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-cyan-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
