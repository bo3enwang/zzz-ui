import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import Image from "../image";
import Tag from "../tag";
import Text from "../text";
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

const ProductCard: React.FC<ProductCardProps> = ({
  cover,
  name,
  intro,
  price,
  tags = [],
  className,
  ...rest
}) => {
  const rootClass = classNames("z3-product-card", className);

  return (
    <View className={rootClass} {...rest}>
      <View className="z3-product-card__cover">
        <Image src={cover}></Image>
        <View className="z3-product-card__cover__info">热销</View>
      </View>
      <View className="z3-product-card__info">
        <View className="z3-product-card__info-name">
          {tags.map((t) => {
            return (
              <Tag size="small" key={t.name} color={t.color}>
                {t.name}
              </Tag>
            );
          })}
          <Text bold>{name}</Text>
        </View>

        <Text size="sm" color="grey">
          {intro}
        </Text>
        <Text color="red" type="price">
          {price}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
