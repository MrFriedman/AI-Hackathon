import React from 'react';
import DashboardCard from '@/components/cards/DashboardCard';

function Dashboard() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-6">
      {/* Centered Card */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4 text-cyan-400 text-center pb-5">Accident Report Dashboard</h1>

        {/* Dashboard Options */}
        <div className="space-y-4">
          <DashboardCard
            title="Autofill Claims Form"
            description="Generate a insurance claim form form with your information."
            link="http://localhost:5000/api/user/insurance-form"
          />
          <DashboardCard
            title="Generate Summary"
            description="Create a summarized version of your accident data."
          />
          <DashboardCard
            title="Import Data"
            description="Upload accident report data in multiple formats."
          />
          <DashboardCard
            title="Share Report"
            description="Securely share accident details with relevant parties."

          />
          <DashboardCard
            title="View local accident mapping"
            description="View accidents on a map based on the coordinates of your most recent accident."
            link="/map"
          />
          <DashboardCard
            title="Accident Awareness"
            description="View local reports on accident statistics to improve road safety and driver experience."
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
