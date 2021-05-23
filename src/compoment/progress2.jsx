import Taro from "@tarojs/taro";
import React from "react";
import { View, Canvas, Image } from "@tarojs/components";

import styles from "./styles.module.scss";
import { transform } from "lodash";
class CanvasProgress2 extends React.Component {
  static defaultProps = {
    style: {}, //容器的款式
    progress: 0.6, //进度 [0-1]
    backgroundColor: "#DDDDDD", //背景环色彩
    //lineColor: "#517CD6", //前景环色彩
    lineWidth: 5, //线宽
  };
  state = {
    wrapperId: "_progress_wrapper" + randomStr(),
    canvasId: "_progress_canvas" + randomStr(),
    canvas: null,
    ctx: null,
    width: 0,
    height: 0,
    imageUrl: "",
    off: true
  };

  componentDidMount() {
    console.log(this.props.off)
    this.setState({
      off: this.props.off
    })
    this.init();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.progress !== this.props.progress) {
      this.draw();
    }
  }

  init = async () => {
    const { wrapperId, canvasId } = this.state;
    const { width, height } = await getElementRect(wrapperId);
    const { canvas, ctx } = await getCanvas(canvasId);
    const dpr = Taro.getSystemInfoSync().pixelRatio;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    this.setState({ canvas, ctx, width, height }, this.draw);
  };

  draw = () => {
    const { progress, backgroundColor, lineWidth, lineColor } = this.props;
    const { canvas, ctx, width, height, off } = this.state;
    const radius = toFixed(0.5 * Math.min(width, height)) - lineWidth;
    const range = 2 * progress * Math.PI;
    const offsetRadian = -0.5 * Math.PI;

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.beginPath();
    // 1
    ctx.strokeStyle = backgroundColor;
    ctx.arc(toFixed(width / 2), toFixed(height / 2), radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    // 2
    ctx.beginPath();
    console.log(off);
    ctx.strokeStyle = "#BBBBBB";
    //ctx.strokeStyle = "#517CD6"
    ctx.arc(
      toFixed(width / 2),
      toFixed(height / 2),
      radius,
      offsetRadian,
      range + offsetRadian
    );
    ctx.stroke();
    ctx.closePath();

    const base64URL = canvas.toDataURL("image/png", 0.5);
    this.setState({ imageUrl: base64URL });
  };

  render() {
    const { style, children, off } = this.props;
    const { wrapperId, canvasId, imageUrl } = this.state;
    return (
      <View
        id={wrapperId}
        className={styles.container}
        style={{ width: "200px", height: "200px", ...style }}
      >
        <Canvas style={{
          height: "300px",
          transform: "translateX(-100px)"
        }} id={canvasId} type="2d" className={styles.canvas} />

        <View className={styles.content}>{children || ""}</View>
      </View>
    );
  }
}

// utils
const toFixed = (number = 0) => 0.01 * Math.floor(100 * number);

function randomStr(len = 16) {
  const string =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const l = string.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    const index = Math.floor((Math.random() * 100 * l) % l);
    str += string[index];
  }
  return str;
}

const getElementRect = async (eleId = "", delay = 200) => {
  return new Promise((resovle, reject) => {
    const t = setTimeout(() => {
      clearTimeout(t);

      Taro.createSelectorQuery()
        .select(`#${eleId}`)
        .boundingClientRect((rect) => {
          if (rect) {
            resovle(rect);
          } else {
            reject("获取不到元素");
          }
        })
        .exec();
    }, delay);
  });
};

const getCanvas = async (eleId = "", delay = 200) => {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => {
      clearTimeout(t);
      Taro.createSelectorQuery()
        .select(`#${eleId}`)
        .fields({ node: true })
        .exec((res) => {
          if (res && res[0] && res[0].node) {
            const canvas = res[0].node;
            const ctx = canvas.getContext("2d");
            resolve({ canvas, ctx });
          } else {
            reject("获取canvas失败");
          }
        });
    }, delay);
  });
};

export default CanvasProgress2;