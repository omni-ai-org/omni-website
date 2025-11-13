import React from 'react';

/**
 * Sidebar Component
 *
 * Left navigation panel with workspace nav, projects, and team metrics
 */
export const Sidebar: React.FC = () => {
  const projects = ["Voice Platform", "NPS Engine", "P2P System", "Quality Intelligence"];

  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white p-5">
      {/* Logo / Brand */}
      <div className="mb-8 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900 text-xs font-semibold text-white">
          NX
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">NexusOps</div>
          <div className="text-xs text-gray-500">AI Work Execution</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 text-sm text-gray-700">
        <div className="mb-2 text-xs uppercase text-gray-500">Main</div>

        <button className="mb-1 flex w-full items-center justify-between rounded-lg bg-gray-100 px-3 py-2 text-left text-gray-900">
          <span className="flex items-center gap-2">📥 Inbox</span>
          <span className="rounded-full bg-gray-900 px-2 py-0.5 text-[10px] text-white">
            7
          </span>
        </button>

        <button className="mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-gray-50">
          📌 My Work
        </button>
        <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-gray-50">
          📊 Analytics
        </button>

        {/* Focus Views */}
        <div className="mt-6 mb-2 text-xs uppercase text-gray-500">Focus Views</div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-50">
            <span>Today</span>
            <span className="text-gray-500">3 due</span>
          </div>
          <div className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-50">
            <span>This week</span>
            <span className="text-gray-500">Sprint 14</span>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-6 mb-2 text-xs uppercase text-gray-500">Projects</div>
        <div className="space-y-1 text-sm">
          {projects.map((project) => (
            <button
              key={project}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-gray-50"
            >
              <span className="truncate">{project}</span>
              <span className="text-xs text-gray-400">▾</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Team Execution Metrics */}
      <div className="mt-4 rounded-xl border border-gray-200 bg-white p-3 text-xs shadow-sm">
        <div className="mb-1 text-gray-700">Team execution</div>
        <div className="mb-1 flex items-center justify-between text-gray-500">
          <span>Score</span>
          <span className="text-sm font-semibold text-emerald-600">72%</span>
        </div>
        <div className="mb-1 h-1.5 w-full rounded-full bg-gray-100">
          <div className="h-full w-[72%] rounded-full bg-emerald-500" />
        </div>
        <div className="text-[11px] text-gray-500">
          3 tasks at risk · 2 blockers unresolved
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
