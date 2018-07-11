// pages/product/product.js
const digital = require("../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wHeight:"",
    currentTab:0,
    chenshanList: digital.chenshanList(),
    lifuList: digital.lifuList(),
    mianfuList: digital.mianfuList(),
    weiyiList: digital.weiyiList(),
    duanwaitaoList: digital.duanwaitaoList(),
    nanzhuangList: digital.nanzhuangList(),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.getSystemInfo({
        success:(res)=> {
          console.log(res)
          this.setData({
            wHeight:1.2*res.windowHeight+"px",
          })
          console.log(this.data.wHeight)
        },
      })

    console.log(options)
    var current = options.current;
    this.setData({
      currentTab:current
    })


  },
  
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  swiperTab:function(e){
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
 
  //点击切换
  clickTab: function (e) {
    console.log(e.target.dataset.current)
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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