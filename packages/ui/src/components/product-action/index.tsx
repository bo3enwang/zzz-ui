import React from "react";
import { View } from "@tarojs/components";
import { Z3ButtonProps } from "../button";
import Button from "../button";

interface IconProps {
  icon: React.ReactNode;
  text: React.ReactNode;
  onClick?: () => void;
}

const ProductActionIcon = ({ icon, text, onClick }: IconProps) => {
  return (
    <View
      className="z3-product-action__icon"
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <View>{icon}</View>
      <View>{text}</View>
    </View>
  );
};

interface ButtonProps extends Z3ButtonProps {}

const ProductActionButton = ({ children, onClick, ...rest }: ButtonProps) => {
  return (
    <View
      className="z3-product-action__button"
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      <Button style={{ width: "100%" }} {...rest}>
        {children}
      </Button>
    </View>
  );
};

interface ProductActionProps {
  /**
   * 图标组
   */
  icons?: React.ReactNode[];

  /**
   * 按钮组
   */
  buttons?: React.ReactNode[];
}

const ProductAction: React.FC<ProductActionProps> & {
  Icon: typeof ProductActionIcon;
  Button: typeof ProductActionButton;
} = ({ icons, buttons }) => {
  return (
    <View className="z3-product-action">
      <View className="z3-product-action__icons">{icons}</View>
      <View className="z3-product-action__buttons">{buttons}</View>
    </View>
  );
};

ProductAction.Icon = ProductActionIcon;
ProductAction.Button = ProductActionButton;

export default ProductAction;
