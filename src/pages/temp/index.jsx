import { Component, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtSwitch, AtSlider } from 'taro-ui'
import CanvasProgress from "../../compoment/CanvasProgress"
import CanvasProgress2 from "../../compoment/progress2"
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
const Temp = () => {
  const [progress, setprogress] = useState(0.25);
  const [off, setoff] = useState(true)
  return (
    <View className='temp'>
      <Text className="temp-title">快递柜温度</Text>
      {
        !off ? <CanvasProgress
          style={{ width: "200rpx", height: "200rpx", marginTop: "50px" }}
          progress={progress}
        >
        </CanvasProgress>
          :
          <CanvasProgress2
            style={{ width: "200rpx", height: "200rpx", marginTop: "50px" }}
            progress={progress}
          >
          </CanvasProgress2>
      }
      <View className="round">
        <Text className="temp-font1" style={{
          color: `${off ? "#BBBBBB" : "#1348B3"}`
        }}>{progress * 20 - 10}℃
      </Text>
      </View>
      <AtSwitch onChange={(e) => setoff(!e)} />
      <View className="slider">
        <AtSlider disabled={off} min={-10} max={10} onChanging={(e) => { setprogress((e + 10) / 20) }}></AtSlider>
        <View className="temps">
          <View className="temp-num">-10℃</View>
          <View className="temp-num">0℃</View>
          <View className="temp-num">10℃</View>
        </View>
      </View>

    </View>
  )
}
export default Temp
