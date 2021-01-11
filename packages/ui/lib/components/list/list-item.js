import React from "react";
import { View } from "@tarojs/components";
import Icon from "../icon";
const ListItem = ({ thumb, title, extra, note, arrow }) => {
    const iconType = {
        right: "arrow-right",
        top: "arrow-up-bold",
        bottom: "arrow-down",
    };
    return (React.createElement(View, { className: "z3-list-item" },
        thumb && React.createElement(View, { className: "z3-list-item__thumb" }, thumb),
        React.createElement(View, { className: "z3-list-item__content" },
            React.createElement(View, { className: "z3-list-item__title" }, title),
            note && React.createElement(View, { className: "z3-list-item__note" }, note)),
        extra && React.createElement(View, { className: "z3-list-item__extra" }, extra),
        arrow && (React.createElement(View, { className: "z3-list-item__arrow" },
            React.createElement(Icon, { type: iconType[arrow] })))));
};
export default ListItem;
//# sourceMappingURL=list-item.js.map