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
            link="/claim"
          />
          <DashboardCard
            title="Generate Summary"
            description="Create a summarized version of your accident data."
            link="/summary"
          />
          <DashboardCard
            title="Import Data"
            description="Upload accident report data in multiple formats."
            link="/import"
          />
          <DashboardCard
            title="Share Report"
            description="Securely share accident details with relevant parties."
            link="/share"
          />
          <DashboardCard
            title="View local accident mapping"
            description="View accidents on a map based on the coordinates of your most recent accident."
            link="/analytics"
          />
          <DashboardCard
            title="Accident Awareness"
            description="View accidents on a map based on the coordinates of your most recent accident."
            link="/analytics"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
