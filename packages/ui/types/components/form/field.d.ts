import React from "react";
interface FieldProps {
    /**
     * 标题
     */
    title: string;
    /**
     * 额外元素
     */
    extra?: React.ReactNode;
    /**
     * 线性
     */
    line?: boolean;
    /**
     * 必填
     */
    required?: boolean;
    /**
     * 子元素
     */
    children?: React.ReactNode;
}
declare const Field: React.FC<FieldProps>;
export default Field;
