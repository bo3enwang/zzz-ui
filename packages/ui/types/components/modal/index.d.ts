import React from "react";
interface ModalProps {
    /**
     * 显示
     */
    visible?: boolean;
    /**
     * 点击遮罩层或右上角叉或取消按钮的回调
     */
    handleClose?: () => void;
    /**
     * 模态框类型
     */
    type?: "modal" | "bottom" | "drawer";
    /**
     * 抽屉模式方向
     */
    drawerSide?: "left" | "right";
    /**
     * 子元素
     */
    children?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
