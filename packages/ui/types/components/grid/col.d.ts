import React, { CSSProperties } from "react";
import { ViewProps } from "@tarojs/components/types/View";
declare type ColSpanType = number | string;
declare type FlexType = number | "none" | "auto" | string;
interface ColProps extends ViewProps {
    /**
     * 水平排列方式
     */
    flex?: FlexType;
    /**
     * 栅格占位格数
     */
    span?: ColSpanType;
    /**
     * 样式
     */
    style?: CSSProperties;
    /**
     * 子元素
     */
    children?: React.ReactNode;
}
declare const Col: React.FC<ColProps>;
export default Col;
