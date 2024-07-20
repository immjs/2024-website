import { HTMLProps, ReactNode } from "react";
import { Small } from "./typo";

export enum BoxLabelType {
  FILE_NAME,
  USER_ACTN,
  DESCRIPTN,
}

function BoxLabel({
  boxLabelType,
  children,
}: {
  boxLabelType: BoxLabelType;
  children: string | ReactNode | ReactNode[];
}) {
  let newContent: string | ReactNode | ReactNode[] = children;
  let newClassNames = [
    "block w-full overflow-x-hidden overflow-ellipsis whitespace-nowrap",
  ];
  switch (boxLabelType) {
    case BoxLabelType.FILE_NAME:
      newContent = (
        <>
          [<span className="italic">{children}</span>]
        </>
      );
      newClassNames.push("not-italic");
      break;
    case BoxLabelType.USER_ACTN:
      newClassNames.push("opacity-full not-italic");
      break;
  }
  return (
    <Small tabIndex={-1} className={newClassNames.join(" ")}>
      {newContent}
    </Small>
  );
}

export function Box({
  actAs,
  title,
  boxType,
  className,
  hasBorder,
  children,
  undertitle,
  ...others
}: BoxProps & HTMLProps<HTMLDivElement>) {
  if (hasBorder) {
    className = `before:absolute before:inset-0 before:border-slim before:border-cat-text before:block before:rounded-one ${className || ""}`;
  }
  return (
    <div
      {...others}
      className={`flex flex-col px-one ${!undertitle && "pb-one"} rounded-one bg-cat-base relative overflow-hidden ${className || ""}`}
    >
      <div className="h-one shrink-0 w-full flex items-center pointer-events-none select-none">
        {title && (
          <BoxLabel boxLabelType={boxType || BoxLabelType.FILE_NAME}>
            {title}
          </BoxLabel>
        )}
      </div>
      {children}
      {undertitle && (
        <div className="h-one shrink-0 w-full flex items-center pointer-events-none select-none">
          <Small
            tabIndex={-1}
            className="not-italic block w-full overflow-hidden overflow-ellipsis whitespace-nowrap"
          >
            {undertitle}
          </Small>
        </div>
      )}
    </div>
  );
}

interface BoxProps {
  actAs?: string;
  title?: string;
  boxType?: BoxLabelType;
  children?: ReactNode;
  undertitle?: string;
  className?: string;
  hasBorder?: boolean;
}
