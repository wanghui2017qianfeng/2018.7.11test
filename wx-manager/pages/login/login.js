// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wHeight:"",
    username:"",
    password:""
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.getSystemInfo({
        success: (res) =>{
         
          this.setData({
            wHeight: res.windowHeight+"px"
          })
        },
      })
  },

  bindUser:function(e){
      console.log(e.detail.value)
      this.setData({
        username:e.detail.value
      })
  },
  bindPass:function(e){
    console.log(e.detail.value)
    this.setData({
      password: e.detail.value
    })
  },
  bind:function(){

    if(this.data.username=="" || this.data.password==""){
      wx.showModal({
        title: '提示',
        content: '用户名或密码不能为空'
      })
    }else{
      wx.showToast({
        title: '绑定成功',
      })

      wx.switchTab({
        url: '../index/index',
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