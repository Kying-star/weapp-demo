/*
 * @Author: your name
 * @Date: 2021-05-22 15:01:03
 * @LastEditTime: 2021-05-22 18:19:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/app.config.js
 */
export default {
    pages: [
        'pages/index/index',
        'pages/other/index',
        'pages/mine/index',
        'pages/temp/index',
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',

    },
    tabBar: {
        list: [{
                iconPath: "assets/icon/home-off.png",
                selectedIconPath: "assets/icon/home-on.png",
                pagePath: "pages/index/index",
                text: "首页"
            },
            {
                iconPath: "assets/icon/lock-off.png",
                selectedIconPath: "assets/icon/lock-on.png",
                pagePath: "pages/other/index",
                text: "开锁"
            },
            {
                iconPath: "assets/icon/temp-off.png",
                selectedIconPath: "assets/icon/temp-on.png",
                pagePath: "pages/temp/index",
                text: "调温"
            },
            {
                iconPath: "assets/icon/mine-off.png",
                selectedIconPath: "assets/icon/mine-on.png",
                pagePath: "pages/mine/index",
                text: "我的"
            }
        ]
    }
}