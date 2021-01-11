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
function parseFlex(flex) {
    if (typeof flex === "number") {
        return `${flex} ${flex} auto`;
    }
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
    }
    return flex;
}
const Col = (_a) => {
    var { style, flex, children, span, className } = _a, rest = __rest(_a, ["style", "flex", "children", "span", "className"]);
    const { gutter, wrap } = React.useContext(RowContext);
    const prefixCls = "z3-col";
    let mergedStyle = Object.assign({}, style);
    if (gutter) {
        mergedStyle = Object.assign(Object.assign(Object.assign({}, (gutter[0] > 0
            ? {
                paddingLeft: `${gutter[0] / 2}px`,
                paddingRight: `${gutter[0] / 2}px`,
            }
            : {})), (gutter[1] > 0
            ? {
                paddingTop: `${gutter[1] / 2}px`,
                paddingBottom: `${gutter[1] / 2}px`,
            }
            : {})), mergedStyle);
    }
    if (flex) {
        mergedStyle.flex = parseFlex(flex);
        // Hack for Firefox to avoid size issue
        // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
        if (flex === "auto" && wrap === false && !mergedStyle.minWidth) {
            mergedStyle.minWidth = "0px";
        }
    }
    const classes = classNames(prefixCls, {
        [`${prefixCls}-${span}`]: span !== undefined,
    }, className);
    return (React.createElement(View, Object.assign({ style: mergedStyle, className: classes }, rest), children));
};
export default Col;
//# sourceMappingURL=col.js.map