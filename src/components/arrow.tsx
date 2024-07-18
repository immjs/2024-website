import { useId } from "react";

function ArrowTip () {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[-1px]">
      <path d="M0 12H20M20 12L12 4M20 12L12 20" style={{ stroke: 'rgb(var(--ctp-text))' }} strokeWidth="0.375em" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowBody () {
  const id = useId();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="flex-1" width="24" height="24" viewBox="0 0 24 24" fill="none" preserveAspectRatio="none">
      <path d="M0 12H24" stroke={`url(#${id})`} strokeWidth="0.375em" strokeLinejoin="round"/>
      <defs>
        <linearGradient id={id} x1="24" y1="12" x2="0" y2="12" gradientUnits="userSpaceOnUse">
          <stop style={{ stopColor: 'rgb(var(--ctp-text))' }} />
          <stop offset="1" style={{ stopColor: 'rgb(var(--ctp-text))' }} stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Arrow () {
  return (
    <div className="flex-1 flex items-center">
      <ArrowBody />
      <ArrowTip />
    </div>
  );
}
