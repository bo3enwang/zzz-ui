import React from "react";
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
declare const ListItem: React.FC<ListItemProps>;
export default ListItem;
