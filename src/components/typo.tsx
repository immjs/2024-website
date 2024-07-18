import { HTMLProps } from "react";

export function H1({ ...props }: HTMLProps<HTMLParagraphElement> & { semantic?: boolean }) {
  const { children, className, semantic, ...otherProps } = props;
  const Tag = semantic ? 'h2' : 'p';
  return (
    <Tag {...otherProps} className={`h1 before:whitespace-pre before:inline before:opacity-ghost text-huge font-heading font-bold ${className}`}>
      { children }
    </Tag>
  );
}

export function H2({ ...props }: HTMLProps<HTMLParagraphElement> & { semantic?: boolean }) {
  const { children, className, semantic, ...otherProps } = props;
  const Tag = semantic ? 'h3' : 'p';
  return (
    <Tag {...otherProps} className={`h2 before:whitespace-pre before:inline before:opacity-ghost text-big font-heading ${className}`}>
      { children }
    </Tag>
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
