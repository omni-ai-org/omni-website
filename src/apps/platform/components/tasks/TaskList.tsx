import React from 'react';
import { Task } from '../../types/task.types';
import { StatusDot, Tag, Chip } from '../ui';

interface TaskListProps {
  tasks: Task[];
}

/**
 * TaskList Component
 *
 * Main task inbox showing captured work from various sources
 */
export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <section className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-gray-900">Inbox · Captured work</div>
          <div className="text-xs text-gray-500">
            AI is pulling tasks from Slack, GitHub, Meetings & Docs.
          </div>
        </div>
        <button className="inline-flex items-center gap-1 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-800">
          ＋ New task
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="mb-2 flex items-center justify-between text-xs">
        <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 p-1">
          <button className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-900">
            Today
          </button>
          <button className="rounded-full px-3 py-1 text-gray-500 hover:bg-gray-50">
            This week
          </button>
          <button className="rounded-full px-3 py-1 text-gray-500 hover:bg-gray-50">
            All
          </button>
        </div>
        <div className="flex gap-2 text-[11px] text-gray-600">
          <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5">
            ⚠ 3 at risk
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5">
            ✓ 8 done
          </span>
        </div>
      </div>

      {/* Task Items */}
      <div className="mt-1 flex-1 space-y-1 overflow-auto pr-1">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-xl border border-gray-200 px-3 py-2 text-xs hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3">
              {/* Status & Priority */}
              <div className="flex w-8 flex-col items-center gap-1 text-[10px] text-gray-500">
                <StatusDot status={task.status} />
                <span>{task.priority}</span>
              </div>

              {/* Task Details */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <span className="truncate">{task.title}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-gray-500">
                  <span className="font-mono text-[10px] text-gray-400">{task.id}</span>
                  {task.type === "Bug" && <Tag label="Bug" tone="red" />}
                  {task.type === "Feature" && <Tag label="Feature" tone="green" />}
                  {task.type === "Task" && <Tag label="Task" tone="blue" />}
                  <Chip label={task.source} />
                  <Chip label={`Owner · ${task.owner}`} />
                  <span className="text-[11px] text-gray-500">{task.project}</span>
                </div>
              </div>
            </div>

            {/* Due Date & Sync Status */}
            <div className="flex flex-col items-end gap-1 text-[11px] text-gray-500">
              <span className={task.due === "Overdue" ? "text-red-600 font-medium" : ""}>
                {task.due}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px]">
                ✨ AI-synced
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskList;
