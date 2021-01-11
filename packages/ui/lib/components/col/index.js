import React from "react";
import classNames from "classnames";
import { View } from "@tarojs/components";
const Col = ({ children, span, flex, className }) => {
    const rootClass = classNames("z3-col", className, { [`z3-col-${span}`]: !!span });
    return (React.createElement(View, { className: rootClass, style: { flex } }, children));
};
export default Col;
//# sourceMappingURL=index.js.map