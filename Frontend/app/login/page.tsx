import Link from 'next/link';

export default function Login() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
          Login Form
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          Please enter your login details here
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2">
              User Full Name
            </label>
            <input
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your full name"
              type="text"
            />
          </div>
          <div className="pb-5">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              User Password
            </label>
            <input
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter password"
              type="password"
            />
          </div>
          <Link
            href="/dashboard"
            className="block bg-cyan-500 hover:bg-cyan-600 text-center text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Login
          </Link>
        </form>
        <div className="mt-6 text-center">
          <p className="text-center text-gray-300 mt-4">
          Don't have an account?{' '}
          <Link href="/register" className="text-cyan-400 hover:underline">
          Sign up
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
}
