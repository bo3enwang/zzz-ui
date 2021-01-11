import React from "react";
import { View } from "@tarojs/components";
import Icon from "../icon";

interface ListItemProps {
  /**
   * 图片
   */
  thumb?: React.ReactNode;

  /**
   * 标题
   */
  title?: React.ReactNode;

  /**
   * 额外元素
   */
  extra?: React.ReactNode;

  /**
   * 箭头
   */
  arrow?: "right" | "top" | "bottom";

  /**
   * 垂直对齐方式
   */
  align?: "top" | "middle" | "bottom";

  /**
   * 备注
   */
  note?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ thumb, title, extra, note, arrow }) => {
  const iconType: any = {
    right: "arrow-right",
    top: "arrow-up-bold",
    bottom: "arrow-down",
  };

  return (
    <View className="z3-list-item">
      {thumb && <View className="z3-list-item__thumb">{thumb}</View>}
      <View className="z3-list-item__content">
        <View className="z3-list-item__title">{title}</View>
        {note && <View className="z3-list-item__note">{note}</View>}
      </View>
      {extra && <View className="z3-list-item__extra">{extra}</View>}
      {arrow && (
        <View className="z3-list-item__arrow">
          <Icon type={iconType[arrow]}></Icon>
        </View>
      )}
    </View>
  );
};

export default ListItem;
