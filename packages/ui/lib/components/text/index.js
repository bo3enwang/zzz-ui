import React from "react";
import { Text } from "@tarojs/components";
import { classNames } from "../../helps/utils";
const Z3Text = ({ children, size = "md", type, icon, color, bold, inline, }) => {
    const rootClass = classNames("z3-text", `text-size-${size}`, {
        [`text-type-${type}`]: !!size,
        [`z3-text-${color}`]: !!color,
        [`text-weight-bold`]: bold,
        [`z3-text-inline`]: inline,
    });
    return (React.createElement(Text, { className: rootClass },
        icon,
        children));
};
export default Z3Text;
//# sourceMappingURL=index.js.map