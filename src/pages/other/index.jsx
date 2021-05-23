import { Component, useState } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem, AtFloatLayout } from "taro-ui"
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
const Other = () => {
  const [lock, setlock] = useState(true)
  const [show, setShow] = useState(false)
  const [showmodal, setshowmodal] = useState(false)
  const ctrpopup = () => setShow(true)
  const getClass = () => lock ? "lock-locked lock-default" : "lock-lock-off lock-default"
  const array = [1, 2, 3, 4]
  return (
    <View className='lock'>
      <View
        className={getClass()}
        onClick={() => {
          setshowmodal(true)
          setShow(false)
        }}
      ></View>
      <View className="lock-button" onClick={() => {
        setShow(true)
        setshowmodal(false)
      }
      }>开锁记录</View>
      <AtFloatLayout
        isOpened={show}
        title="开锁记录"
        onClose={() => setShow(false)}
        scrollY={true}
      >
        <View className="lock-year">
          <View className="lock-buttons">2021</View>
        </View>
        <View className="lock-list">
          {
            array.map(e => {
              return (
                <View className="lock-item">
                  <View className="lock-block1">
                    <View className="split"></View>
                    <View className="lock-font1" style={{ width: "200px" }}>05.15 星期六</View>
                    <View className="lock-font2">00:00:00</View>
                  </View>
                  <View style={{ marginLeft: "299px" }} className="lock-font-3">10:20:11</View>
                  <View style={{ marginLeft: "299px" }} className="lock-font-3">19:10:01</View>
                  <View className="hr"></View>
                </View>
              )
            })
          }
        </View>
      </AtFloatLayout>
      <AtModal isOpened={showmodal} onClose={() => setshowmodal(false)} >
        <View className="lock-modal">
          <View className="lock-modal-1">
            <Image onClick={() => setshowmodal(false)} className="img"></Image>
          </View>
          <View className="lock-modal-title">终端请求开锁</View>
          <View className="lock-modal-block">
            <View className="locl-modal-reject" onClick={() => setshowmodal(false)}>拒绝</View>
            <View className="locl-modal-resolve" onClick={() => {
              setshowmodal(false)
              setlock(false)
            }} >允许</View>
          </View>
        </View>
      </AtModal>
    </View>

  )
}
export default Other
