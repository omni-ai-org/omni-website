import React from 'react';
import { TaskPriority } from '../../types/task.types';

interface PriorityPillProps {
  value: TaskPriority;
}

/**
 * PriorityPill Component
 *
 * Badge showing task priority level with color coding
 */
export const PriorityPill: React.FC<PriorityPillProps> = ({ value }) => {
  const styleMap: Record<TaskPriority, string> = {
    P0: "border-red-500 text-red-600",
    P1: "border-yellow-500 text-yellow-600",
    P2: "border-blue-500 text-blue-600",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${
        styleMap[value]
      }`}
    >
      {value}
    </span>
  );
};

export default PriorityPill;
