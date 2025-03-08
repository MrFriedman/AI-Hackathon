import React from 'react';
import DashboardCard from '@/components/cards/DashboardCard'

function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-black mb-8">Accident Report Dashboard</h1>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CTA Buttons */}
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
  );
}

export default Dashboard;