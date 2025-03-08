import NotificationCard from '@/components/cards/NotificationCard'
import React from 'react'

const NotificationsPage: React.FC = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-6">
      <div className="w-full max-w-xl">
        <div className="bg-gray-900 text-white max-w-xl w-full p-8 rounded-xl shadow-lg border border-gray-800">
          <h1 className="text-3xl font-bold mb-4 text-cyan-400 pb-5">Notifications</h1>
          <NotificationCard />
        </div>
      </div>
    </div>
  )
}

export default NotificationsPage
