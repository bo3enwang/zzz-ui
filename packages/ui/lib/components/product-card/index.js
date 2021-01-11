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
import Image from "../image";
import Tag from "../tag";
import Text from "../text";
const ProductCard = (_a) => {
    var { cover, name, intro, price, tags = [], className } = _a, rest = __rest(_a, ["cover", "name", "intro", "price", "tags", "className"]);
    const rootClass = classNames("z3-product-card", className);
    return (React.createElement(View, Object.assign({ className: rootClass }, rest),
        React.createElement(View, { className: "z3-product-card__cover" },
            React.createElement(Image, { src: cover }),
            React.createElement(View, { className: "z3-product-card__cover__info" }, "\u70ED\u9500")),
        React.createElement(View, { className: "z3-product-card__info" },
            React.createElement(View, { className: "z3-product-card__info-name" },
                tags.map((t) => {
                    return (React.createElement(Tag, { size: "small", key: t.name, color: t.color }, t.name));
                }),
                React.createElement(Text, { bold: true }, name)),
            React.createElement(Text, { size: "sm", color: "grey" }, intro),
            React.createElement(Text, { color: "red", type: "price" }, price))));
};
export default ProductCard;
//# sourceMappingURL=index.js.map