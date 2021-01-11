var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import RowContext from "./RowContext";
const Row = (_a) => {
    var { gutter, children, style, justify, wrap, align, className } = _a, rest = __rest(_a, ["gutter", "children", "style", "justify", "wrap", "align", "className"]);
    const getGutter = () => {
        const results = [0, 0];
        const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
        normalizedGutter.forEach((g, index) => {
            results[index] = g || 0;
        });
        return results;
    };
    const gutters = getGutter();
    const rowStyle = Object.assign(Object.assign(Object.assign({}, (gutters[0] > 0
        ? {
            marginLeft: gutters[0] / -2,
            marginRight: gutters[0] / -2,
        }
        : {})), (gutters[1] > 0
        ? {
            marginTop: gutters[1] / -2,
            marginBottom: gutters[1] / 2,
        }
        : {})), style);
    const prefixCls = "z3-row";
    const classes = classNames(prefixCls, {
        [`${prefixCls}-no-wrap`]: wrap === false,
        [`${prefixCls}-${justify}`]: justify,
        [`${prefixCls}-${align}`]: align,
    }, className);
    return (React.createElement(RowContext.Provider, { value: { gutter: gutters } },
        React.createElement(View, Object.assign({}, rest, { className: classes, style: rowStyle }), children)));
};
export default Row;
//# sourceMappingURL=row.js.map