import React from "react";
import Pane from "./tabs-pane";
interface ItemProps {
    icon?: React.ReactNode;
    title: string;
}
interface TabsProps {
    /**
     * 当前TabIndex
     */
    current: number;
    /**
     * TabList
     */
    tabList: ItemProps[];
    /**
     * 切换Tab回调
     */
    onChange: (index: number) => void;
    /**
     * Tab方向
     */
    tabDirection?: "horizontal" | "vertical";
    /**
     * 子元素
     */
    children?: React.ReactNode;
    /**
     * 是否可以滚动
     */
    scroll?: boolean;
}
declare const Tabs: React.FC<TabsProps> & {
    Pane: typeof Pane;
};
export default Tabs;
