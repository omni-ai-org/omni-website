import React from 'react';

/**
 * AI Assistant Floating Icon
 *
 * Reusable floating AI assistant button with ripple animation
 */
export const AIAssistantIcon: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-ink rounded-full flex items-center justify-center cursor-pointer z-[1000] shadow-[0_4px_20px_rgba(0,0,0,0.2)] animate-float before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:border-2 before:border-paper before:animate-ripple">
      <svg
        className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] fill-paper"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
    </div>
  );
};

export default AIAssistantIcon;
