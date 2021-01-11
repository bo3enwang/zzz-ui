import React from "react";
import { ColorProps } from "../base";
interface ModalOptionsProps {
    modalType?: "ring";
    description?: React.ReactNode;
    icon?: React.ReactNode;
}
interface LoadingProps {
    loading?: boolean;
    /**
     * 加载类型
     */
    type?: "content" | "modal" | "line";
    /**
     * 背景颜色
     */
    bgColor?: ColorProps;
    /**
     * 防止闪烁默认 500ms
     */
    delay?: number;
    /**
     * 默认加载文字
     */
    title?: React.ReactNode;
    /**
     * Modal 模式的样式
     */
    modalOptions?: ModalOptionsProps;
}
declare const Loading: React.FC<LoadingProps>;
export default Loading;
