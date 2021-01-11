import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import { ColorProps } from "../base";
import { ViewProps } from "@tarojs/components/types/View";
import Bar from "../bar";

interface BoxProps extends ViewProps {
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 标题图标
   */
  titleIcon?: "circle" | "vertical";
  /**
   * 按钮
   */
  actions?: React.ReactNode;

  /**
   * Body 内容颜色
   */
  bodyColor?: ColorProps;

  /**
   * Body 样式
   */
  bodyStyle?: React.CSSProperties;
  /**
   * 样式
   */
  style?: React.CSSProperties;

  /**
   * 是否撑开内容
   */
  padding?: boolean;

  /**
   * 子元素
   */
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({
  title,
  actions,
  children,
  titleIcon = "circle",
  bodyStyle,
  bodyColor = "none",
  padding,
  className,
  style,
  ...rest
}) => {
  return (
    <View className={classNames("z3-box", className)} style={style} {...rest}>
      {title && <Bar title={title} actions={actions} titleIcon={titleIcon}></Bar>}
      <View
        className={classNames("z3-box__body", `z3-content-bg-${bodyColor}`, { padding })}
        style={{ padding: "10px 10px", ...bodyStyle }}
      >
        {children}
      </View>
    </View>
  );
};

export default Box;
