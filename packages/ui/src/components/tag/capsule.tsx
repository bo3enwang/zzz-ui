import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";

interface CapsuleProps {
  children?: React.ReactNode;
  type?: "default" | "round" | "radius";
}

const Capsule = ({ children, type = "default" }: CapsuleProps) => {
  return <View className={classNames("z3-capsule", { [type]: !!type })}>{children}</View>;
};

export default Capsule;
