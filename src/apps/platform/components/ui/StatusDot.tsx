import React from 'react';
import { TaskStatus } from '../../types/task.types';

interface StatusDotProps {
  status: TaskStatus;
}

/**
 * StatusDot Component
 *
 * Visual indicator showing task status with color-coded dots
 */
export const StatusDot: React.FC<StatusDotProps> = ({ status }) => {
  const colorMap: Record<TaskStatus, string> = {
    "In Progress": "bg-amber-400",
    "Blocked": "bg-red-500",
    "In Review": "bg-emerald-500",
    "Planned": "bg-gray-400",
    "Completed": "bg-blue-500",
  };

  const color = colorMap[status] || "bg-gray-400";

  return <span className={`inline-block h-2 w-2 rounded-full ${color}`} />;
};

export default StatusDot;
