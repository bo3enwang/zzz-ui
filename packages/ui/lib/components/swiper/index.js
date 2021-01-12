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
import React, { useState } from "react";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { classNames } from "../../helps/utils";
const Z3Swiper = (_a) => {
    var { itemList, autoplay = true, type = "screen", onChange, indicatorColor = "#8799a3", indicatorActiveColor = "#0081ff" } = _a, rest = __rest(_a, ["itemList", "autoplay", "type", "onChange", "indicatorColor", "indicatorActiveColor"]);
    const [current, setCurrent] = useState(0);
    return (React.createElement(Swiper, Object.assign({ circular: true, className: classNames("z3-swiper", "square-dot", {
            "screen-swiper": type == "screen",
            "card-swiper": type == "card",
        }), autoplay: autoplay, onChange: (e) => {
            setCurrent(e.detail.current);
            if (onChange) {
                onChange(e);
            }
        }, indicatorColor: indicatorColor, indicatorActiveColor: indicatorActiveColor }, rest), itemList.map((item, index) => {
        return (React.createElement(SwiperItem, { className: classNames("z3-swiper-item", {
                cur: index === current,
            }), key: index, onClick: () => {
                if (item.onClick) {
                    item.onClick();
                }
            } },
            React.createElement(View, { className: "z3-swiper-item__content" },
                React.createElement(Image, { src: item.img, mode: "aspectFill" }))));
    })));
};
export default Z3Swiper;
//# sourceMappingURL=index.js.map