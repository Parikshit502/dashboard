import React from 'react';
import BarChart from '../components/BarChart.tsx';
import HorizonTable from '../components/HorizonTable.tsx';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      {/* Bar Chart Section */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">Sales Overview</h2>
        <BarChart />
      </div>

      {/* Horizon UI Styled Table Section */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">User Data</h2>
        <HorizonTable />
      </div>
    </div>
  );
};

export default Dashboard;
