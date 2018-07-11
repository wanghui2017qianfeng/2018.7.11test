// pages/add_address/add_address.js


var model = require('../../model/model.js');




var show = false;
var item = {};
Page({

  data: {
    item: {
      show: show
    }
  },


  onLoad:function(options){
    var that = this;
    wx.getStorage({
      key: 'storage',
      success: function (res) {
        
        console.log(res.data)
     
      }
    })
  },




  translate: function (e) {
    model.animationEvents(this, 0, true, 400);
  },
 
  onReady: function (e) {
    var that = this;
    //请求数据
    model.updateAreaData(that, 0, e);

    item = this.data.item;
    this.setData({
      province: item.provinces[item.value[0]].name,
      city: item.citys[item.value[1]].name,
      county: item.countys[item.value[2]].name
    });
  },


  //隐藏picker-view
  hiddenFloatView: function (e) {
    model.animationEvents(this, 200, false, 400);
  },


  //滑动事件
  bindChange: function (e) {
    model.updateAreaData(this, 1, e);
    item = this.data.item;
    this.setData({
      province: item.provinces[item.value[0]].name,
      city: item.citys[item.value[1]].name,
      county: item.countys[item.value[2]].name
    });
  },
  formSubmit: function (e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var { username, phone, city, address, email}=e.detail.value
    var url = encodeURI(city);
    var warn = "";//弹框时提示的内容  
    var flag = true;//判断信息输入是否完整  
    //判断的顺序依次是：姓名-手机号-地址-具体地址-预约日期-预约时间-开荒面积  
    if (e.detail.value.username == "") {
      warn = "请填写您的姓名！";
    } else if (e.detail.value.phone == "") {
      warn = "请填写您的手机号！";
    } else if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(e.detail.value.phone))) {
      warn = "手机号格式不正确";
    } else if (e.detail.value.city == '0') {
      warn = "请选择您的地址"
    } else if (e.detail.value.address == "") {
      warn = "请输入您的具体地址";
    } else if (e.detail.value.email =="") {
      warn = "请填写邮编";
    } else if (!(/^[0-9]{6}$/.test(e.detail.value.email))) {
      warn = "请填写正确的邮编";
    } else {
      flag = false;//若必要信息都填写，则不用弹框，且页面可以进行跳转  
      var that = this;
      //？后面跟的是需要传递到下一个页面的参数  
      wx.navigateTo({
        url: `../address/address?username=${username}&phone=${phone}&city=${url}&address=${address}&email=${email}`,

      })

      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
    //如果信息填写不完整，弹出输入框  
    if (flag == true) {
      wx.showModal({
        title: '提示',
        content: warn
        
      })
    }  



  },


})