import React from "react";
import { PickerStandardProps } from "@tarojs/components/types/Picker";
interface PickerOption {
    value: string | number;
    label: string;
    children?: PickerOption[];
}
interface Z3PickerProps {
    /**
     * 选择器模式
     */
    mode: keyof PickerStandardProps.mode;
    /**
     * value 的值
     */
    value?: any;
    /**
     * value 改变时触发 change 事件
     */
    onChange?: (v: any) => void;
    /**
     * 占位符
     */
    placeholder?: string;
    /**
     * 多选框的选择值
     */
    options: PickerOption[];
}
declare const Z3Picker: React.FC<Z3PickerProps>;
export default Z3Picker;
