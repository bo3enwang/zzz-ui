import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import { ViewProps } from "@tarojs/components/types/View";
import { ColorProps } from "../base";

interface CardProps extends ViewProps {
  /**
   * 背景颜色
   */
  bgColor?: ColorProps;

  /**
   * 标题
   */
  title?: React.ReactNode;

  /**
   * 额外内容
   */
  extra?: React.ReactNode;

  /**
   * 头部样式
   */
  headStyle?: React.CSSProperties;

  /**
   * 封面图
   */
  cover?: React.ReactNode;

  /**
   * 子元素
   */
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  extra,
  bgColor = "white",
  className,
  headStyle,
  cover,
  ...rest
}) => {
  let head: React.ReactNode;
  if (title || extra) {
    head = (
      <View className="z3-card__header" style={headStyle}>
        <View className="z3-card__header-wrapper">
          {title && <View className="z3-card__header-title">{title}</View>}
          {extra && <View className="z3-card__header-extra">{extra}</View>}
        </View>
      </View>
    );
  }

  const coverDom = cover ? <View className="z3-card__cover">{cover}</View> : null;

  return (
    <View className={classNames(className, "z3-card", `z3-content-bg-${bgColor}`)} {...rest}>
      {head}
      {coverDom}
      <View className="z3-card__body">{children}</View>
    </View>
  );
};

export default Card;
