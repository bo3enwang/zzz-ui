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
const Bar = (_a) => {
    var { title, actions, titleIcon = "vertical", justify } = _a, rest = __rest(_a, ["title", "actions", "titleIcon", "justify"]);
    const rootClass = classNames("z3-bar", { [`${justify}`]: justify });
    return (React.createElement(View, Object.assign({ className: rootClass }, rest),
        title && React.createElement(View, { className: classNames("z3-bar-title", titleIcon) }, title),
        React.createElement(View, { className: "z3-bar-actions" }, actions)));
};
export default Bar;
//# sourceMappingURL=index.js.map