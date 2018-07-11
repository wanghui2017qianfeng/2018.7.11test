// pages/confirm/confirm.js

var digital = require('../../utils/data.js')
const app = getApp()
var number = 0;
var price = 0;
Page({

  data: {
    username:"wwpp",
    phone:"18888888888",
    address:"美丽的青岛美丽的青岛美丽的青岛",
    buylist:[],
    allprice:0,
    allnum:0,
    isOpt:false
    
    
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  
  onLoad: function (options) {
    console.log(options)
    if(options.username){
      this.setData({
        username: options.username,
        address: options.city + options.address,
        phone: options.phone
      })
    }
    
    // 从购物车选择后跳转到订单页  列表
    if(options.list){
      var array = options.list;//3
      console.log(array)
      var list1 = digital.storeList()[0].goodsList
      var buylist = []
      for (var i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
          var j = array[i];
          console.log(j)
          buylist.push(list1[array[i]])
        }
      }
      console.log(buylist)
      for (var i = 0; i < buylist.length; i++) {
        number += buylist[i].number * 1;
        price += buylist[i].number * 1 * buylist[i].price
      }  
      this.setData({
        buylist: buylist,
        allnum: number,
        allprice: price.toFixed(2)
      })

    }else if(options.j){
      // 从商品详情页直接立即购买
      // var i=options.i;
      var j = options.j;

      var that = this
      var list=[];
      list.push(digital.goodsList()[j]);
      console.log(list)
      this.setData({
        buylist:list
      })
      var buylist = this.data.buylist;
      console.log(buylist.number)
     
      
      for (var i = 0; i < buylist.length; i++) {
        number += buylist[i].number * 1;
        price += buylist[i].number * 1 * buylist[i].price
      }
      that.setData({
        allnum: number,
        allprice: price.toFixed(2)
      })
    }

      var that = this
      wx.login({
        success: function(res) {
          console.log(res.code)
          that.getOpenId(res.code)
        }
      });

      console.log(this.data.buylist)

      // 获取商品缓存
      // try {
      //   var buylist = wx.getStorageSync('confirmList')
      //   if (buylist) {
      //     // console.log("value", value)
      //     for (var i = 0; i < buylist.length; i++) {
      //       number += buylist[i].number * 1;
      //       price += buylist[i].number * 1 * buylist[i].price
      //     }
      //     this.setData({
      //       allnum: number,
      //       allprice: price.toFixed(2),
      //       buylist: buylist
      //     })
          
      //   }
      // } catch (e) {
      //   console.log("get error")
      // }

      // 存储数据
      // try {
      //   wx.setStorageSync('confirmList', this.data.buylist)
      // } catch (e) {
      //   console.log("set error")
      // }


      // wx.clearStorageSync("confirmList")

      
      
  },


  getOpenId: function (code) {
    var that = this;
     wx.request({
       url: "https://api.weixin.qq.com/sns/jscode2session?appid=wx176f240c5eb73f&secret=b6c1442bfeb1cbcd4a70a46b6a97af8c&js_code=" + code + "&grant_type=authorization_code",
      data: {},
       method: 'GET',
       success: function (res) {
         that.generateOrder(res.data.openid)
       },
      fail: function () {
         // fail
       },
       complete: function () {
         // complete
       }
     })
   },
   /**生成商户订单 */
   generateOrder: function (openid) {
   },
// 点击默认地址
  moren:function(){
    var isOpt=this.data.isOpt;
    this.setData({
      isOpt:!isOpt
    })
  },






})