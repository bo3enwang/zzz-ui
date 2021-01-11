import React from "react";
import { Text } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import { ColorProps } from "../base";

interface TagProps {
  /**
   * 类型
   */
  type?: "default" | "round" | "radius";
  /**
   * 尺寸
   */
  size?: "default" | "small" | "large";

  /**
   * 颜色
   */
  color?: ColorProps | string;

  /**
   * 圆型
   */
  round?: boolean;

  /**
   * 圆角
   */
  radius?: boolean;

  /**
   * 镂空
   */
  line?: boolean;

  /**
   * 子元素
   */
  children?: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({
  children,
  type = "default",
  size = "default",
  color = "gray",
  line,
  round,
  radius,
}) => {
  const rootClass = classNames("z3-tag", `z3-tag-size-${size}`, {
    [type]: !!type,
    [`z3-content-bg-${color}`]: !!color && !line,
    [`z3-line-${color}`]: line,
    round: round,
    radius: radius,
  });

  return <Text className={rootClass}>{children}</Text>;
};

export default Tag;
