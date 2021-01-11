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
import Bar from "../bar";
const Box = (_a) => {
    var { title, actions, children, titleIcon = "circle", bodyStyle, bodyColor = "none", padding, className, style } = _a, rest = __rest(_a, ["title", "actions", "children", "titleIcon", "bodyStyle", "bodyColor", "padding", "className", "style"]);
    return (React.createElement(View, Object.assign({ className: classNames("z3-box", className), style: style }, rest),
        title && React.createElement(Bar, { title: title, actions: actions, titleIcon: titleIcon }),
        React.createElement(View, { className: classNames("z3-box__body", `z3-content-bg-${bodyColor}`, { padding }), style: Object.assign({ padding: "10px 10px" }, bodyStyle) }, children)));
};
export default Box;
//# sourceMappingURL=index.js.map