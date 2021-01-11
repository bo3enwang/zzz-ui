import React from "react";
import { View } from "@tarojs/components";

interface ModalContentProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const ModalContent = ({ children, style }: ModalContentProps) => {
  return (
    <View className="z3-modal-cotnent" style={{ ...style }}>
      {children}
    </View>
  );
};

export default ModalContent;
