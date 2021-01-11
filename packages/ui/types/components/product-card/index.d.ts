import React from "react";
import { ColorProps } from "../base";
import { ViewProps } from "@tarojs/components/types/View";
interface TagProps {
    name: string;
    color: ColorProps | string;
}
interface ProductCardProps extends ViewProps {
    /**
     * 封面
     */
    cover: string;
    /**
     * 产品名
     */
    name: React.ReactNode;
    /**
     * 标签
     */
    tags?: TagProps[];
    /**
     * 简介
     */
    intro?: React.ReactNode;
    /**
     * 价格
     */
    price: React.ReactNode;
}
declare const ProductCard: React.FC<ProductCardProps>;
export default ProductCard;
