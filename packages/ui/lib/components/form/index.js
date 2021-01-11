import React from "react";
import { View } from "@tarojs/components";
import Field from "./field";
const Form = ({ children }) => {
    return React.createElement(View, { className: "z3-form" }, children);
};
Form.Field = Field;
export default Form;
//# sourceMappingURL=index.js.map