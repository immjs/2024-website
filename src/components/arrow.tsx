function ArrowTip () {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12H20M20 12L12 4M20 12L12 20" style={{ stroke: 'rgb(var(--ctp-text))' }} strokeWidth="0.375em" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Arrow () {
  return (
    <div className="flex-1 flex items-center">
      <div className="flex-1 bg-zerotofull h-[0.375em]" />
      <ArrowTip />
    </div>
  );
}
