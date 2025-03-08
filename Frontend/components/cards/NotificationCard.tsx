
{/*TO DO;
  - Need to create and setup the backend 1. Create the Recording logic; 2. Api Endpoints; 3. Database; 4. Set up Container; 5. Set up deployment env
*/}
import React from 'react'

const NotificationCard: React.FC = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
      <img 
        alt="A detailed medical passport with patient information and medical history" 
        className="w-full h-48 object-cover rounded-lg" 
        src="https://placehold.co/300x200" 
      />
      <h2 className="text-xl font-bold mt-4">
        7 March 2024 12:00
      </h2>
      <p className="mt-2 text-gray-300">
        Location: University of Cape Town
      </p>
    </div>
  )
}

export default NotificationCard
