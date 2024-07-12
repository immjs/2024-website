import { HTMLProps, ReactNode } from "react";
import { Small } from "./typo";

export function Box({ title, intendedForUser, className, hasBorder, children, ...others }: BoxProps & HTMLProps<HTMLDivElement>) {
  if (hasBorder) {
    className = `before:absolute before:inset-0 before:border-slim before:border-cat-text before:block before:rounded-one ${className || ''}`;
  }
  return (
    <div {...others} className={`flex flex-col p-one pt-0 rounded-one bg-cat-base relative ${className || ''}`}>
      <div className="h-one w-full">
        {
          intendedForUser
            ? <Small className="opacity-100 not-italic">{ title }</Small>
            : title && <Small className="not-italic">[<span className="italic">{ title }</span>]</Small>
        }
      </div>
      {children}
    </div>
  );
}

interface BoxProps {
  title?: string;
  intendedForUser?: boolean;
  children?: ReactNode;
  className?: string;
  hasBorder?: boolean;
}
