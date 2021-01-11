import React from "react";
import { Text } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import { ColorProps } from "../base";

type SizeProps = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "sl";

interface Z3TextProps {
  /**
   * 尺寸
   */
  size?: SizeProps;

  /**
   * 子元素
   */
  children?: React.ReactNode;

  /**
   * 类型
   */
  type?: "price";

  /**
   * 图标
   */
  icon?: React.ReactNode;

  /**
   * 颜色
   */
  color?: ColorProps;

  /**
   * 加粗
   */
  bold?: boolean;

  /**
   * Inline显示
   */
  inline?: boolean;
}

const Z3Text: React.FC<Z3TextProps> = ({
  children,
  size = "md",
  type,
  icon,
  color,
  bold,
  inline,
}) => {
  const rootClass = classNames("z3-text", `text-size-${size}`, {
    [`text-type-${type}`]: !!size,
    [`z3-text-${color}`]: !!color,
    [`text-weight-bold`]: bold,
    [`z3-text-inline`]: inline,
  });

  return (
    <Text className={rootClass}>
      {icon}
      {children}
    </Text>
  );
};

export default Z3Text;
