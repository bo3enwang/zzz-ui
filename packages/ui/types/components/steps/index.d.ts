import React from "react";
interface StepProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    subTitle?: React.ReactNode;
}
declare const Step: React.FC<StepProps>;
interface StepsProps {
    children?: React.ReactNode;
}
declare const Steps: React.FC<StepsProps> & {
    Step: typeof Step;
};
export default Steps;
