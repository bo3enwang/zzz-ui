import React from "react";
import { ButtonProps } from "@tarojs/components/types/Button";
import { ColorProps } from "../base";
declare type ButtonTypeProps = "default" | "dashed" | "dashed" | "text" | "primary";
declare type ButtonSizeProps = "default" | "small" | "large";
declare type TaroButtonProps = Pick<ButtonProps, "className" | "formType" | "openType" | "lang" | "sessionFrom" | "sendMessageTitle" | "sendMessagePath" | "sendMessageImg" | "showMessageCard" | "appParameter" | "onContact" | "onGetUserInfo" | "onGetPhoneNumber" | "onOpenSetting" | "onError" | "onClick">;
export interface Z3ButtonProps extends TaroButtonProps {
    /**
     * 按钮尺寸
     */
    size?: ButtonSizeProps;
    /**
     * 按钮类型
     */
    type?: ButtonTypeProps;
    /**
     * 按钮颜色
     */
    color?: ColorProps;
    /**
     * 禁用
     */
    disabled?: boolean;
    /**
     * 块级显示
     */
    block?: boolean;
    /**
     * 按钮图标
     */
    icon?: React.ReactNode;
    /**
     * 镂空按钮
     */
    plain?: boolean;
    /**
     * 样式
     */
    style?: React.CSSProperties;
    /**
     * 圆角
     */
    round?: boolean;
    /**
     * 子元素
     */
    children?: React.ReactNode;
}
declare const Z3Button: React.FC<Z3ButtonProps>;
export default Z3Button;
