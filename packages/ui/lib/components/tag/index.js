import React from "react";
import { Text } from "@tarojs/components";
import { classNames } from "../../helps/utils";
const Tag = ({ children, type = "default", size = "default", color = "gray", line, round, radius, }) => {
    const rootClass = classNames("z3-tag", `z3-tag-size-${size}`, {
        [type]: !!type,
        [`z3-content-bg-${color}`]: !!color && !line,
        [`z3-line-${color}`]: line,
        round: round,
        radius: radius,
    });
    return React.createElement(Text, { className: rootClass }, children);
};
export default Tag;
//# sourceMappingURL=index.js.map