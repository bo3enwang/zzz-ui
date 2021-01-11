import React from "react";
interface FormFieldProps {
    /**
     * 文本
     */
    title: string;
    /**
     * 附加内容
     */
    extra?: React.ReactNode;
    /**
     * 线性显示
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
declare const FormField: ({ title, children, extra, line, required }: FormFieldProps) => JSX.Element;
export default FormField;
