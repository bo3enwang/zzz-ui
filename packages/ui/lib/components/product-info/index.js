import React from "react";
import { View, Checkbox } from "@tarojs/components";
import Image from "../image";
import Text from "../text";
import Tag from "../tag";
import InputNumber from "../input-number";
const ProductInfo = ({ id, cover, name, intro, tags = [], amount, checkable, onChangeAmount, sku, onCheck, }) => {
    return (React.createElement(View, { className: "z3-product-info" },
        checkable && (React.createElement(View, { className: "z3-product-info__check" },
            React.createElement(Checkbox, { value: id, onChange: (e) => {
                    if (onCheck) {
                        onCheck(e);
                    }
                } }))),
        React.createElement(View, { className: "z3-product-info__thumb" },
            React.createElement(Image, { height: 180, src: cover }),
            React.createElement(View, { className: "z3-product-info__thumb-tags" }, tags &&
                tags.map((t) => {
                    return (React.createElement(Tag, { key: t.name, color: "red", size: "small" }, t.name));
                }))),
        React.createElement(View, { className: "z3-product-info__content" },
            React.createElement(View, null,
                React.createElement(Text, { bold: true }, name),
                React.createElement(Text, { size: "sm", color: "grey" }, intro),
                sku && (React.createElement(View, null,
                    React.createElement(Tag, { size: "small", color: "gray" }, sku)))),
            React.createElement(View, { className: "z3-product-info__content__bottom" },
                React.createElement(View, null,
                    React.createElement(Text, { type: "price", color: "red", inline: true }, "99")),
                onChangeAmount ? (React.createElement(View, null,
                    React.createElement(InputNumber, { width: 60, size: "small", value: amount || 0, onChange: (v) => {
                            onChangeAmount(v);
                        } }))) : (React.createElement(View, null,
                    React.createElement(Text, null,
                        "x",
                        amount)))))));
};
export default ProductInfo;
//# sourceMappingURL=index.js.map