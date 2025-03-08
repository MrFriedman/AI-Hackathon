import React from "react";

interface NotificationProps {
  notification_id: string;
  incident_id: string;
  message: string;
}

const NotificationCard: React.FC<NotificationProps> = ({ notification_id, incident_id, message }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-white mb-4">
      <h2 className="text-xl font-bold">{notification_id}</h2>
      <p className="text-gray-300">Location: {incident_id}</p>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default NotificationCard;
