import { Component, useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { navigateTo } from "@tarojs/taro";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import Taro from '@tarojs/taro'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
const images = [
  {
    img: 'https://tva1.sinaimg.cn/large/008i3skNly1gqr9pjnstqj304s04s3yh.jpg',
    addr: "search"
  }
  ,
  {
    img: "",
  },
  {
    img: 'https://tva1.sinaimg.cn/large/008i3skNly1gqr9ptugovj304y052q2v.jpg',
    addr: "scanf"
  }

]
const scle = 1
const block_icon = [
  {
    img: "https://tva1.sinaimg.cn/large/008i3skNly1gqrajs16nej304c04cdfs.jpg",
    addr: "nearly"
  },
  {
    img: "https://tva1.sinaimg.cn/large/008i3skNly1gqrak459w8j304e0463yi.jpg",
    addr: "address"
  }

]
const Index = () => {
  const [show, setshow] = useState(false)
  return (

    <View className='index'>
      <AtModal isOpened={show} onClose={() => {
        setshow(false)
      }}>
        <View className="index-modal">
          <View className="index-modal-text">请扫描快递员提供的面单，填写运单信息。</View>
          <View className="index-modal-button" onClick={
            () => {
              setshow(false)
              Taro.scanCode({
                success: (res) => {
                  console.log(res)
                }
              })
            }
          }>确定</View>
        </View>
      </AtModal>
      <View className="index-bk"></View>
      <View className="index-inner">
        <View className="index-block1">
          {
            images.map(e => {
              if (e.img == "") {
                return (
                  <View className="index-span"></View>
                )
              }
              else {
                return (
                  <Image style={{
                    width: `${70 * scle}px`,
                    height: `${77 * scle}px`,
                    opacity: 1,
                    backgroundImage: `url(${e.img})`,
                    backgroundSize: "cover",
                    margin: " 0 30px 0 30px "
                  }}
                    onClick={() => {
                      if (e.addr == "search") {
                        navigateTo({
                          url: `/pages/${e.addr}/index`
                        })
                      } else {
                        setshow(true)
                      }

                    }}
                  ></Image>
                )
              }
            })
          }
        </View>
        <View className="index-block2">
          {
            block_icon.map(e => {
              return (
                <View className="index-bloack-inner">
                  <Image style={{
                    width: `${70 * scle}px`,
                    height: `${77 * scle}px`,
                    opacity: 1,
                    backgroundImage: `url(${e.img})`,
                    backgroundSize: "cover",
                    margin: " 0 30px 0 30px ",
                    border: 0
                  }}
                    onClick={
                      () => {
                        navigateTo({
                          url: `/pages/${e.addr}/index`
                        })
                      }
                    }
                  ></Image>
                </View>
              )
            })
          }
        </View>
        <View className="index-footer"></View>
      </View>
    </View>
  )
}
export default Index
