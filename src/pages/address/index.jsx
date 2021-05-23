import { Component, useState } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem, AtFloatLayout } from "taro-ui"
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import { AtTabs, AtTabsPane } from 'taro-ui'
const tabList = [
  { title: '寄件人' },
  { title: '收件人' }
]
const Address = () => {
  const [cur, setcur] = useState(0)
  return (
    <View className='Address'>
      <AtTabs current={cur} tabList={tabList} onClick={(e) => {
        console.log(e);
        setcur(e)
      }}>
        <AtTabsPane current={cur} index={0} >
          <View className="add-inner-1" >

          </View>
        </AtTabsPane>
        <AtTabsPane current={cur} index={1}>
          <View className="add-inner-2"></View>
        </AtTabsPane>
      </AtTabs>
    </View>

  )
}
export default Address
