import { HTMLProps, ReactNode } from "react";

export function Link(
  props: {
    children?: string | ReactNode | ReactNode[];
  } & HTMLProps<HTMLAnchorElement>,
) {
  return <a {...props} />;
}
