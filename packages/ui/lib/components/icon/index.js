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
import { Text } from "@tarojs/components";
import { classNames } from "../../helps/utils";
const Icon = (_a) => {
    var { type, spin, pulse, color, style } = _a, rest = __rest(_a, ["type", "spin", "pulse", "color", "style"]);
    const rootClass = classNames("z3-icon", `z3-icon-${type}`, {
        ["z3-icon-spin"]: spin,
        ["z3-icon-pulse"]: pulse,
        [`text-color-${color}`]: !!color,
    });
    return React.createElement(Text, Object.assign({ className: rootClass, style: style }, rest));
};
export default Icon;
//# sourceMappingURL=index.js.map