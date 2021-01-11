import React from "react";
import { Z3ButtonProps } from "../button";
interface IconProps {
    icon: React.ReactNode;
    text: React.ReactNode;
    onClick?: () => void;
}
declare const ProductActionIcon: ({ icon, text, onClick }: IconProps) => JSX.Element;
interface ButtonProps extends Z3ButtonProps {
}
declare const ProductActionButton: ({ children, onClick, ...rest }: ButtonProps) => JSX.Element;
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
declare const ProductAction: React.FC<ProductActionProps> & {
    Icon: typeof ProductActionIcon;
    Button: typeof ProductActionButton;
};
export default ProductAction;
