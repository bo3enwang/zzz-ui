import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";

interface FieldProps {
  /**
   * 标题
   */
  title: string;

  /**
   * 额外元素
   */
  extra?: React.ReactNode;

  /**
   * 线性
   */
  line?: boolean;

  /**
   * 必填
   */
  required?: boolean;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ title, children, extra, line, required }) => {
  return (
    <View className={classNames("z3-form-field", { line })}>
      <View
        className={classNames("z3-form-field__title", {
          ["z3-form-field__title-required"]: required,
        })}
      >
        {title}
      </View>
      <View className="z3-form-field__content">{children}</View>
      <View className="z3-form-field__extra">{extra}</View>
    </View>
  );
};

export default Field;
