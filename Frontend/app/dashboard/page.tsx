import React from 'react';
import DashboardCard from '@/components/cards/DashboardCard';

function Dashboard() {
  return (
    <div className="w-screen flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Centered Card */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4 text-cyan-400 text-center pb-5">Accident Report Dashboard</h1>

        {/* Dashboard Options */}
        <div className="space-y-4">
          <DashboardCard
            title="View Reports"
            description="Access and review your accident reports in detail."
            link="/reports"
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
            title="Export Data"
            description="Download accident report data in multiple formats."
            link="/export"
          />
          <DashboardCard
            title="Share Report"
            description="Securely share accident details with relevant parties."
            link="/share"
          />
          <DashboardCard
            title="Analyze Trends"
            description="View data insights and identify patterns."
            link="/analytics"
          />
          <DashboardCard
            title="Manage Preferences"
            description="Customize your accident report settings and preferences."
            link="/settings"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
