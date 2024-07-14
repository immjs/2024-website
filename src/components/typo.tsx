import { HTMLProps } from "react";

export function H1({ ...props }: HTMLProps<HTMLSpanElement>) {
  const { children, className, ...otherProps } = props;
  return (
    <span {...otherProps} className={`h1 before:whitespace-pre before:inline before:opacity-ghost text-huge font-heading font-bold ${className}`}>
      { children }<br/>
    </span>
  );
}

export function H2({ ...props }: HTMLProps<HTMLSpanElement>) {
  const { children, className, ...otherProps } = props;
  return (
    <span {...otherProps} className={`h2 before:whitespace-pre before:inline before:opacity-ghost text-big font-heading ${className}`}>
      { children }<br/>
    </span>
  );
}

export function Ghost(props: HTMLProps<HTMLSpanElement>) {
  return (
    <span {...props} className="opacity-ghost" />
  );
}

export function Small(props: HTMLProps<HTMLSpanElement>) {
  return (
    <span {...props} className={`opacity-ghost font-mono text-small italic ${props.className}`} />
  );
}
