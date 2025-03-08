"use client"

import { useEffect, useState } from 'react'
import NotificationCard from '@/components/cards/NotificationCard'

interface Notification {
  incident_id: string
  message: string
  notification_id: string
}

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/account')
        if (!response.ok) throw new Error('Failed to fetch account data')

        const data = await response.json()
        console.log('API Response:', data)
        if (data.notifications) {
          setNotifications(data.notifications)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchNotifications()
  }, [])

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-6">
      <div className="w-full max-w-xl">
        <div className="bg-gray-900 text-white max-w-xl w-full p-8 rounded-xl shadow-lg border border-gray-800">
          <h1 className="text-3xl font-bold mb-4 text-cyan-400 pb-5">Notifications</h1>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <NotificationCard key={index} {...notification} />
            ))
          ) : (
            <p className="text-gray-400">No notifications available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default NotificationsPage
