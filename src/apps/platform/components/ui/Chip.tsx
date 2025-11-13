import React from 'react';

interface ChipProps {
  label: string;
}

/**
 * Chip Component
 *
 * Small, neutral chip for metadata labels
 */
export const Chip: React.FC<ChipProps> = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] text-gray-500">
    {label}
  </span>
);

export default Chip;
