//index.js
//获取应用实例
const app = getApp()
const path = '/praise/pages/praise/'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    top: '',
    height: '',
    top1: '',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: path,
    })
  },
  btnClick1: function () {
    // 现胶囊上边距 = 胶囊上边界坐标 - 状态栏高度
    // 现胶囊右边距 = 屏幕宽度 - 胶囊右边界坐标
    // 现胶囊下边距 = 胶囊下边界坐标 - 胶囊高度 - 状态栏高度
    // 导航栏高度 = 胶囊下边界坐标 + 现胶囊下边距
    //右上角胶囊按钮
    var that = this;
    // top：按钮上边界到屏幕上边的距离。
    // right：按钮右边界到屏幕左边的距离。
    // bottom：按钮下边界到屏幕上边的距离。
    // left：按钮左边界到屏幕左边的距离。
    var data = wx.getMenuButtonBoundingClientRect()
    var bottom=data.bottom
    var aa = wx.getSystemInfoSync().statusBarHeight;//状态栏高度
    var marginBottom=bottom-aa-data.height
    var top1 = bottom+marginBottom
    that.setData({
      top: data.top,
      height: data.height,
      top1: top1,
      marginBottom:marginBottom
    })
  },
  onLoad: function (options) {
    let that=this
    that.btnClick1();
    // 刷新组件
    this.refreshView = this.selectComponent("#refreshView")
   
  },

  //触摸开始
  handletouchstart: function (event) {
    this.refreshView.handletouchstart(event)
  },
  //触摸移动
  handletouchmove: function (event) {
    this.refreshView.handletouchmove(event)
  },
  //触摸结束
  handletouchend: function (event) {
    this.refreshView.handletouchend(event)
  },
  //触摸取消
  handletouchcancel: function (event) {
    this.refreshView.handletouchcancel(event)
  },
  //页面滚动
  onPageScroll: function (event) {
    this.refreshView.onPageScroll(event)
  },
  onPullDownRefresh:function(){
    setTimeout(() => { this.refreshView.stopPullRefresh()},5000)
  },

})