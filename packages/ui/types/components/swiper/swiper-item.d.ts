import React from "react";
import { SwiperItemProps } from "@tarojs/components/types/SwiperItem";
interface Z3SwiperItemProps extends SwiperItemProps {
    children?: React.ReactNode;
}
declare const Z3SwiperItem: ({ children, ...rest }: Z3SwiperItemProps) => JSX.Element;
export default Z3SwiperItem;
