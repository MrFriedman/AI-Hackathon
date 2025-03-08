import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <main className="text-left w-full max-w-4xl">
        <h2 className="text-5xl font-extrabold mb-6">Secure Your Digital World</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          ActiveGuard is your all-in-one solution for monitoring, analyzing, and securing accident report data. Join us to experience seamless protection and comprehensive data insights.
        </p>

        <div className="flex space-x-6">
          <Link href="/login" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Login
          </Link>
          <Link href="/register" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
}
