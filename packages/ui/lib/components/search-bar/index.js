import React, { useState } from "react";
import { View, Input, Text } from "@tarojs/components";
import Icon from "../icon";
const SearchBar = ({ value = "", actionName = "搜索", placeholder = "搜索", onChange, }) => {
    const fontSize = 14;
    const [isFocus, setIsFocus] = useState(false);
    const handleFocus = () => {
        setIsFocus(true);
    };
    const handleBlur = () => {
        setIsFocus(false);
    };
    const placeholderWrapStyle = {};
    const actionStyle = {};
    const clearIconStyle = { display: "flex" };
    const placeholderStyle = { visibility: "hidden" };
    if (!(value === null || value === void 0 ? void 0 : value.length)) {
        clearIconStyle.display = "none";
        placeholderStyle.visibility = "visible";
    }
    if (isFocus || (!isFocus && value)) {
        actionStyle.opacity = 1;
        actionStyle.marginRight = `0`;
        placeholderWrapStyle.flexGrow = 0;
    }
    else if (!isFocus && !value) {
        placeholderWrapStyle.flexGrow = 1;
        actionStyle.opacity = 0;
        actionStyle.marginRight = `-${(actionName.length + 1) * fontSize + fontSize / 2 + 10}px`;
    }
    return (React.createElement(View, { className: "z3-search-bar" },
        React.createElement(View, { className: "z3-search-bar__content" },
            React.createElement(View, { className: "z3-search-bar__placeholder-wrap" },
                React.createElement(Icon, { type: "search" }),
                React.createElement(Text, { className: "z3-search-bar__placeholder", style: placeholderStyle }, isFocus ? "" : placeholder)),
            React.createElement(Input, { className: "z3-search-bar__input", value: value, onFocus: handleFocus, onBlur: handleBlur, onInput: (e) => {
                    if (onChange) {
                        onChange(e.detail.value);
                    }
                } })),
        React.createElement(View, { className: "z3-search-bar__action", style: actionStyle, onClick: () => { } }, actionName)));
};
export default SearchBar;
//# sourceMappingURL=index.js.map