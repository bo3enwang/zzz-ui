import React, { useState } from "react";
import { View, ScrollView } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import Pane from "./tabs-pane";
const Tabs = ({ current, tabList = [], onChange, children, tabDirection = "horizontal", scroll, }) => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const rootClass = classNames("z3-tabs");
    const bodyStyle = {};
    let transformStyle = `translate3d(0px, -${current * 100}%, 0px)`;
    if (tabDirection === "horizontal") {
        transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`;
    }
    Object.assign(bodyStyle, {
        transform: transformStyle,
        "-webkit-transform": transformStyle,
    });
    const renderTabList = () => {
        return tabList.map((tab, index) => {
            return (React.createElement(View, { key: tab.title, className: classNames({
                    "z3-tabs__header-scroll-item": scroll,
                    "z3-tabs__header-item": !scroll,
                    ["cur"]: index == current,
                    ["text-color-green"]: index == current,
                }), onClick: () => {
                    if (onChange) {
                        onChange(index);
                        setScrollLeft((index - 1) * 60);
                    }
                } },
                tab.icon,
                tab.title));
        });
    };
    const renderHeader = () => {
        if (scroll) {
            return (React.createElement(ScrollView, { className: "z3-tabs__header-scroll", scrollLeft: scrollLeft, scrollX: true, scrollWithAnimation: true }, renderTabList()));
        }
        return React.createElement(View, { className: "z3-tabs__header" }, renderTabList());
    };
    return (React.createElement(View, { className: rootClass },
        renderHeader(),
        children && (React.createElement(View, { className: "z3-tabs__body", style: bodyStyle }, children))));
};
Tabs.Pane = Pane;
export default Tabs;
//# sourceMappingURL=index.js.map