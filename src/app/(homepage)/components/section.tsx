import { ReactNode } from "react";

export function Section({ name, children }: SectionProps) {
  return (
    <div className="relative flex flex-col gap-4 w-full">
      { name && (
        <div className="flex gap-2 items-center w-full">
          <span className="font-mono font-bold">{ name }</span>
          <div className="flex-1 bg-zerotofull h-[0.375em] rounded-r-[0.25em]"></div>
        </div>
      ) }
      { children }
    </div>
  );
}

interface SectionProps {
  name?: string;
  children?: ReactNode | ReactNode[];
}
