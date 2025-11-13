import React from 'react';
import { Sidebar, HeaderBar, RightPane } from '../components/layout';
import { TaskList } from '../components/tasks/TaskList';
import { mockTasks, mockTeamMembers, mockNudges } from '../data/mockData';

/**
 * Platform - Dashboard Page
 *
 * Main dashboard for the Nexus AI platform
 * Minimal light theme with AI-powered task management
 */
export const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-white text-gray-900">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top Header */}
        <HeaderBar />

        {/* Main Dashboard */}
        <main className="flex min-h-0 flex-1 gap-4 bg-white px-4 py-3">
          {/* Center: Task List */}
          <div className="flex min-w-0 flex-1 flex-col">
            <TaskList tasks={mockTasks} />
          </div>

          {/* Right Pane: AI & Metrics */}
          <RightPane teamMembers={mockTeamMembers} nudges={mockNudges} />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
