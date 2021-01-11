import React from "react";
import Taro from "@tarojs/taro";
import { View, Input } from "@tarojs/components";
import Icon from "../icon";
import { classNames } from "../../helps/utils";
import { add, subtract } from "lodash-es";
const InputNumber = ({ value, onChange, step = 1, min = 0, max = 100, disabled, disabledInput, width = 120, size = "default", }) => {
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
        "z3-input-number--disabled": value <= min || disabled,
    });
    const plusBtnCls = classNames("z3-input-number__btn", {
        "z3-input-number--disabled": value >= max || disabled,
    });
    return (React.createElement(View, { className: classNames("z3-input-number", size) },
        React.createElement(View, { className: minusBtnCls, onClick: () => {
                handleMinus();
            } },
            React.createElement(Icon, { type: "minus" })),
        React.createElement(Input, { style: inputStyle, disabled: disabled || disabledInput, onInput: (e) => {
                onChange(Number(e.detail.value));
            }, type: "number", value: value + "", className: "z3-input-number__input" }),
        React.createElement(View, { className: plusBtnCls, onClick: () => {
                handleAdd();
            } },
            React.createElement(Icon, { type: "add" }))));
};
export default InputNumber;
//# sourceMappingURL=index.js.map