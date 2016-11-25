// This is our App Service.
//index.js
//获取应用实例
var app = getApp()

// This is our data.
var welcomeData = {
  motto: 'Hello',
  userInfo: {}
}

// Register a Page.
Page({
  data: welcomeData,
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  intoTap: function() {
    wx.navigateTo({
      url: 'component-pages/activity/main/main'
    })
  },
  onLoad: function () {
    // 页面初始化
    console.log('index.js---onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        motto: 'Welcome to DuoCai!'
      })
    })
  },
  onShow:function(){
    // 页面显示
    console.log('index.js---onShow')
  },
  onReady:function(){
    // 页面渲染完成
    console.log('index.js---onReady')
  },
  onHide:function(){
    // 页面隐藏
    console.log('index.js---onHide')
  },
  onUnload:function(){
    // 页面关闭
    console.log('index.js---onUnload')
  }
})
