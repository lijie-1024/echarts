// mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [
      [
        { "name": "我的会员" },
        { "name": "我的收藏" },
        { "name": "推送记录" },
        { "name": "最新活动" }
      ],
      [
        { "name": "版本更新" },
        { "name": "清空缓存" },
        { "name": "夜间模式" }
      ],
      [
        { "name": "使用帮助" },
        { "name": "关于我们" }
      ]
    ]
  },
  login: function (event) {
    console.log(event);
    wx.navigateTo({
      url: 'login/login',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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