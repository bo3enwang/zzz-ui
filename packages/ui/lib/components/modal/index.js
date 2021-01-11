import React from "react";
import { View } from "@tarojs/components";
import { classNames } from "../../helps/utils";
import Icon from "../icon";
const Modal = ({ visible, handleClose, children, type = "modal", drawerSide = "left", }) => {
    const rootClass = classNames("z3-modal", `z3-modal-type-${type}`, `z3-drawer-side-${drawerSide}`, {
        show: visible,
    });
    console.log(rootClass);
    return (React.createElement(View, { className: rootClass },
        React.createElement(View, { className: "z3-modal__container" },
            React.createElement(View, { className: "z3-modal-close" },
                React.createElement(View, { className: "z3-modal-close-x", onClick: () => {
                        if (handleClose) {
                            handleClose();
                        }
                    } },
                    React.createElement(Icon, { type: "close" }))),
            children)));
};
export default Modal;
//# sourceMappingURL=index.js.map