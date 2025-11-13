import React from 'react';

interface TagProps {
  label: string;
  tone?: "blue" | "red" | "green";
}

/**
 * Tag Component
 *
 * Colored tag for categorizing tasks
 */
export const Tag: React.FC<TagProps> = ({ label, tone }) => {
  const toneMap: Record<NonNullable<typeof tone>, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    red: "bg-red-50 text-red-700 border-red-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  const classes = tone ? toneMap[tone] : "bg-gray-50 border-gray-200 text-gray-600";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${classes}`}
    >
      {label}
    </span>
  );
};

export default Tag;
