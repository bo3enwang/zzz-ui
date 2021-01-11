import React from "react";
import { SwiperProps } from "@tarojs/components/types/Swiper";
interface SwiperItemProps {
    img: string;
}
declare type TaroSwperProps = Pick<SwiperProps, "indicatorDots" | "indicatorColor" | "indicatorActiveColor" | "autoplay" | "current" | "currentItemId" | "interval" | "duration" | "circular" | "vertical" | "previousMargin" | "nextMargin" | "snapToEdge" | "displayMultipleItems" | "skipHiddenItemLayout" | "easingFunction" | "onChange" | "onTransition" | "onAnimationFinish" | "disableTouch">;
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
declare const Z3Swiper: React.FC<Z3SwiperProps>;
export default Z3Swiper;
