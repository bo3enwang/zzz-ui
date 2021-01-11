import React from "react";
import { NormalSizeProps } from "../base";
interface InputNumberProps {
    /**
     * 尺寸
     */
    size?: NormalSizeProps;
    /**
     * 数值
     */
    value: number;
    /**
     * 监听数值变化
     */
    onChange: (val: number) => void;
    /**
     * 步进 默认 1
     */
    step?: number;
    /**
     * 最小值 默认 0
     */
    min?: number;
    /**
     * 最大值 默认 100
     */
    max?: number;
    /**
     * 禁用
     */
    disabled?: boolean;
    /**
     * 禁用输入框
     */
    disabledInput?: boolean;
    /**
     * 输入框宽度
     */
    width?: number;
}
declare const InputNumber: React.FC<InputNumberProps>;
export default InputNumber;
