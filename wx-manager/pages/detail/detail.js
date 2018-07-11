// pages/common/detail.js

const app = getApp();
var number = 1;
const digital = require("../../utils/data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    goodsName:"",
    buynumber:"",
    className:"",
    price:"",
    detail:"",
    imglist:[],
    goodsID:null,
    indicatorDots:true,
    autoplay:true,
    interval: 2000,
    duration: 1000,
    sc:true,
    num:1,
    hasMask:false,
    hasBadge:false,
    i:"",
    j:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

    var j=options.id;//在goodsList里面的index
    if(options.i){
      var i = options.i
    }else{
      var i = 0;
    }


// 从产品分类里跳转到详情页
    if (options.goodsID) {
      var goodsID = options.goodsID
    } else {
      var goodsID = null;
    }
    var list = digital.goodsList()
    var length = list.length;
    for (var i = 0; i < length;i++){
      if(list[i].goodsID==goodsID){
        var j = i;
      }else{
        console.log("没找到")
      }
    }


    
    
    this.setData({
      buynumber: digital.goodsList()[j].buynumber,
      className: digital.goodsList()[j].className,
      detail: digital.goodsList()[j].detail,
      goodsName: digital.goodsList()[j].goodsName,
      price: digital.goodsList()[j].price,
      imglist: digital.goodsList()[j].imglist, 
      i:i,
      j:j
    })
  },
  // 收藏按钮
  shoucang:function(){
    if(this.data.sc){
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration: 1000
      })
    }else{
      wx.showToast({
        title: '取消收藏',
        icon: 'success',
        duration: 1000
      })
    }
    
    this.setData({
      sc:!this.data.sc
    })
  },
//  加
  add:function(){
     number+=1;
    console.log(number)
    this.setData({
      num:number
    })

    
  },
  // 减
  less:function(){
    if(number>1){
      number--
    }
    this.setData({
      num: number
    })

    
  },

  // 加入购物车
  join:function(){
    this.setData({
      hasMask:true,
    })
  },

  // 弹出层加入购物车
  confirm:function(){
    wx.showToast({
      title: '成功加入购物车',
      icon: 'success',
      duration: 1000
    })


    this.setData({
      hasMask: false,
      hasBadge:true

    })
  },
  // 弹出层关闭按钮
  del:function(){
    this.setData({
      hasMask: false,
    })
  },
  buy:function(){
    console.log(this.data.goodsID)
    wx.navigateTo({
      url: `../confirm/confirm?j=${this.data.j}`,
      success:function(res){
        console.log(res)
      }
    })
  }


})