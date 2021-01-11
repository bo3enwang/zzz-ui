import React from "react";
import { View } from "@tarojs/components";

interface ModalActionsProps {
  children?: React.ReactNode;
}

const ModalActions = ({ children }: ModalActionsProps) => {
  return <View className="z3-modal-actions">{children}</View>;
};

export default ModalActions;
