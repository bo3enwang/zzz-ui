import React, { CSSProperties } from "react";
import { View, StandardProps } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import RowContext from "./RowContext";

interface RowProps extends StandardProps {
  gutter?: number | [number, number];
  children?: React.ReactNode;
  style?: CSSProperties;
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
  align?: "top" | "middle" | "bottom";
  wrap?: boolean;
  className?: string;
}

const Row = ({ gutter, children, style, justify, wrap, align, className, ...rest }: RowProps) => {
  const getGutter = (): [number, number] => {
    const results: [number, number] = [0, 0];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
    normalizedGutter.forEach((g, index) => {
      results[index] = g || 0;
    });
    return results;
  };

  const gutters = getGutter();

  const rowStyle = {
    ...(gutters[0]! > 0
      ? {
          marginLeft: gutters[0]! / -2,
          marginRight: gutters[0]! / -2,
        }
      : {}),
    ...(gutters[1]! > 0
      ? {
          marginTop: gutters[1]! / -2,
          marginBottom: gutters[1]! / 2,
        }
      : {}),
    ...style,
  };

  const prefixCls = "z3-row";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-no-wrap`]: wrap === false,
      [`${prefixCls}-${justify}`]: justify,
      [`${prefixCls}-${align}`]: align,
    },
    className,
  );

  return (
    <RowContext.Provider value={{ gutter: gutters }}>
      <View {...rest} className={classes} style={rowStyle}>
        {children}
      </View>
    </RowContext.Provider>
  );
};

export default Row;
