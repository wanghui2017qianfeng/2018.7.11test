// pages/shopcar/shopcar.js
var digital = require('../../utils/data.js')
const app=getApp()
var n=0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    carlist:[],
    allprice:0,
    isAll:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      carlist: digital.storeList()[0].goodsList
    })
  },
// 加
  add:function(e){
    var i = e.target.dataset.index;
    console.log(i)
    var goodsID = e.target.dataset.param;
    var list = this.data.carlist;
    list[i].number++;
    this.setData({
      carlist: list
    })
    console.log(this.data.carlist[i].number)
  },

  // 减
  less:function(e){
    var i = e.target.dataset.index;
    var goodsID = e.target.dataset.param;
    var list=this.data.carlist;
    if (list[i].number>1){
     list[i].number--;
    }

    
    this.setData({
        carlist:list
    })
   
  
  },
// 删除
  remove:function(e){
    var i = e.target.dataset.index;
    const index = e.currentTarget.dataset.index;
    let carlist = this.data.carlist;
    carlist.splice(index, 1);              // 删除购物车列表里这个商品
    this.setData({
      carlist: carlist
    });
    if (!carlist.length) {                  // 如果购物车为空
    
      console.log("空页面")
    } else {                              // 如果不为空
      this.getTotalPrice();           // 重新计算总价格
    }   
  },


  // 单选
  mycheck:function(e){
    var i = e.target.dataset.index;
    var  selected = this.data.carlist[i].selected;         
    this.data.carlist[i].selected= !selected;  
    var carlist = this.data.carlist;
    this.setData({
      carlist: carlist
    });

    this.getTotalPrice();  
  },

  // 全选
  allcheck:function(){
    let isAll = this.data.isAll;    // 是否全选状态
    isAll = !isAll;
    let carlist = this.data.carlist;
    for (let i = 0; i < carlist.length; i++) {
      carlist[i].selected = isAll;            // 改变所有商品状态
    }
    this.setData({
      isAll: isAll,
      carlist: carlist
    });
    this.getTotalPrice();          
  },

// 结算按钮
  jiesuan:function(){
    if(this.data.allprice==0){
      wx.showToast({
        title: '请先选择商品哦',
        icon: 'none',
        duration: 1000
      })
    }else{
      var length = this.data.carlist.length;
      var list=[];
      for(var i = 0 ;i<length;i++){ 
        if (this.data.carlist[i].selected){
          console.log("you")
          list.push(i)
        }else{
          console.log("meiyou")
        }
      }
      console.log(list)

      wx.navigateTo({
        url: `../confirm/confirm?list=`+list,
        success:function(res){
        
        }
      })
    }

   
  },
  getTotalPrice() {
    let carlist = this.data.carlist;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carlist.length; i++) {         // 循环列表得到每个数据
      if (carlist[i].selected) {                   // 判断选中才会计算价格
        total += carlist[i].number*1 * carlist[i].price*1;     // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carlist: carlist,
      allprice: total.toFixed(2)

    })
  },
  


})