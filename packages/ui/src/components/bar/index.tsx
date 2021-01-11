import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import { ViewProps } from "@tarojs/components/types/View";

interface BarProps extends ViewProps {
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 图标形状
   */
  titleIcon?: "circle" | "vertical";
  /**
   * 按钮
   */
  actions?: React.ReactNode;

  /**
   * 对齐方式
   */
  justify?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between";
}

const Bar: React.FC<BarProps> = ({ title, actions, titleIcon = "vertical", justify, ...rest }) => {
  const rootClass = classNames("z3-bar", { [`${justify}`]: justify });
  return (
    <View className={rootClass} {...rest}>
      {title && <View className={classNames("z3-bar-title", titleIcon)}>{title}</View>}
      <View className="z3-bar-actions">{actions}</View>
    </View>
  );
};

export default Bar;
