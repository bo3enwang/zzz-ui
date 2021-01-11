import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
const Item = ({ color = "gray", children }) => {
    return (React.createElement(View, { className: "z3-timeline__item" },
        React.createElement(View, { className: classNames("z3-timeline__item__content", `z3-content-bg-${color}`) }, children)));
};
const Time = ({ children }) => {
    return React.createElement(View, { className: "z3-timeline__time" }, children);
};
const Timeline = ({ children, }) => {
    return React.createElement(View, { className: "z3-timeline" }, children);
};
Timeline.Item = Item;
Timeline.Time = Time;
export default Timeline;
//# sourceMappingURL=index.js.map