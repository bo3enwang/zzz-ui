import React from "react";
import { View } from "@tarojs/components";
const Step = ({ title, icon }) => {
    return (React.createElement(View, { className: "z3-steps__item" },
        icon,
        title));
};
const Steps = ({ children }) => {
    return React.createElement(View, { className: "z3-steps" }, children);
};
Steps.Step = Step;
export default Steps;
//# sourceMappingURL=index.js.map