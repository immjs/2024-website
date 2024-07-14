import { ReactNode } from "react";

import css from "./pretty_frame.module.css";

export function PrettyFrame({ children, className }: PrettyFrameProps) {
  return (
    <div className={`shadow-gradient-me p-one bg-cat-crust ${css.pretty_frame} ${className || ''}`}>
      { children }
    </div>
  );
}

export interface PrettyFrameProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}
