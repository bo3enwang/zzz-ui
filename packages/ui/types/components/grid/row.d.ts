import React, { CSSProperties } from "react";
import { StandardProps } from "@tarojs/components";
interface RowProps extends StandardProps {
    gutter?: number | [number, number];
    children?: React.ReactNode;
    style?: CSSProperties;
    justify?: "start" | "end" | "center" | "space-around" | "space-between";
    align?: "top" | "middle" | "bottom";
    wrap?: boolean;
    className?: string;
}
declare const Row: ({ gutter, children, style, justify, wrap, align, className, ...rest }: RowProps) => JSX.Element;
export default Row;
