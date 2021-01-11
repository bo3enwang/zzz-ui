import React from "react";
import { ColorProps } from "../base";
interface ItemProps {
    /**
     * 背景颜色
     */
    color?: ColorProps;
    /**
     * 子元素
     */
    children?: React.ReactNode;
}
declare const Item: React.FC<ItemProps>;
interface TimeProps {
    children?: React.ReactNode;
}
declare const Time: React.FC<TimeProps>;
interface TimelineProps {
    children?: React.ReactNode;
}
declare const Timeline: React.FC<TimelineProps> & {
    Item: typeof Item;
    Time: typeof Time;
};
export default Timeline;
