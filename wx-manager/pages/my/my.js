// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc:"",
    name:"",
    phone:18852654258,
    address:"中国-青岛市市北区敦化路138号甲西王大厦1605",
    day:100,
    orderList:[
      { id: "1", color: "blue", icon:"icon-daizhifu",text:"待付款"},
      { id: "2", color: "red", icon: "icon-che", text: "待发货" },
      { id: "3", color: "green", icon: "icon-icon", text: "待收货" },
      { id: "4", color: "yellow", icon: "icon-daipingjia", text: "待评价" },
      
    ],
    threelist:[
      {name:"我的优惠劵",url:''},
      { name: "收货地址", url: '../address/address' },
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (res)=> {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success:( res)=> {
              console.log(res.userInfo)
              this.setData({
                imgSrc: res.userInfo.avatarUrl,
                name: res.userInfo.nickName,
              })
            }
          })
        }
      }
    })
  },
  lookOrder:function(){
    wx.navigateTo({
      url: '../order/order',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})