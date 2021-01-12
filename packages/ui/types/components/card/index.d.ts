import React from "react";
import { ViewProps } from "@tarojs/components/types/View";
import { ColorProps } from "../base";
interface CardProps extends ViewProps {
    /**
     * Card Body 样式
     */
    bodyStyle?: React.CSSProperties;
    /**
     * 背景颜色
     */
    bgColor?: ColorProps;
    /**
     * 标题
     */
    title?: React.ReactNode;
    /**
     * 额外内容
     */
    extra?: React.ReactNode;
    /**
     * 头部样式
     */
    headStyle?: React.CSSProperties;
    /**
     * 封面图
     */
    cover?: React.ReactNode;
    /**
     * 子元素
     */
    children?: React.ReactNode;
}
declare const Card: React.FC<CardProps>;
export default Card;
