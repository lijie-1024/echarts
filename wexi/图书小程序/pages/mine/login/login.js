// login.js
Page({

  /**  
   * 页面的初始数据
   */
  data: {
    account: '',
    password: ''
  },

  accountInput: function (event) {

    this.setData({
      account: event.detail.value
    });
  },
  passwordInput: function (event) {

    this.setData({
      password: event.detail.value
    });
  },
  login: function (event) {
    console.log(this.data);
    wx.request({
      url: 'http://www.kindlepush.com/m/login',
      method: 'POST',
      header: {
         'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 
        'username': this.data.account,
        'password': this.data.password
      },
      success: function (res) {
        console.log(res);
        wx.setStorageSync('auth', res.data.msg);
      },
      fail: function (err) {
        console.log(err);
      }
    });
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