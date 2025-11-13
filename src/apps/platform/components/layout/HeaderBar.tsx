import React from 'react';

/**
 * HeaderBar Component
 *
 * Top navigation bar with workspace selector, AI search, and user actions
 */
export const HeaderBar: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
      {/* Left: Workspace Selector */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-500">Workspace</span>
        <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
          Sprint 14 · AI Calling
          <span className="text-[10px] text-gray-400">▾</span>
        </button>
      </div>

      {/* Center: AI Search Bar */}
      <div className="flex flex-1 justify-center px-6">
        <div className="flex w-full max-w-2xl items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs text-gray-500">
          <span className="text-gray-400">✨</span>
          <input
            className="h-5 flex-1 border-none bg-transparent text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none"
            placeholder="Ask in natural language: 'Summarise today's work', 'Show bugs likely to slip', 'Create tasks from standup'"
          />
          <span className="rounded border border-gray-200 bg-white px-2 py-0.5 text-[10px] text-gray-400">
            ⌘K
          </span>
        </div>
      </div>

      {/* Right: Actions & User */}
      <div className="flex items-center gap-3">
        {/* Search Button */}
        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-xs text-gray-500 hover:bg-gray-50">
          🔍
        </button>

        {/* Notifications */}
        <button className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-xs text-gray-500 hover:bg-gray-50">
          🔔
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-semibold text-white">
            3
          </span>
        </button>

        {/* User Avatar */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-xs font-medium text-gray-700">
          SC
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
