//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      "../../assets/index/swiper1.png",
      "../../assets/index/swiper2.png",
      "../../assets/index/swiper3.png",
      "../../assets/index/swiper4.png",
      "../../assets/index/swiper5.png"
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onTabItemTap(item) {
    var comm = require("../../common/common.js")
    comm.sayHello("xxxx")
  },
  // 页面下拉操作
  onPullDownRefresh: function () {
    console.log("页面下拉操作")
  },
  onShareAppMessage:function(){
    console.log("页面转发操作,必须等弹出框处理点击转发按钮才触发")
    wx.startPullDownRefresh()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  changeText: function (){
    this.setData({
      motto: "我的值改变了" + Date.now()
    },function(e){
      console.log("回调函数生效")
    });
  }
})
