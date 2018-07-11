//index.js
//获取应用实例
const digital = require("../../utils/data.js")
const app = getApp()
Page({
  data: {
    indicatorDots:true,
    autoplay:true,
    duration:1000,
    interval:3000,
    imgUrls:[],
    list:[
      { url: "../product/product?current=0", classname: "iconfont icon-chenshan", title: "衬衫", color:"#fc4847"},
      { url: "../product/product?current=1", classname: "iconfont icon-nanzhuangleimu", title: "男装", color: "#c40005"},
      { url: "../product/product?current=2", classname: "iconfont icon-lifuzhuanhuan", title: "礼服", color: "#90a5e8" },
      { url: "../product/product?current=3", classname: "iconfont icon-huamianao", title: "棉服", color: "#fabf21" },
      { url: "../product/product?current=4", classname: "iconfont icon-chaoyipu", title: "卫衣", color: "#105443" },
      // { url: "../product/product?current=5", classname: "iconfont icon-lianxiwomen", title: "短外套", color: "#c4212d" },
      // { url: "", classname: "iconfont icon-gongsi", title: "关于聚启", color: "#b89641" },
      // { url: "", classname: "iconfont icon-msnui-product", title: "产品展示", color: "#fd0305" },
      // { url: "", classname: "iconfont icon-lianxiwomen", title: "联系我们", color: "#bbd4ff" },
      // { url: "", classname: "iconfont icon-gongsi", title: "关于聚启", color: "#223697" },

    ],

    showList:[
      {id:"show1",text0:"商家展示一",text1:"全场免费送",img:"http://pic.90sjimg.com/design/00/07/85/23/s_1024_58ca2e1d7d498.png"},
      { id: "show2", text0: "商家展示二", text1: "限时特价",img: "http://pic.90sjimg.com/design/00/07/85/23/58d543b2a297c.png" },
      { id: "show3", text0: "商家展示三", text1: "全场免费送",img: "http://pic.90sjimg.com/design/00/07/85/23/s_1024_58d0ea69c5aed.png" },
      { id: "show4", text0: "商家展示四", text1: "限时特价",img: "http://pic.90sjimg.com/design/00/07/85/23/590f3c6d22945.png" },
      
    ],
   goodsList:[]
   
  },
  onLoad: function (options) {
    this.setData({
      imgUrls:digital.bannerList(),
      goodsList:digital.goodsList()
    })
  },
  search:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../search/search',
    })
  },
  join:function(e){
    console.log(e)
    // console.log()
    var i = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../detail/detail?id=${i}`,
    })
    
  }

})