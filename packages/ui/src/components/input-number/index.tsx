import React from "react";
import Taro from "@tarojs/taro";
import { View, Input } from "@tarojs/components";
import Icon from "../icon";
import { classNames } from "../../helps/utils";
import { add, subtract } from "lodash-es";
import { NormalSizeProps } from "../base";

interface InputNumberProps {
  /**
   * 尺寸
   */
  size?: NormalSizeProps;
  /**
   * 数值
   */
  value: number;
  /**
   * 监听数值变化
   */
  onChange: (val: number) => void;

  /**
   * 步进 默认 1
   */
  step?: number;

  /**
   * 最小值 默认 0
   */
  min?: number;

  /**
   * 最大值 默认 100
   */
  max?: number;

  /**
   * 禁用
   */
  disabled?: boolean;

  /**
   * 禁用输入框
   */
  disabledInput?: boolean;

  /**
   * 输入框宽度
   */
  width?: number;
}

const InputNumber: React.FC<InputNumberProps> = ({
  value,
  onChange,
  step = 1,
  min = 0,
  max = 100,
  disabled,
  disabledInput,
  width = 120,
  size = "default",
}) => {
  const handleAdd = () => {
    if (disabled) {
      return;
    }
    const newValue = add(value, step);
    if (newValue > max) {
      return;
    }
    onChange(newValue);
  };
  const handleMinus = () => {
    if (disabled) {
      return;
    }
    const newValue = subtract(value, step);
    if (newValue < min) {
      return;
    }
    onChange(newValue);
  };

  const inputStyle = {
    width: width ? `${Taro.pxTransform(width)}` : "",
  };

  const minusBtnCls = classNames("z3-input-number__btn", {
    "z3-input-number--disabled": value <= min! || disabled,
  });
  const plusBtnCls = classNames("z3-input-number__btn", {
    "z3-input-number--disabled": value >= max! || disabled,
  });

  return (
    <View className={classNames("z3-input-number", size)}>
      <View
        className={minusBtnCls}
        onClick={() => {
          handleMinus();
        }}
      >
        <Icon type="minus"></Icon>
      </View>
      <Input
        style={inputStyle}
        disabled={disabled || disabledInput}
        onInput={(e) => {
          onChange(Number(e.detail.value));
        }}
        type="number"
        value={value + ""}
        className="z3-input-number__input"
      ></Input>
      <View
        className={plusBtnCls}
        onClick={() => {
          handleAdd();
        }}
      >
        <Icon type="add"></Icon>
      </View>
    </View>
  );
};

export default InputNumber;
