import React, { CSSProperties } from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import RowContext from "./RowContext";
import { ViewProps } from "@tarojs/components/types/View";

type ColSpanType = number | string;
type FlexType = number | "none" | "auto" | string;

interface ColProps extends ViewProps {
  /**
   * 水平排列方式
   */
  flex?: FlexType;
  /**
   * 栅格占位格数
   */
  span?: ColSpanType;

  /**
   * 样式
   */
  style?: CSSProperties;

  /**
   * 子元素
   */
  children?: React.ReactNode;
}

function parseFlex(flex: FlexType): string {
  if (typeof flex === "number") {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

const Col: React.FC<ColProps> = ({ style, flex, children, span, className, ...rest }) => {
  const { gutter, wrap } = React.useContext(RowContext);

  const prefixCls = "z3-col";

  let mergedStyle: React.CSSProperties = { ...style };
  if (gutter) {
    mergedStyle = {
      ...(gutter[0]! > 0
        ? {
            paddingLeft: `${gutter[0]! / 2}px`,
            paddingRight: `${gutter[0]! / 2}px`,
          }
        : {}),
      ...(gutter[1]! > 0
        ? {
            paddingTop: `${gutter[1]! / 2}px`,
            paddingBottom: `${gutter[1]! / 2}px`,
          }
        : {}),
      ...mergedStyle,
    };
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex);

    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (flex === "auto" && wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = "0px";
    }
  }

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${span}`]: span !== undefined,
      // [`${prefixCls}-order-${order}`]: order,
      // [`${prefixCls}-offset-${offset}`]: offset,
      // [`${prefixCls}-push-${push}`]: push,
      // [`${prefixCls}-pull-${pull}`]: pull,
    },
    className,
  );

  return (
    <View style={mergedStyle} className={classes} {...rest}>
      {children}
    </View>
  );
};

export default Col;
