import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
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

const Item: React.FC<ItemProps> = ({ color = "gray", children }) => {
  return (
    <View className="z3-timeline__item">
      <View className={classNames("z3-timeline__item__content", `z3-content-bg-${color}`)}>
        {children}
      </View>
    </View>
  );
};

interface TimeProps {
  children?: React.ReactNode;
}

const Time: React.FC<TimeProps> = ({ children }) => {
  return <View className="z3-timeline__time">{children}</View>;
};

interface TimelineProps {
  children?: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> & { Item: typeof Item; Time: typeof Time } = ({
  children,
}) => {
  return <View className="z3-timeline">{children}</View>;
};

Timeline.Item = Item;
Timeline.Time = Time;

export default Timeline;
