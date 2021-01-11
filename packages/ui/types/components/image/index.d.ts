/// <reference types="react" />
import { ImageProps } from "@tarojs/components/types/Image";
interface Z3ImageProps {
    src: string;
    className?: string;
    width?: number;
    height?: number;
    mode?: keyof ImageProps.mode;
    round?: boolean;
}
declare const Z3Image: ({ src, className, height, width, mode, round }: Z3ImageProps) => JSX.Element;
export default Z3Image;
