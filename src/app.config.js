/*
 * @Author: your name
 * @Date: 2021-05-22 15:01:03
 * @LastEditTime: 2021-05-22 15:20:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/app.config.js
 */
export default {
  pages: [
    'pages/index/index',
    'pages/other/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',

  },
  tabBar: {
    list: [
      {
      pagePath: "pages/index/index",
      text: "首页"
    },
    {
        pagePath: "pages/other/index",
        text: "其他"
    }
  ]
  }
}
