import React from "react";
import { ColorProps } from "../base";
interface TagProps {
    /**
     * 类型
     */
    type?: "default" | "round" | "radius";
    /**
     * 尺寸
     */
    size?: "default" | "small" | "large";
    /**
     * 颜色
     */
    color?: ColorProps | string;
    /**
     * 圆型
     */
    round?: boolean;
    /**
     * 圆角
     */
    radius?: boolean;
    /**
     * 镂空
     */
    line?: boolean;
    /**
     * 子元素
     */
    children?: React.ReactNode;
}
declare const Tag: React.FC<TagProps>;
export default Tag;
