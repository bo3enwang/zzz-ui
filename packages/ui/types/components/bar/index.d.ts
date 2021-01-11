import React from "react";
import { ViewProps } from "@tarojs/components/types/View";
interface BarProps extends ViewProps {
    /**
     * 标题
     */
    title?: React.ReactNode;
    /**
     * 图标形状
     */
    titleIcon?: "circle" | "vertical";
    /**
     * 按钮
     */
    actions?: React.ReactNode;
    /**
     * 对齐方式
     */
    justify?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between";
}
declare const Bar: React.FC<BarProps>;
export default Bar;
