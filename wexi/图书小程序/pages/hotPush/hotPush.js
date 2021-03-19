// hotPush.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotPush: {},
    titles: { 'month': '月推榜', 'week': '周推榜' }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData();
  },

  requestData: function () {

    var that = this;
    wx.request({
      url: 'http://www.kindlepush.com/m/weekAndMonth',
      success: function (res) {
        that.setData({
          hotPush: res.data,
        });
      },
      fail: function (err) {

      }
    })
  },
  toDetail: function (event) {
    var book = event.currentTarget.dataset.book;
    wx.navigateTo({
      url: '/pages/bookDetail/bookDetail?book=' + JSON.stringify(book),
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