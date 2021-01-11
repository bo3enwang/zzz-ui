import React, { useState, useRef, useEffect } from "react";
import { View } from "@tarojs/components";
import Taro, { useDidShow, useReady } from "@tarojs/taro";
import { getRect } from "../../helps/utils";
import Icon from "../icon";

interface NoticeBarProps {
  /**
   * 滚动速率
   */
  speed?: number;

  /**
   * 是否滚动
   */
  scrollable?: boolean;

  /**
   * 延迟
   */
  delay?: number;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

const NoticeBar: React.FC<NoticeBarProps> = ({
  children,
  speed = 50,
  scrollable = true,
  delay = 1,
}) => {
  const contentRef = useRef<any>();
  const wrapRef = useRef<any>();

  const [timer, setTimer] = useState<any>();

  const [resetAnimation, setResetAnimation] = useState<any>();

  const [animationData, setAnimationData] = useState<any>();

  // const [animation, setAnimation] = useState<any>();

  let animation;
  let info;

  useDidShow(() => {});

  useEffect(() => {
    setResetAnimation(
      Taro.createAnimation({
        duration: 0,
        timingFunction: "linear",
      }),
    );
  }, []);

  useReady(() => {
    Promise.all([getRect(`#${contentRef.current.uid}`), getRect(`#${wrapRef.current.uid}`)]).then(
      (rects) => {
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
      },
    );
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
    setTimer(
      setTimeout(() => {
        scroll();
      }, info.duration),
    );
  };
  return (
    <View className="z3-notice-bar">
      <View className="z3-notice-bar__left-icon">
        <Icon type="notification"></Icon>
      </View>
      <View ref={wrapRef} className="z3-notice-bar__wrap">
        <View ref={contentRef} className="z3-notice-bar__content" animation={animationData}>
          {children}
        </View>
      </View>
    </View>
  );
};

export default NoticeBar;
