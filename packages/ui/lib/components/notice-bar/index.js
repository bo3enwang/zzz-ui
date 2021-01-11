import React, { useState, useRef, useEffect } from "react";
import { View } from "@tarojs/components";
import Taro, { useDidShow, useReady } from "@tarojs/taro";
import { getRect } from "../../helps/utils";
import Icon from "../icon";
const NoticeBar = ({ children, speed = 50, scrollable = true, delay = 1, }) => {
    const contentRef = useRef();
    const wrapRef = useRef();
    const [timer, setTimer] = useState();
    const [resetAnimation, setResetAnimation] = useState();
    const [animationData, setAnimationData] = useState();
    // const [animation, setAnimation] = useState<any>();
    let animation;
    let info;
    useDidShow(() => { });
    useEffect(() => {
        setResetAnimation(Taro.createAnimation({
            duration: 0,
            timingFunction: "linear",
        }));
    }, []);
    useReady(() => {
        Promise.all([getRect(`#${contentRef.current.uid}`), getRect(`#${wrapRef.current.uid}`)]).then((rects) => {
            const [contentRect, wrapRect] = rects;
            if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width) {
                return;
            }
            if (scrollable && wrapRect.width < contentRect.width) {
                const duration = (contentRect.width / speed) * 1000;
                info = { wrapWidth: wrapRect.width, contentWidth: contentRect.width, duration };
                animation = Taro.createAnimation({
                    duration,
                    timingFunction: "linear",
                    delay,
                });
                scroll();
            }
        });
    });
    const scroll = () => {
        timer && clearTimeout(timer);
        setTimer(null);
        setAnimationData(resetAnimation.translateX(info.wrapWidth).step().export());
        Taro.createSelectorQuery()
            .selectViewport()
            .boundingClientRect()
            .exec(() => {
            setAnimationData(animation.translateX(-info.contentWidth).step().export());
        });
        setTimer(setTimeout(() => {
            scroll();
        }, info.duration));
    };
    return (React.createElement(View, { className: "z3-notice-bar" },
        React.createElement(View, { className: "z3-notice-bar__left-icon" },
            React.createElement(Icon, { type: "notification" })),
        React.createElement(View, { ref: wrapRef, className: "z3-notice-bar__wrap" },
            React.createElement(View, { ref: contentRef, className: "z3-notice-bar__content", animation: animationData }, children))));
};
export default NoticeBar;
//# sourceMappingURL=index.js.map