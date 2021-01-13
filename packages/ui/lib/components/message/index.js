import Taro from "@tarojs/taro";
import React, { useState } from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import { useUnmount, useMount } from "ahooks";
let _timer = null;
const Message = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("info");
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
    const rootCls = classnames({
        "zc-message": true,
        "zc-message--show": showMessage,
        "zc-message--hidden": !showMessage,
    }, `zc-message--${type}`);
    return (React.createElement(View, { className: rootCls },
        React.createElement(View, { className: "zc-message__content", id: "content" }, title)));
};
Message.show = ({ title, type }) => {
    Taro.eventCenter.trigger("message_show", { title, type });
};
export default Message;
//# sourceMappingURL=index.js.map