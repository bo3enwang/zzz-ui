import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
const Grid = ({ children, cols = 3, square }) => {
    return (React.createElement(View, { className: classNames("z3-grid", `z3-grid-cols-${cols}`, {
            "z3-grid-square": square,
        }) }, children));
};
export default Grid;
//# sourceMappingURL=index.js.map