// pages/address/address.js

var List=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
      storage:[],
      username:"",
      phone:"",
      address:"",
      city:"",
   
      isOpt:false
  },


  onLoad: function (options) {
    // wx.getStorage({
    //   key: 'storage',
    //   success: function (res) {
    //     console.log(res.data)
    //     List.push(res.data)
    //   }
    // })
    
    var country = decodeURI(options.city)
    List.push(options)
    
    
    // this.setData({
    //   storage:List
    // })
    // console.log(storage)

    if(options.username){
      this.setData({
        username: options.username,
        phone: options.phone,
        address: options.address,
        city: country
      })
    
    }
  },

  address:function(){
    console.log("1111"+this)
    var that = this
    wx.chooseAddress({
      success: function (res) {
        console.log("2222"+that)
        var add = res.provinceName + res.cityName;
        console.log(add)
        that.setData({
          username: res.userName,
          phone: res.telNumber,
          address: res.countyName,
          city: add
        })
      }
    })
  },

  add:function(){

    // wx.setStorageSync('storage', this.data.storage)

    wx.navigateTo({
      url: '../add_address/add_address',
    })
  },

  remove:function(){
    
  },
  edit:function(){
    wx.navigateTo({
      url: '../add_address/add_address',
      success:(res)=>{
        console.log(res)
      }
    })
  },
  moren: function () {
    var isOpt = this.data.isOpt;
    this.setData({
      isOpt: !isOpt
    })

    wx.reLaunch({
      url: `../confirm/confirm?username=${this.data.username}&phone=${this.data.phone}&address=${this.data.address}&city=${this.data.city}`,
      success:(res)=>{
        console.log(res)
      }
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