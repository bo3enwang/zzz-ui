import React from "react";
interface ColProps {
    /**
     * Class
     */
    className?: string;
    /**
     * 子元素
     */
    children?: React.ReactNode;
    /**
     * Col占比 1~12
     */
    span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * flex属性
     */
    flex?: string;
}
declare const Col: ({ children, span, flex, className }: ColProps) => JSX.Element;
export default Col;
