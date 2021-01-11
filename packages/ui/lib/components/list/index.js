import React from "react";
import { View } from "@tarojs/components";
import ListItem from "./list-item";
const List = ({ dataSource, renderItem, children, }) => {
    const isEmpty = !dataSource || dataSource.length == 0;
    return (React.createElement(View, { className: "z3-list" },
        children,
        dataSource && isEmpty ? (React.createElement(View, null, "\u7A7A")) : (React.createElement(View, null, renderItem && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.map((data) => {
            return renderItem(data);
        }))))));
};
List.Item = ListItem;
export default List;
//# sourceMappingURL=index.js.map