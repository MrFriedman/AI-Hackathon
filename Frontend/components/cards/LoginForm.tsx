import React from 'react'

function page() {
  return (
    <div className="container mx-auto p-4 border border-white">
      <div className="bg-white p-4">
        <h2 className="text-3xl text-black font-bold mb-6">
          Login Form
        </h2>
        <div className="mb-8">
          <p className="mb-4 text-black">
            Please enter your login details here
          </p>
          <form className="mb-4">
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                User Full Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your full name" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                User Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter password" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Consent
              </label>
              <input className="mr-2 leading-tight" id="consent" type="checkbox" />
              <span className="text-sm text-black">
                I consent to the sharing of 
              </span>
            </div>
            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Start Recording
            </button>
          </form>
        </div>
        <div className="hidden mb-8" id="recording-section">
          <h3 className="text-2xl font-bold mb-4">
            Recording in Progress
          </h3>
          <p className="mb-4">
            The conversation is being recorded. Please speak clearly.
          </p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Stop Recording
          </button>
        </div>
        <div className="hidden" id="transcription-section">
          <h3 className="text-2xl font-bold mb-4">
            Transcription and Medical Records
          </h3>
          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">
              Transcription
            </h4>
            <p className="text-black" id="transcription-text">
              Transcribed conversation will appear here.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">
              Medical Records
            </h4>
            <p className="text-black">
              <strong>
                Symptoms:
              </strong>
              Extracted symptoms will appear here.
            </p>
            <p className="text-black">
              <strong>
                Prescriptions:
              </strong>
              Extracted prescriptions will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page