import React from "react";
import { ColorProps } from "../base";
import { ViewProps } from "@tarojs/components/types/View";
declare type IconType = "broken_image" | "add" | "add-circle" | "adjust" | "arrow-up-circle" | "arrow-right-circle" | "arrow-down" | "ashbin" | "arrow-right" | "browse" | "bottom" | "back" | "camera" | "attachment" | "code" | "close" | "check-item" | "calendar" | "comment" | "complete" | "chart-pie" | "cry" | "delete" | "direction-down" | "copy" | "direction-right" | "direction-up" | "discount" | "direction-left" | "download" | "electronics" | "drag" | "elipsis" | "export" | "edit" | "eye-close" | "email" | "error" | "favorite" | "fabulous" | "filter" | "good" | "hide" | "home" | "history" | "image-text" | "link" | "layers" | "map" | "meh" | "loading" | "help" | "minus-circle" | "modular" | "notification" | "more" | "operation" | "play" | "print" | "minus" | "navigation" | "picture" | "pin" | "save" | "search" | "share" | "scanning" | "security" | "sign-out" | "select" | "stop" | "success" | "smile" | "setting" | "task" | "text" | "time" | "unlock" | "user" | "upload" | "work" | "training" | "warning" | "zoom-in" | "zoom-out" | "arrow-left-bold" | "arrow-up-bold" | "close-bold" | "arrow-down-bold" | "minus-bold" | "arrow-right-bold" | "select-bold";
interface IconProps extends ViewProps {
    /**
     * 图标
     */
    type: IconType;
    /**
     * 选择
     */
    spin?: boolean;
    /**
     * 跳动
     */
    pulse?: boolean;
    /**
     * 颜色
     */
    color?: ColorProps;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
