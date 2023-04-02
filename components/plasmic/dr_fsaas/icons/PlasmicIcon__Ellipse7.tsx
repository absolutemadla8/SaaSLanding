// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse7Icon(props: Ellipse7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 100"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"50"} cy={"50"} r={"50"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse7Icon;
/* prettier-ignore-end */
