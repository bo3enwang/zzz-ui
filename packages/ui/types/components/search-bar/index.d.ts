import React from "react";
interface SearchBarProps {
    /**
     * 值
     */
    value?: string;
    /**
     * 右侧按钮文案
     */
    actionName?: string;
    /**
     * 占位符
     */
    placeholder?: string;
    /**
     * 值变化回调
     */
    onChange?: (val?: string) => void;
}
declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
