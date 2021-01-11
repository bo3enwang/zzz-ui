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
import Button from "../button";
const ProductActionIcon = ({ icon, text, onClick }) => {
    return (React.createElement(View, { className: "z3-product-action__icon", onClick: () => {
            if (onClick)
                onClick();
        } },
        React.createElement(View, null, icon),
        React.createElement(View, null, text)));
};
const ProductActionButton = (_a) => {
    var { children, onClick } = _a, rest = __rest(_a, ["children", "onClick"]);
    return (React.createElement(View, { className: "z3-product-action__button", onClick: (e) => {
            if (onClick)
                onClick(e);
        } },
        React.createElement(Button, Object.assign({ style: { width: "100%" } }, rest), children)));
};
const ProductAction = ({ icons, buttons }) => {
    return (React.createElement(View, { className: "z3-product-action" },
        React.createElement(View, { className: "z3-product-action__icons" }, icons),
        React.createElement(View, { className: "z3-product-action__buttons" }, buttons)));
};
ProductAction.Icon = ProductActionIcon;
ProductAction.Button = ProductActionButton;
export default ProductAction;
//# sourceMappingURL=index.js.map