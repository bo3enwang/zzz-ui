import React from "react";
import { Button } from "@tarojs/components";
import { ButtonProps } from "@tarojs/components/types/Button";
import classNames from "classnames";
import { ColorProps } from "../base";

type ButtonTypeProps = "default" | "dashed" | "dashed" | "text" | "primary";
type ButtonSizeProps = "default" | "small" | "large";

type TaroButtonProps = Pick<
  ButtonProps,
  | "className"
  | "formType"
  | "openType"
  | "lang"
  | "sessionFrom"
  | "sendMessageTitle"
  | "sendMessagePath"
  | "sendMessageImg"
  | "showMessageCard"
  | "appParameter"
  | "onContact"
  | "onGetUserInfo"
  | "onGetPhoneNumber"
  | "onOpenSetting"
  | "onError"
  | "onClick"
>;

export interface Z3ButtonProps extends TaroButtonProps {
  /**
   * 按钮尺寸
   */
  size?: ButtonSizeProps;

  /**
   * 按钮类型
   */
  type?: ButtonTypeProps;

  /**
   * 按钮颜色
   */
  color?: ColorProps;

  /**
   * 禁用
   */
  disabled?: boolean;

  /**
   * 块级显示
   */
  block?: boolean;

  /**
   * 按钮图标
   */
  icon?: React.ReactNode;

  /**
   * 镂空按钮
   */
  plain?: boolean;

  /**
   * 样式
   */
  style?: React.CSSProperties;

  /**
   * 圆角
   */
  round?: boolean;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

const Z3Button: React.FC<Z3ButtonProps> = ({
  size = "default",
  children,
  type = "default",
  color = "white",
  disabled,
  block,
  icon,
  plain,
  round,
  className,
  ...rest
}) => {
  const rootClassName = "z3-button";
  const rootClass = classNames(rootClassName, className, type, `z3-button-${size}`, {
    [`z3-content-bg-${color}`]: !plain,
    [`z3-text-${color} z3-line-${color} z3-button-plain`]: plain,
    block,
    round,
  });
  return (
    <Button className={rootClass} disabled={disabled} {...rest}>
      {icon}
      {children}
    </Button>
  );
};

export default Z3Button;
