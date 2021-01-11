import React from "react";
import Field from "./field";
interface FormProps {
    children?: React.ReactNode;
    Field: typeof Field;
}
declare const Form: React.FC<FormProps> & {
    Field: React.FC;
};
export default Form;
