import Taro from "@tarojs/taro";

export { default as classNames } from "classnames";

export function getData() {
  const data = { statusBar: 0, Custom: {}, CustomBar: 0 };
  const { statusBarHeight } = Taro.getSystemInfoSync();
  let capsule = Taro.getMenuButtonBoundingClientRect();
  if (capsule) {
    data.Custom = capsule;
    data.CustomBar = capsule.bottom + capsule.top - statusBarHeight;
  } else {
    data.CustomBar = statusBarHeight + 50;
  }
  return data;
}

export function getRect(selector: string) {
  return new Promise<any>((resolve) => {
    Taro.createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]));
  });
}

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
