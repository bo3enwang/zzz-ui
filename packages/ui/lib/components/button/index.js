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
import { Button } from "@tarojs/components";
import classNames from "classnames";
const Z3Button = (_a) => {
    var { size = "default", children, type = "default", color = "white", disabled, block, icon, plain, round, className } = _a, rest = __rest(_a, ["size", "children", "type", "color", "disabled", "block", "icon", "plain", "round", "className"]);
    const rootClassName = "z3-button";
    const rootClass = classNames(rootClassName, className, type, `z3-button-${size}`, {
        [`z3-content-bg-${color}`]: !plain,
        [`z3-text-${color} z3-line-${color} z3-button-plain`]: plain,
        block,
        round,
    });
    return (React.createElement(Button, Object.assign({ className: rootClass, disabled: disabled }, rest),
        icon,
        children));
};
export default Z3Button;
//# sourceMappingURL=index.js.map