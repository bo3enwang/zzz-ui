import React from "react";
import ListItem from "./list-item";
interface ListProps {
    /**
     * 数据源
     */
    dataSource?: any[];
    /**
     * 数据源渲染方法
     */
    renderItem?: (item: any) => React.ReactNode;
    /**
     * 子元素
     */
    children?: React.ReactNode;
}
declare const List: React.FC<ListProps> & {
    Item: typeof ListItem;
};
export default List;
