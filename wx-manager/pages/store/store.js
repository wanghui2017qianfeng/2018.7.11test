// pages/store/store.js
const digital = require("../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[],
    name:"",
    shoucang:"收藏",
    i:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    var i = options.id
    this.setData({
      goodsList: digital.goodsList(),
      name: digital.storeList()[i].name,
      img: digital.storeList()[i].img,
      i:i
    })
  },


  shoucang:function(){
    if (this.data.shoucang =="收藏"){
      wx.showToast({
        title: '店铺收藏成功',
      })
      this.setData({
        shoucang: "已收藏"
      })
    }else if (this.data.shoucang == "已收藏") {
      wx.showToast({
        title: '取消收藏',
      })
      this.setData({
        shoucang: "收藏"
      })
    }
  },

  detail:function(e){
    var i = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../detail/detail?i=${this.data.i}&id=${i}`,
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