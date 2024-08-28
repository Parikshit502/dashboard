// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './pages/Dashboard.tsx';
// Import other page components as needed

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
