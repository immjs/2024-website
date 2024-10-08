import { ReactNode } from "react";

export function Section({ name, children }: SectionProps) {
  return (
    <div className="relative flex flex-col gap-two w-full">
      {name && (
        <div className="flex gap-2 items-center w-full">
          <h1>
            <span className="font-mono font-bold">{name}</span>
          </h1>
          <div className="flex-1 bg-zerotofull h-[0.375em] rounded-r-[0.25em]"></div>
        </div>
      )}
      {children}
    </div>
  );
}

interface SectionProps {
  name?: string;
  children?: ReactNode | ReactNode[];
}
