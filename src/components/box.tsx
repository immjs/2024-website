import { HTMLProps, ReactNode } from "react";
import { Small } from "./typo";

export function Box({ actAs, title, intendedForUser, className, hasBorder, children, undertitle, ...others }: BoxProps & HTMLProps<HTMLDivElement>) {
  if (hasBorder) {
    className = `before:absolute before:inset-0 before:border-slim before:border-cat-text before:block before:rounded-one ${className || ''}`;
  }
  return (
    <div {...others} className={`flex flex-col px-one ${!undertitle && 'pb-one'} rounded-one bg-cat-base relative overflow-hidden ${className || ''}`}>
      <div className="h-one shrink-0 w-full flex items-center pointer-events-none select-none">
        {
          intendedForUser
            ? <Small className="opacity-100 not-italic block w-full overflow-x-hidden overflow-ellipsis whitespace-nowrap">{ title }</Small>
            : title && <Small className="not-italic block w-full overflow-x-hidden overflow-ellipsis whitespace-nowrap">[<span className="italic">{ title }</span>]</Small>
        }
      </div>
      {children}
      {
        undertitle && (
          <div className="h-one shrink-0 w-full flex items-center pointer-events-none select-none">
            <Small className="not-italic block w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
              { undertitle }
            </Small>
          </div>
        )
      }
    </div>
  );
}

interface BoxProps {
  actAs?: string;
  title?: string;
  intendedForUser?: boolean;
  children?: ReactNode;
  undertitle?: string;
  className?: string;
  hasBorder?: boolean;
}
