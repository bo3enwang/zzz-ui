import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
const Field = ({ title, children, extra, line, required }) => {
    return (React.createElement(View, { className: classNames("z3-form-field", { line }) },
        React.createElement(View, { className: classNames("z3-form-field__title", {
                ["z3-form-field__title-required"]: required,
            }) }, title),
        React.createElement(View, { className: "z3-form-field__content" }, children),
        React.createElement(View, { className: "z3-form-field__extra" }, extra)));
};
export default Field;
//# sourceMappingURL=field.js.map