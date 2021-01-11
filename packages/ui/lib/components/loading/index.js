import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import Icon from "../icon";
import Text from "../text";
import { classNames } from "../../helps/utils";
const Loading = ({ loading, delay = 1000, type = "line", bgColor = "blue", title = "加载中", modalOptions = {}, }) => {
    const [show, setShow] = useState(false);
    const { description, modalType, icon } = modalOptions;
    useEffect(() => {
        if (loading) {
            setShow(true);
        }
        else {
            setTimeout(() => {
                setShow(false);
            }, delay);
        }
    }, [delay, loading]);
    const lineLoading = (React.createElement(View, { className: classNames("z3-loading-line", `bg-${bgColor}`) },
        React.createElement(Text, null,
            React.createElement(Icon, { type: "loading", spin: true }),
            title)));
    const modalLoading = (React.createElement(View, { className: "z3-loading load-modal" },
        React.createElement(View, { className: "load-modal__container" },
            icon ? React.createElement(View, { className: "icon" }, icon) : React.createElement(View, { className: modalType }),
            React.createElement(View, { className: "load-modal__container__title" }, title),
            React.createElement(View, { className: "load-modal__container__description" }, description))));
    const types = {
        line: lineLoading,
        modal: modalLoading,
    };
    const rootClass = classNames("z3-loading");
    if (!show) {
        return React.createElement(View, null);
    }
    return React.createElement(View, { className: rootClass }, types[type]);
};
export default Loading;
//# sourceMappingURL=index.js.map