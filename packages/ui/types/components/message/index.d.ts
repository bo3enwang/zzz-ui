import React from "react";
interface MessageProps {
}
declare const Message: React.FC<MessageProps> & {
    show: (props: {
        title: string;
        type?: string;
    }) => void;
};
export default Message;
