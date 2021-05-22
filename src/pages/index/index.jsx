import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
const images = [
  'https://tva1.sinaimg.cn/large/008i3skNly1gqr9pjnstqj304s04s3yh.jpg',
  '',
  'https://tva1.sinaimg.cn/large/008i3skNly1gqr9ptugovj304y052q2v.jpg'
]
const scle = 1
const block_icon = [
  "https://tva1.sinaimg.cn/large/008i3skNly1gqrajs16nej304c04cdfs.jpg",
  "https://tva1.sinaimg.cn/large/008i3skNly1gqrak459w8j304e0463yi.jpg"
]
const Index = () => {
  return (
    <View className='index'>
      <View className="index-bk"></View>
      <View className="index-inner">
        <View className="index-block1">
          {
            images.map(e => {
              if (e == "") {
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
                    backgroundImage: `url(${e})`,
                    backgroundSize: "cover",
                    margin: " 0 30px 0 30px "
                  }}></Image>
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
                    backgroundImage: `url(${e})`,
                    backgroundSize: "cover",
                    margin: " 0 30px 0 30px ",
                    border: 0
                  }}></Image>
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
