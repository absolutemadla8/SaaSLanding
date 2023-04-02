// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 28"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.364 1.818h-.649a.454.454 0 01-.422-.288A2.396 2.396 0 0013.06 0H6.939a2.397 2.397 0 00-2.232 1.53.455.455 0 01-.422.288h-.649A3.636 3.636 0 000 5.455v18.181a3.636 3.636 0 003.636 3.637h12.728A3.636 3.636 0 0020 23.636V5.455a3.636 3.636 0 00-3.636-3.637zm-2.735 3.637H6.371a.91.91 0 010-1.819h7.258a.91.91 0 010 1.819z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
