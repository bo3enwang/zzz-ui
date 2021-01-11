import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";

import HtmlToJson from "./utils/html2json";

interface RichTextProps {
  nodes?: string;
  language?: "html";
}

const RichText = ({ nodes, language }: RichTextProps) => {
  const [nodesData, setNodesData] = useState({});
  const [bindData, setBindData] = useState<any>({});

  const parseHtml = (html) => {
    const bindName = "wxParseData";

    //存放html节点转化后的json数据
    const transData = HtmlToJson.html2json(html, bindName);

    transData.view = {};
    transData.view.imagePadding = 0;

    setNodesData(transData.nodes);
    setBindData({
      [bindName]: transData,
    });
  };

  const parseNodes = (_nodes: any) => {
    if (typeof _nodes === "string") {
      // 初始为html富文本字符串
      parseHtml(_nodes);
    } else if (Array.isArray(_nodes)) {
      // html 富文本解析成节点数组
      setNodesData(_nodes);
    } else {
      // 其余为单个节点对象
      const _nodesData = [_nodes];
      setNodesData(_nodesData);
    }
  };

  useEffect(() => {
    if (nodes) {
      if (language === "html") {
        parseNodes(nodes);
      }
    }
  }, [language, nodes]);

  return (
    <View>
      {nodesData},{bindData}
    </View>
  );
};

export default RichText;
