import React from "react";
import { View } from "@tarojs/components";
import ListItem from "./list-item";

interface ListProps {
  /**
   * 数据源
   */
  dataSource?: any[];

  /**
   * 数据源渲染方法
   */
  renderItem?: (item) => React.ReactNode;

  /**
   * 子元素
   */
  children?: React.ReactNode;
}

const List: React.FC<ListProps> & { Item: typeof ListItem } = ({
  dataSource,
  renderItem,
  children,
}: ListProps) => {
  const isEmpty = !dataSource || dataSource.length == 0;

  return (
    <View className="z3-list">
      {children}
      {dataSource && isEmpty ? (
        <View>空</View>
      ) : (
        <View>
          {renderItem &&
            dataSource?.map((data) => {
              return renderItem(data);
            })}
        </View>
      )}
    </View>
  );
};

List.Item = ListItem;

export default List;
