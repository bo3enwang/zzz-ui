import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import Icon from "../icon";

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

const Modal: React.FC<ModalProps> = ({
  visible,
  handleClose,
  children,
  type = "modal",
  drawerSide = "left",
}) => {
  const rootClass = classNames(
    "z3-modal",
    `z3-modal-type-${type}`,
    `z3-drawer-side-${drawerSide}`,
    {
      show: visible,
    },
  );

  console.log(rootClass);
  return (
    <View className={rootClass}>
      <View className="z3-modal__container">
        <View className="z3-modal-close">
          <View
            className="z3-modal-close-x"
            onClick={() => {
              if (handleClose) {
                handleClose();
              }
            }}
          >
            <Icon type="close"></Icon>
          </View>
        </View>
        {children}
      </View>
    </View>
  );
};

export default Modal;
