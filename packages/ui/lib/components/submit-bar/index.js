import React from "react";
import { View, Checkbox } from "@tarojs/components";
import Text from "../text";
import Button from "../button";
const SubmitBar = ({}) => {
    return (React.createElement(View, { className: "z3-submit-bar" },
        React.createElement(View, { className: "z3-submit-bar__checkbox" },
            React.createElement(Checkbox, { value: "all" }, "\u5168\u9009")),
        React.createElement(View, { className: "z3-submit-bar__total" },
            React.createElement(Text, { inline: true }, "\u5408\u8BA1:"),
            React.createElement(Text, { color: "red", inline: true, type: "price", size: "xl" }, "99.00")),
        React.createElement(View, { className: "z3-submit-bar__button" },
            React.createElement(Button, { size: "large", color: "blue" }, "\u63D0\u4EA4\u8BA2\u5355"))));
};
export default SubmitBar;
//# sourceMappingURL=index.js.map