import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
const TabsPane = ({ children, tabPosition, index, current }) => {
    return (React.createElement(View, { className: classNames({
            "z3-tabs-pane": true,
            "z3-tabs-pane-vertical": tabPosition === "top",
            "z3-tabs-pane-active": index === current,
            "z3-tabs-pane-inactive": index !== current,
        }) }, children));
};
export default TabsPane;
//# sourceMappingURL=tabs-pane.js.map