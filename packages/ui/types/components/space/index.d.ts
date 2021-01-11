/// <reference types="react" />
declare type NormalSizeProps = "default" | "small" | "large";
interface SpaceProps {
    size?: NormalSizeProps;
}
declare const Space: ({ size }: SpaceProps) => JSX.Element;
export default Space;
