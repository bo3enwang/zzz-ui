import React, { useState, useEffect } from "react";
import { View, Picker } from "@tarojs/components";
import { cloneDeep, slice } from "lodash-es";
const Z3Picker = ({ mode, value, onChange, placeholder = "点击选择", options = [], }) => {
    const [columnInfo, setColumnInfo] = useState([]);
    const [range, setRange] = useState([]);
    const [pcikerValue, setPcikerValue] = useState();
    const [displayValue, setDisplayValue] = useState([]);
    const init = () => {
        if (mode == "multiSelector") {
            const newRange = cloneDeep(range);
            buileRange(newRange, options, 0);
            setRange(newRange);
            setColumnInfo(Array.from({ length: newRange.length }).fill(0));
            setPcikerValue([]);
        }
        else {
            setRange(options.map((e) => e.label));
            setPcikerValue(0);
        }
    };
    const updateRange = (columnChangeDetail) => {
        const { column, value: columnValue } = columnChangeDetail;
        columnInfo[column] = columnValue;
        const newValue = columnInfo.fill(0, column + 1);
        const newRange = [...slice(cloneDeep(range), 0, column + 1)];
        if (column === 0) {
            buileRange(newRange, options[columnValue].children, column + 1);
        }
        else {
            let currentOption = null;
            for (let i = 0; i < column; i++) {
                if (currentOption && currentOption.children) {
                    currentOption = currentOption.children[columnInfo[i]];
                }
                else {
                    currentOption = options[columnInfo[i]];
                }
            }
            if (currentOption && currentOption.children && currentOption.children[columnValue]) {
                buileRange(newRange, currentOption.children[columnValue].children, column + 1);
            }
        }
        setRange(newRange);
        setColumnInfo(newValue);
        setPcikerValue(newValue);
    };
    const buileRange = (newRange, children = [], level) => {
        if (children && children.length) {
            newRange[level] = children.map((e) => e.label);
            if (children[0] && children[0].children && children[0].children.length) {
                buileRange(newRange, children[0].children, level + 1);
            }
        }
    };
    const hanldeChange = (_value) => {
        if (mode == "multiSelector") {
            let currentOption = options[_value[0]];
            const realValue = [currentOption];
            for (let i = 1; i < _value.length; i++) {
                const { children = [] } = currentOption;
                if (children && children[_value[i]]) {
                    realValue.push(children[_value[i]]);
                    currentOption = children[_value[i]];
                }
            }
            setDisplayValue(realValue);
            if (onChange) {
                onChange(realValue);
            }
        }
        else if (mode == "selector") {
            const realValue = options[_value];
            setDisplayValue(realValue);
            if (onChange) {
                onChange(realValue);
            }
        }
        else {
            if (onChange) {
                onChange(_value);
            }
        }
    };
    const getDisplayLabel = () => {
        if (mode == "multiSelector") {
            if (displayValue && displayValue instanceof Array && displayValue.length) {
                return displayValue.map((dv) => dv.label).join("-");
            }
        }
        else if (mode == "selector") {
            const v = displayValue;
            if (v && v.label) {
                return v.label;
            }
        }
        return null;
    };
    useEffect(() => {
        setPcikerValue(value);
    }, [value]);
    useEffect(() => {
        init();
    }, []);
    return (React.createElement(Picker, { className: "z3-picker", mode: mode, onColumnChange: (e) => {
            // TARO FIXED 有时候会失效
            updateRange(e.detail);
        }, value: pcikerValue, onChange: (e) => {
            console.log(e);
            setPcikerValue(e.detail.value);
            hanldeChange(e.detail.value);
        }, range: range },
        React.createElement(View, { className: "z3-picker-text" }, getDisplayLabel() ? getDisplayLabel() : placeholder)));
};
export default Z3Picker;
//# sourceMappingURL=index.js.map