import React from "react";
import { View } from "@tarojs/components";

interface StepProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  subTitle?: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ title, icon }) => {
  return (
    <View className="z3-steps__item">
      {icon}
      {title}
    </View>
  );
};

interface StepsProps {
  children?: React.ReactNode;
}

const Steps: React.FC<StepsProps> & { Step: typeof Step } = ({ children }) => {
  return <View className="z3-steps">{children}</View>;
};

Steps.Step = Step;

export default Steps;
