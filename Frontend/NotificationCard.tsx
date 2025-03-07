import React from 'react'

{/*TO DO;
  - Need to create and setup the backend 1. Create the Recording logic; 2. Api Endpoints; 3. Database; 4. Set up Container; 5. Set up deployment env
*/}
function NotificationCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
      <h2 className="text-xl font-bold mt-4 text-black">
        7 March 2024 12:00
      </h2>
      <p className="mt-2 text-black">
        Location: University of Cape Town
      </p>
    </div>
  )
}

export default NotificationCard