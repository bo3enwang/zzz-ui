import React from "react";
import { View } from "@tarojs/components";

import Field from "./field";

interface FormProps {
  children?: React.ReactNode;
  Field: typeof Field;
}

const Form: React.FC<FormProps> & { Field: React.FC } = ({ children }: FormProps) => {
  return <View className="z3-form">{children}</View>;
};

Form.Field = Field;

export default Form;
