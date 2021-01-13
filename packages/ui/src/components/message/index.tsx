import Taro from "@tarojs/taro";
import React, { useState } from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import { useUnmount, useMount } from "ahooks";

let _timer: any | null = null;

interface MessageProps {}

const Message: React.FC<MessageProps> & {
  show: (props: { title: string; type?: string }) => void;
} = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("info");

  useMount(() => {
    bindListener();
  });

  const bindListener = () => {
    Taro.eventCenter.on("message_show", (options) => {
      setTitle(options.title);
      setType(options.type);
      setShowMessage(true);
      _timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    });
  };

  useUnmount(() => {
    if (_timer) {
      clearTimeout();
    }
    _timer = null;
  });

  const rootCls = classnames(
    {
      "zc-message": true,
      "zc-message--show": showMessage,
      "zc-message--hidden": !showMessage,
    },
    `zc-message--${type}`,
  );

  return (
    <View className={rootCls}>
      <View className="zc-message__content" id="content">
        {title}
      </View>
    </View>
  );
};

Message.show = ({ title, type }: { title: string; type?: string }) => {
  Taro.eventCenter.trigger("message_show", { title, type });
};

export default Message;
