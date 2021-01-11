import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { Image, View } from "@tarojs/components";
import { ImageProps } from "@tarojs/components/types/Image";
import Icon from "../icon";
import { classNames } from "../../helps/utils";

interface Z3ImageProps {
  src: string;
  className?: string;
  // style?: React.CSSProperties;
  width?: number;
  height?: number;
  mode?: keyof ImageProps.mode;
  round?: boolean;
}

const Z3Image = ({ src, className, height, width, mode = "aspectFill", round }: Z3ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  let imageMode: keyof ImageProps.mode = mode;

  if (!height) {
    imageMode = "widthFix";
  }

  let imageStyle: React.CSSProperties = {};

  if (!loaded) {
    imageStyle = { width: "0px", height: "0px" };
  }

  return (
    <View
      className={classNames("z3-image", { round })}
      style={{
        height: height && Taro.pxTransform(height),
        width: width && Taro.pxTransform(width),
      }}
    >
      {error && (
        <View className="z3-image__fail">
          <Icon type="broken_image"></Icon>
          <View>图片加载失败</View>
        </View>
      )}
      <Image
        src={src}
        mode={imageMode}
        className={classNames(className, "z3-image__img", {
          loaded: loaded,
        })}
        style={imageStyle}
        onLoad={(e) => {
          console.log("加载成功", e);
          setTimeout(() => {
            setLoaded(true);
          }, 100);
        }}
        onError={(e) => {
          console.log("加载失败", e);
          setError(true);
        }}
      ></Image>
      {!loaded && !error && (
        <View className="z3-image__loading">
          <Icon type="loading" spin></Icon>
        </View>
      )}
    </View>
  );
};

export default Z3Image;
