import React from "react";
import { ColorProps } from "../base";
import { ViewProps } from "@tarojs/components/types/View";
interface BoxProps extends ViewProps {
    /**
     * 标题
     */
    title?: React.ReactNode;
    /**
     * 标题图标
     */
    titleIcon?: "circle" | "vertical";
    /**
     * 按钮
     */
    actions?: React.ReactNode;
    /**
     * Body 内容颜色
     */
    bodyColor?: ColorProps;
    /**
     * Body 样式
     */
    bodyStyle?: React.CSSProperties;
    /**
     * 样式
     */
    style?: React.CSSProperties;
    /**
     * 是否撑开内容
     */
    padding?: boolean;
    /**
     * 子元素
     */
    children?: React.ReactNode;
}
declare const Box: React.FC<BoxProps>;
export default Box;
