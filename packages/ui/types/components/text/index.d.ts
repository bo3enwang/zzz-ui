import React from "react";
import { ColorProps } from "../base";
declare type SizeProps = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "sl";
interface Z3TextProps {
    /**
     * 尺寸
     */
    size?: SizeProps;
    /**
     * 子元素
     */
    children?: React.ReactNode;
    /**
     * 类型
     */
    type?: "price";
    /**
     * 图标
     */
    icon?: React.ReactNode;
    /**
     * 颜色
     */
    color?: ColorProps;
    /**
     * 加粗
     */
    bold?: boolean;
    /**
     * Inline显示
     */
    inline?: boolean;
}
declare const Z3Text: React.FC<Z3TextProps>;
export default Z3Text;
