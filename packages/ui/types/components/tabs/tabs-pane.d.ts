import React from "react";
interface TabsPaneProps {
    children?: React.ReactNode;
    tabPosition?: "top" | "right" | "bottom" | "left";
    index: number;
    current: number;
}
declare const TabsPane: ({ children, tabPosition, index, current }: TabsPaneProps) => JSX.Element;
export default TabsPane;
