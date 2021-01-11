import React from "react";
import { View, Checkbox } from "@tarojs/components";
import { ColorProps } from "../base";
import Image from "../image";
import Text from "../text";
import Tag from "../tag";
import InputNumber from "../input-number";

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

const ProductInfo: React.FC<ProductInfoProps> = ({
  id,
  cover,
  name,
  intro,
  tags = [],
  amount,
  checkable,
  onChangeAmount,
  sku,
  onCheck,
}) => {
  return (
    <View className="z3-product-info">
      {checkable && (
        <View className="z3-product-info__check">
          <Checkbox
            value={id}
            onChange={(e) => {
              if (onCheck) {
                onCheck(e);
              }
            }}
          ></Checkbox>
        </View>
      )}

      <View className="z3-product-info__thumb">
        <Image height={180} src={cover}></Image>
        <View className="z3-product-info__thumb-tags">
          {tags &&
            tags.map((t) => {
              return (
                <Tag key={t.name} color="red" size="small">
                  {t.name}
                </Tag>
              );
            })}
        </View>
      </View>
      <View className="z3-product-info__content">
        <View>
          <Text bold>{name}</Text>
          <Text size="sm" color="grey">
            {intro}
          </Text>
          {sku && (
            <View>
              <Tag size="small" color="gray">
                {sku}
              </Tag>
            </View>
          )}
        </View>
        <View className="z3-product-info__content__bottom">
          <View>
            <Text type="price" color="red" inline>
              99
            </Text>
            {/* <Text inline>x2</Text> */}
          </View>
          {onChangeAmount ? (
            <View>
              <InputNumber
                width={60}
                size="small"
                value={amount || 0}
                onChange={(v) => {
                  onChangeAmount(v);
                }}
              ></InputNumber>
            </View>
          ) : (
            <View>
              <Text>x{amount}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductInfo;
