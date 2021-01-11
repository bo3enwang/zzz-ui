import React from "react";
import { View } from "@tarojs/components";

interface ModalHeaderProps {
  children?: React.ReactNode;
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <View className="z3-modal-header">{children}</View>;
};

export default ModalHeader;
