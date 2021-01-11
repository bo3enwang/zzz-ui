import React from "react";
import { View, Checkbox } from "@tarojs/components";
import Text from "../text";
import Button from "../button";

interface SubmitBarProps {}

const SubmitBar = ({}: SubmitBarProps) => {
  return (
    <View className="z3-submit-bar">
      <View className="z3-submit-bar__checkbox">
        <Checkbox value="all">全选</Checkbox>
      </View>
      <View className="z3-submit-bar__total">
        <Text inline>合计:</Text>
        <Text color="red" inline type="price" size="xl">
          99.00
        </Text>
      </View>
      <View className="z3-submit-bar__button">
        <Button size="large" color="blue">
          提交订单
        </Button>
      </View>
    </View>
  );
};

export default SubmitBar;
