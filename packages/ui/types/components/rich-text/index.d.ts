/// <reference types="react" />
interface RichTextProps {
    nodes?: string;
    language?: "html";
}
declare const RichText: ({ nodes, language }: RichTextProps) => JSX.Element;
export default RichText;
