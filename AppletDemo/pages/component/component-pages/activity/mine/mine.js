// This is our App Service.

//获取应用实例
var app = getApp()

// This is our data.
var welcomeData = {
  userInfo: {},
  list: [
    {
      id: 'myProperty',
      icon: 'icon_my_property.png',
      name: '我的资产',
      url: 'myProperty'
    }, {
      id: 'tradeBill',
      icon: 'icon_trade_bill.png',
      name: '交易账单',
      url: 'tradeBill'
    }, {
      id: 'bindingBankCard',
      icon: 'icon_binding_bank_card.png',
      name: '绑定银行卡',
      url: 'bindingBankCard'
    }, {
      id: 'riskEvaluation',
      icon: 'icon_risk_evaluation.png',
      name: '风险评估',
      url: 'riskEvaluation'
    }, {
      id: 'collection',
      icon: 'icon_mine_collection.png',
      name: '收藏',
      url: 'collection'
    }, {
      id: 'help',
      icon: 'icon_help.png',
      name: '帮助',
      url: 'help'
    }, {
      id: 'versionName',
      icon: 'icon_help.png',
      name: '1.1.0',
      url: 'versionName'
    }
  ]
}

// Register a Page.
Page({
  data: welcomeData,

  // bindViewTap: function() {},

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('mine.js---onLoad')
  },
  onShow:function(){
    // 页面显示
    console.log('mine.js---onShow')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
      })
    })
    wx.request({
      url: 'https://w.duocaijr.com/cf/1.1/init.json',
      data: {},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log('success')
      },
      fail: function() {
        // fail
        console.log('fail')
      },
      complete: function() {
        // complete
        console.log('complete')
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
    console.log('mine.js---onReady')
  },
  onHide:function(){
    // 页面隐藏
    console.log('mine.js---onHide')
  },
  onUnload:function(){
    // 页面关闭
    console.log('mine.js---onUnload')
  }
})