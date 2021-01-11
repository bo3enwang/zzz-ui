import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
const Space = ({ size = "default" }) => {
    const rootClass = classNames("space", size);
    return React.createElement(View, { className: rootClass }, " ");
};
export default Space;
//# sourceMappingURL=index.js.map