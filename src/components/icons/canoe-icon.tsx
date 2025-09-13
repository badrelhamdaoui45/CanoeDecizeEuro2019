import * as React from 'react';

const CanoeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 6L12 4L10 6" />
    <path d="M12 10V4" />
    <path d="M3.5 16.5A6.2 6.2 0 009.7 13H14.3a6.2 6.2 0 006.2 3.5" />
    <path d="M3 14l-1 4h20l-1-4" />
  </svg>
);

export default CanoeIcon;
