import Image from "next/image";
import { ComponentProps, CSSProperties, HTMLProps } from "react";

export function Doodle({ dx, dy, posx, posy, ...props }: { dx: number; dy: number; posx: 'left' | 'right'; posy: 'top' | 'bottom' } & ComponentProps<typeof Image>) {
  const { className, style, ...otherProps } = props;
  
  otherProps.width ??= 256;
  otherProps.height ??= 256;
  
  const styleObj: CSSProperties = style || {};
  styleObj[posx] = dx;
  styleObj[posy] = dy;
  
  return (
    <Image {...otherProps} className={`lg:absolute ${className}`} style={styleObj} /> // eslint-disable-line jsx-a11y/alt-text
  );
}

export function DoodleResp({ altImgSrc, ...props }: { altImgSrc?: string } & ComponentProps<typeof Doodle>) {
  return (
    <>
      <div className={`lg:hidden flex w-full ${props.posx === 'left' ? 'justify-end' : 'justify-start'}`}>
        <Doodle {...props} src={altImgSrc || props.src} />
      </div>
      <Doodle {...props} className={`hidden lg:block ${props.className}`} />
    </>
  );
}