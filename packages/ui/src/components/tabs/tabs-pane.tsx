import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";

interface TabsPaneProps {
  children?: React.ReactNode;
  tabPosition?: "top" | "right" | "bottom" | "left";
  index: number;
  current: number;
}

const TabsPane = ({ children, tabPosition, index, current }: TabsPaneProps) => {
  return (
    <View
      className={classNames({
        "z3-tabs-pane": true,
        "z3-tabs-pane-vertical": tabPosition === "top",
        "z3-tabs-pane-active": index === current,
        "z3-tabs-pane-inactive": index !== current,
      })}
    >
      {children}
    </View>
  );
};

export default TabsPane;
