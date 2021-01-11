import React, { useState } from "react";
import { View, Input, Text } from "@tarojs/components";
import Icon from "../icon";

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

const SearchBar: React.FC<SearchBarProps> = ({
  value = "",
  actionName = "搜索",
  placeholder = "搜索",
  onChange,
}) => {
  const fontSize = 14;
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const placeholderWrapStyle: React.CSSProperties = {};
  const actionStyle: React.CSSProperties = {};

  const clearIconStyle: React.CSSProperties = { display: "flex" };
  const placeholderStyle: React.CSSProperties = { visibility: "hidden" };
  if (!value?.length) {
    clearIconStyle.display = "none";
    placeholderStyle.visibility = "visible";
  }
  if (isFocus || (!isFocus && value)) {
    actionStyle.opacity = 1;
    actionStyle.marginRight = `0`;
    placeholderWrapStyle.flexGrow = 0;
  } else if (!isFocus && !value) {
    placeholderWrapStyle.flexGrow = 1;
    actionStyle.opacity = 0;
    actionStyle.marginRight = `-${(actionName!.length + 1) * fontSize + fontSize / 2 + 10}px`;
  }

  return (
    <View className="z3-search-bar">
      <View className="z3-search-bar__content">
        <View className="z3-search-bar__placeholder-wrap">
          <Icon type="search"></Icon>
          <Text className="z3-search-bar__placeholder" style={placeholderStyle}>
            {isFocus ? "" : placeholder}
          </Text>
        </View>
        <Input
          className="z3-search-bar__input"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={(e) => {
            if (onChange) {
              onChange(e.detail.value);
            }
          }}
        ></Input>
      </View>
      <View className="z3-search-bar__action" style={actionStyle} onClick={() => {}}>
        {actionName}
      </View>
    </View>
  );
};

export default SearchBar;
