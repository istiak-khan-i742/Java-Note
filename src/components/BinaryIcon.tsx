import React from 'react';

interface BinaryIconProps {
  className?: string;
  size?: number;
}

export const BinaryIcon: React.FC<BinaryIconProps> = ({ className = "w-10 h-10", size }) => {
  const dimension = size || undefined;
  
  return (
    <svg 
      viewBox="0 0 512 512" 
      width={dimension} 
      height={dimension} 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circular clip & shadow / background */}
      <defs>
        <radialGradient id="cyberBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#021c3b" />
          <stop offset="100%" stopColor="#000e21" />
        </radialGradient>
        <linearGradient id="neonGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6bfbc5" />
          <stop offset="100%" stopColor="#22e293" />
        </linearGradient>
        <filter id="neonGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Circle */}
      <circle cx="256" cy="256" r="248" fill="url(#cyberBg)" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="6" />

      {/* Decorative vertical chain of nodes - Left Column top */}
      <g opacity="0.8">
        <circle cx="176" cy="22" r="15" fill="#0e8358" />
        <circle cx="176" cy="55" r="12" fill="#0d9d68" />
        <circle cx="176" cy="118" r="22" fill="#15c583" />
      </g>

      {/* Decorative vertical chain of nodes - Right Column bottom */}
      <g opacity="0.8">
        <circle cx="396" cy="336" r="22" fill="#15c583" />
        <circle cx="396" cy="385" r="14" fill="#0d9d68" />
        <circle cx="396" cy="432" r="16" fill="#0e8358" />
      </g>

      {/* Binary Text Matrix */}
      <g fontStyle="normal" filter="url(#neonGlow)">
        {/* Row 1 */}
        <text x="276" y="142" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">0</text>
        <text x="368" y="142" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">0</text>

        {/* Row 2 */}
        <text x="80" y="278" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">0</text>
        <text x="182" y="278" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">1</text>
        <text x="276" y="278" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">0</text>
        <text x="368" y="278" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">1</text>
        <text x="466" y="278" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">1</text>

        {/* Row 3 */}
        <text x="96" y="415" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">1</text>
        <text x="182" y="415" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">0</text>
        <text x="278" y="415" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">1</text>

        {/* Row 4 */}
        <text x="182" y="515" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">1</text>
        <text x="278" y="515" fill="url(#neonGreenGrad)" fontFamily="var(--font-mono), Courier, monospace" fontSize="105" fontWeight="900" textAnchor="middle">0</text>
      </g>
    </svg>
  );
};
