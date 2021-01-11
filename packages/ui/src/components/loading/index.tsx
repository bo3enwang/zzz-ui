import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import Icon from "../icon";
import Text from "../text";
import { classNames } from "../../helps/utils";
import { ColorProps } from "../base";

interface ModalOptionsProps {
  modalType?: "ring";
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

interface LoadingProps {
  loading?: boolean;
  /**
   * 加载类型
   */
  type?: "content" | "modal" | "line";

  /**
   * 背景颜色
   */
  bgColor?: ColorProps;
  /**
   * 防止闪烁默认 500ms
   */
  delay?: number;

  /**
   * 默认加载文字
   */
  title?: React.ReactNode;

  /**
   * Modal 模式的样式
   */
  modalOptions?: ModalOptionsProps;
}

const Loading: React.FC<LoadingProps> = ({
  loading,
  delay = 1000,
  type = "line",
  bgColor = "blue",
  title = "加载中",
  modalOptions = {},
}) => {
  const [show, setShow] = useState(false);

  const { description, modalType, icon } = modalOptions;

  useEffect(() => {
    if (loading) {
      setShow(true);
    } else {
      setTimeout(() => {
        setShow(false);
      }, delay);
    }
  }, [delay, loading]);

  const lineLoading = (
    <View className={classNames("z3-loading-line", `bg-${bgColor}`)}>
      <Text>
        <Icon type="loading" spin></Icon>
        {title}
      </Text>
    </View>
  );

  const modalLoading = (
    <View className="z3-loading load-modal">
      <View className="load-modal__container">
        {icon ? <View className="icon">{icon}</View> : <View className={modalType}></View>}
        <View className="load-modal__container__title">{title}</View>
        <View className="load-modal__container__description">{description}</View>
      </View>
    </View>
  );

  const types = {
    line: lineLoading,
    modal: modalLoading,
  };

  const rootClass = classNames("z3-loading");
  if (!show) {
    return <View></View>;
  }
  return <View className={rootClass}>{types[type]}</View>;
};

export default Loading;
