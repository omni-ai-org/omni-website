import React, { useState } from 'react';

/**
 * Sidebar Component
 *
 * Left navigation panel with workspace nav, projects, and team metrics
 * Expandable/collapsible functionality
 */
export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const projects = ["Voice Platform", "NPS Engine", "P2P System", "Quality Intelligence"];

  return (
    <aside className={`flex h-full flex-col border-r border-gray-200 bg-white transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Logo / Brand with Collapse Toggle */}
      <div className={`mb-8 flex items-center border-b border-gray-200 ${isCollapsed ? 'flex-col gap-2 p-3' : 'justify-between gap-2 p-5 pb-4'}`}>
        <div className="flex items-center gap-2 min-w-0">
          <img
            src="/favicon.svg"
            alt="Nexus AI"
            className="h-8 w-8 shrink-0"
          />
          {!isCollapsed && (
            <div className="min-w-0">
              <div className="text-sm font-semibold text-gray-900 truncate">Nexus AI</div>
              <div className="text-xs text-gray-500 truncate">AI Work Execution</div>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-center shrink-0 p-1.5 rounded hover:bg-gray-100 transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            className={`w-4 h-4 text-gray-600 transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className={`flex-1 text-sm text-gray-700 overflow-y-auto ${isCollapsed ? 'px-3' : 'px-5'}`}>
        {!isCollapsed && <div className="mb-2 text-xs uppercase text-gray-500">Main</div>}

        <button className="mb-1 flex w-full items-center justify-between rounded-lg bg-gray-100 px-3 py-2 text-left text-gray-900" title="Inbox">
          <span className="flex items-center gap-2 min-w-0">
            <span className="shrink-0">📥</span>
            {!isCollapsed && <span className="truncate">Inbox</span>}
          </span>
          {!isCollapsed && (
            <span className="rounded-full bg-gray-900 px-2 py-0.5 text-[10px] text-white shrink-0">
              7
            </span>
          )}
        </button>

        <button className="mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-gray-50" title="My Work">
          <span className="shrink-0">📌</span>
          {!isCollapsed && <span className="truncate">My Work</span>}
        </button>
        <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-gray-50" title="Analytics">
          <span className="shrink-0">📊</span>
          {!isCollapsed && <span className="truncate">Analytics</span>}
        </button>

        {/* Focus Views */}
        {!isCollapsed && (
          <>
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
          </>
        )}
      </nav>

      {/* Team Execution Metrics */}
      {!isCollapsed && (
        <div className="mt-4 mx-5 mb-5 rounded-xl border border-gray-200 bg-white p-3 text-xs shadow-sm">
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
      )}
    </aside>
  );
};

export default Sidebar;
