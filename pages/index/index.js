//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
        imgUrls: [
            "../../assets/index/swiper1.png",
            "../../assets/index/swiper2.png",
            "../../assets/index/swiper3.png",
            "../../assets/index/swiper4.png",
            "../../assets/index/swiper5.png"
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        feedImgUrls: [
            "https://goss.veer.com/creative/vcg/veer/800water/veer-163344986.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-167638952.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-152366992.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-163344754.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-161117844.jpg",
            "https://goss.veer.com/creative/vcg/veer/800water/veer-139998614.jpg"
        ],
      name:"xiaohuzi",
      age:21
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onTabItemTap(item) {
        var comm = require("../../common/common.js")
        comm.sayHello("xxxx")
    },
    // 请求后端
   reqService:function(){
     var req = require("../../common/request.js")
     var that = this
     var data = req.getInfo('http://localhost:8080/clothing/demo1')
     console.log(data)
   },
    // 页面下拉操作
    onPullDownRefresh: function () {
        console.log("页面下拉操作")
    },
    onShareAppMessage: function () {
        console.log("页面转发操作,必须等弹出框处理点击转发按钮才触发")
        wx.startPullDownRefresh()
    }
})
