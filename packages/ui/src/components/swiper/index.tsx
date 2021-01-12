import React, { useState } from "react";

import { SwiperProps } from "@tarojs/components/types/Swiper";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { classNames } from "../../helps/utils";

interface SwiperItemProps {
  img: string;
  onClick?: () => void;
}

type TaroSwperProps = Pick<
  SwiperProps,
  | "indicatorDots"
  | "indicatorColor"
  | "indicatorActiveColor"
  | "autoplay"
  | "current"
  | "currentItemId"
  | "interval"
  | "duration"
  | "circular"
  | "vertical"
  | "previousMargin"
  | "nextMargin"
  | "snapToEdge"
  | "displayMultipleItems"
  | "skipHiddenItemLayout"
  | "easingFunction"
  | "onChange"
  | "onTransition"
  | "onAnimationFinish"
  | "disableTouch"
>;

interface Z3SwiperProps extends TaroSwperProps {
  /**
   * 类型
   */
  type?: "screen" | "card";
  /**
   * 轮播图列表
   */
  itemList: SwiperItemProps[];
}

const Z3Swiper: React.FC<Z3SwiperProps> = ({
  itemList,
  autoplay = true,
  type = "screen",
  onChange,
  indicatorColor = "#8799a3",
  indicatorActiveColor = "#0081ff",
  ...rest
}) => {
  const [current, setCurrent] = useState(0);

  return (
    <Swiper
      circular
      className={classNames("z3-swiper", "square-dot", {
        "screen-swiper": type == "screen",
        "card-swiper": type == "card",
      })}
      autoplay={autoplay}
      onChange={(e) => {
        setCurrent(e.detail.current);
        if (onChange) {
          onChange(e);
        }
      }}
      indicatorColor={indicatorColor}
      indicatorActiveColor={indicatorActiveColor}
      {...rest}
    >
      {itemList.map((item, index) => {
        return (
          <SwiperItem
            className={classNames("z3-swiper-item", {
              cur: index === current,
            })}
            key={index}
            onClick={() => {
              if (item.onClick) {
                item.onClick();
              }
            }}
          >
            <View className="z3-swiper-item__content">
              <Image src={item.img} mode="aspectFill"></Image>
            </View>
          </SwiperItem>
        );
      })}
    </Swiper>
  );
};

export default Z3Swiper;
