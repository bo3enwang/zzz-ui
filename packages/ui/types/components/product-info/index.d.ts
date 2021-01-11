import React from "react";
import { ColorProps } from "../base";
interface TagProps {
    name: string;
    color: ColorProps | string;
}
interface ProductInfoProps {
    /**
     * 产品id
     */
    id: string;
    /**
     * 是否可选中
     */
    checkable?: boolean;
    /**
     * check 回调
     */
    onCheck?: (e: any) => void;
    /**
     * 封面
     */
    cover: string;
    /**
     * 产品名
     */
    name: React.ReactNode;
    /**
     * 产品标签
     */
    tags?: TagProps[];
    /**
     * 简介
     */
    intro?: React.ReactNode;
    /**
     * 价格
     */
    price?: React.ReactNode;
    /**
     * 数量
     */
    amount?: number;
    /**
     * 数量变化时回调
     */
    onChangeAmount?: (amout?: number) => void;
    /**
     * sku信息
     */
    sku?: string;
}
declare const ProductInfo: React.FC<ProductInfoProps>;
export default ProductInfo;
