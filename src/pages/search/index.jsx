import { Component, useState } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import { AtSearchBar } from 'taro-ui'
import Taro from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
const tabList = [
  { title: '寄(0)' },
  { title: '取(1)' }
]
const Search = () => {
  const [cur, setcur] = useState(0)
  return (
    <View className='search'>
      <View className="search-block">
        <View className="search-input">
          <AtSearchBar
            placeholder="请输入快递姓名/电话/运单号"
          />
        </View>
        <View className="scanf" onClick={
          () => {
            Taro.scanCode({
              success: (res) => {
                console.log(res)
              }
            })
          }
        }></View>
      </View>
      <AtTabs current={cur} tabList={tabList} onClick={(e) => {
        console.log(e);
        setcur(e)
      }}>
        <AtTabsPane current={cur} index={0} >
          <View className="tab-inner-1" >

          </View>
        </AtTabsPane>
        <AtTabsPane current={cur} index={1}>
          <View className="tab-inner-2"></View>
        </AtTabsPane>
      </AtTabs>

    </View >
  )
}
export default Search
