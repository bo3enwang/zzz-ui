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
const Card = (_a) => {
    var { children, title, extra, bgColor = "white", className, headStyle, cover } = _a, rest = __rest(_a, ["children", "title", "extra", "bgColor", "className", "headStyle", "cover"]);
    let head;
    if (title || extra) {
        head = (React.createElement(View, { className: "z3-card__header", style: headStyle },
            React.createElement(View, { className: "z3-card__header-wrapper" },
                title && React.createElement(View, { className: "z3-card__header-title" }, title),
                extra && React.createElement(View, { className: "z3-card__header-extra" }, extra))));
    }
    const coverDom = cover ? React.createElement(View, { className: "z3-card__cover" }, cover) : null;
    return (React.createElement(View, Object.assign({ className: classNames(className, "z3-card", `z3-content-bg-${bgColor}`) }, rest),
        head,
        coverDom,
        React.createElement(View, { className: "z3-card__body" }, children)));
};
export default Card;
//# sourceMappingURL=index.js.map