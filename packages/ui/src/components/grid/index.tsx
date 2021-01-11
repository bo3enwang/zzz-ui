import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";

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

const Grid: React.FC<GridProps> = ({ children, cols = 3, square }) => {
  return (
    <View
      className={classNames("z3-grid", `z3-grid-cols-${cols}`, {
        "z3-grid-square": square,
      })}
    >
      {children}
    </View>
  );
};

export default Grid;
