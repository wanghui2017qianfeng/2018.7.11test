// pages/sort/sort.js
const digital = require("../../utils/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeList: digital.storeList(),
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  fenlei:function(){
    wx.navigateTo({
      url: '../product/product',
    })
  },
  join: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../store/store?id=${id}`,
    })
  },
  showAll: function (e) {
    var i = e.currentTarget.dataset.index;
    var list = this.data.storeList;
    var isFold = list[i].isFold;

    list[i].isFold = !isFold;
    this.setData({
      storeList:list
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