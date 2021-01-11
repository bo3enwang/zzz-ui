import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { Image, View } from "@tarojs/components";
import Icon from "../icon";
import { classNames } from "../../helps/utils";
const Z3Image = ({ src, className, height, width, mode = "aspectFill", round }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    let imageMode = mode;
    if (!height) {
        imageMode = "widthFix";
    }
    let imageStyle = {};
    if (!loaded) {
        imageStyle = { width: "0px", height: "0px" };
    }
    return (React.createElement(View, { className: classNames("z3-image", { round }), style: {
            height: height && Taro.pxTransform(height),
            width: width && Taro.pxTransform(width),
        } },
        error && (React.createElement(View, { className: "z3-image__fail" },
            React.createElement(Icon, { type: "broken_image" }),
            React.createElement(View, null, "\u56FE\u7247\u52A0\u8F7D\u5931\u8D25"))),
        React.createElement(Image, { src: src, mode: imageMode, className: classNames(className, "z3-image__img", {
                loaded: loaded,
            }), style: imageStyle, onLoad: (e) => {
                console.log("加载成功", e);
                setTimeout(() => {
                    setLoaded(true);
                }, 100);
            }, onError: (e) => {
                console.log("加载失败", e);
                setError(true);
            } }),
        !loaded && !error && (React.createElement(View, { className: "z3-image__loading" },
            React.createElement(Icon, { type: "loading", spin: true })))));
};
export default Z3Image;
//# sourceMappingURL=index.js.map