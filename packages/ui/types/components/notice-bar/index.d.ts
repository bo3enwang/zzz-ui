import React from "react";
interface NoticeBarProps {
    /**
     * 滚动速率
     */
    speed?: number;
    /**
     * 是否滚动
     */
    scrollable?: boolean;
    /**
     * 延迟
     */
    delay?: number;
    /**
     * 子元素
     */
    children?: React.ReactNode;
}
declare const NoticeBar: React.FC<NoticeBarProps>;
export default NoticeBar;
