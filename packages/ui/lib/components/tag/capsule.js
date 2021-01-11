import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
const Capsule = ({ children, type = "default" }) => {
    return React.createElement(View, { className: classNames("z3-capsule", { [type]: !!type }) }, children);
};
export default Capsule;
//# sourceMappingURL=capsule.js.map