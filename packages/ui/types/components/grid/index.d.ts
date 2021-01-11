import React from "react";
interface GridProps {
    /**
     * 子元素
     */
    children?: React.ReactNode;
    /**
     * 列数
     */
    cols?: 1 | 2 | 3 | 4 | 5;
    /**
     * 正方形
     */
    square?: boolean;
}
declare const Grid: React.FC<GridProps>;
export default Grid;
