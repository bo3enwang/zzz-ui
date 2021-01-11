import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";

type NormalSizeProps = "default" | "small" | "large";

interface SpaceProps {
  size?: NormalSizeProps;
}

const Space = ({ size = "default" }: SpaceProps) => {
  const rootClass = classNames("space", size);
  return <View className={rootClass}> </View>;
};

export default Space;
