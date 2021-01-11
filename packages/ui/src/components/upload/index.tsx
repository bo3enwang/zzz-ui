import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import Icon from "../icon";
import Grid from "../grid";

interface ImgUploadProps {}

const ImgUpload = ({}: ImgUploadProps) => {
  const [imgList, setImgList] = useState<any[]>([]);

  const choseImage = () => {
    Taro.chooseImage({
      count: 4,
      sizeType: ["compressed", "original"],
      sourceType: ["album"],
      success: (res) => {
        if (imgList.length != 0) {
          setImgList(imgList.concat(res.tempFilePaths));
        } else {
          setImgList(res.tempFilePaths);
        }
      },
    });
  };

  return (
    <View className="z3-upload">
      <Grid cols={4}>
        {imgList.map((img) => {
          return (
            <View className="z3-upload__item" key={img}>
              <Image className="z3-upload__item-image" src={img} mode="aspectFill"></Image>
            </View>
          );
        })}
        <View
          className="z3-upload__operator"
          onClick={() => {
            choseImage();
          }}
        >
          <Icon type="upload"></Icon>
        </View>
      </Grid>
    </View>
  );
};

export default ImgUpload;
