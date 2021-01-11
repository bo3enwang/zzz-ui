import React, { useState } from "react";
import { View, ScrollView } from "@tarojs/components";
import { classNames } from "../../helps/utils";
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

const Tabs: React.FC<TabsProps> & { Pane: typeof Pane } = ({
  current,
  tabList = [],
  onChange,
  children,
  tabDirection = "horizontal",
  scroll,
}) => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const rootClass = classNames("z3-tabs");
  const bodyStyle: React.CSSProperties = {};
  let transformStyle = `translate3d(0px, -${current * 100}%, 0px)`;
  if (tabDirection === "horizontal") {
    transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`;
  }
  Object.assign(bodyStyle, {
    transform: transformStyle,
    "-webkit-transform": transformStyle,
  });

  const renderTabList = () => {
    return tabList.map((tab, index) => {
      return (
        <View
          key={tab.title}
          className={classNames({
            "z3-tabs__header-scroll-item": scroll,
            "z3-tabs__header-item": !scroll,
            ["cur"]: index == current,
            ["text-color-green"]: index == current,
          })}
          onClick={() => {
            if (onChange) {
              onChange(index);
              setScrollLeft((index - 1) * 60);
            }
          }}
        >
          {tab.icon}
          {tab.title}
        </View>
      );
    });
  };

  const renderHeader = () => {
    if (scroll) {
      return (
        <ScrollView
          className="z3-tabs__header-scroll"
          scrollLeft={scrollLeft}
          scrollX
          scrollWithAnimation
        >
          {renderTabList()}
        </ScrollView>
      );
    }
    return <View className="z3-tabs__header">{renderTabList()}</View>;
  };

  return (
    <View className={rootClass}>
      {renderHeader()}
      {children && (
        <View className="z3-tabs__body" style={bodyStyle}>
          {children}
        </View>
      )}
    </View>
  );
};

Tabs.Pane = Pane;

export default Tabs;
