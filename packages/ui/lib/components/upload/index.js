import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import Icon from "../icon";
import Grid from "../grid";
const ImgUpload = ({}) => {
    const [imgList, setImgList] = useState([]);
    const choseImage = () => {
        Taro.chooseImage({
            count: 4,
            sizeType: ["compressed", "original"],
            sourceType: ["album"],
            success: (res) => {
                if (imgList.length != 0) {
                    setImgList(imgList.concat(res.tempFilePaths));
                }
                else {
                    setImgList(res.tempFilePaths);
                }
            },
        });
    };
    return (React.createElement(View, { className: "z3-upload" },
        React.createElement(Grid, { cols: 4 },
            imgList.map((img) => {
                return (React.createElement(View, { className: "z3-upload__item", key: img },
                    React.createElement(Image, { className: "z3-upload__item-image", src: img, mode: "aspectFill" })));
            }),
            React.createElement(View, { className: "z3-upload__operator", onClick: () => {
                    choseImage();
                } },
                React.createElement(Icon, { type: "upload" })))));
};
export default ImgUpload;
//# sourceMappingURL=index.js.map